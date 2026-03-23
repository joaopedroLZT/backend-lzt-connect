import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from '../auth/password.service';
import { BadRequestException } from '@nestjs/common';
import { Role } from '@prisma/client';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;
  let passwordService: PasswordService;

  const mockPrismaService = {
    user: {
      update: jest.fn(),
    },
  };

  const mockPasswordService = {
    hashPassword: jest.fn(),
    validatePassword: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: PasswordService, useValue: mockPasswordService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
    passwordService = module.get<PasswordService>(PasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('updateUser', () => {
    it('should update user successfully', async () => {
      const updateData = { firstname: 'New' };
      mockPrismaService.user.update.mockResolvedValue({ id: '1', ...updateData });

      const result = await service.updateUser('1', updateData as any);

      expect(result.firstname).toBe('New');
      expect(mockPrismaService.user.update).toHaveBeenCalled();
    });
  });

  describe('changePassword', () => {
    it('should change password successfully', async () => {
      const changePasswordData = { old_password: 'old', new_password: 'new' };
      mockPasswordService.validatePassword.mockResolvedValue(true);
      mockPasswordService.hashPassword.mockResolvedValue('new-hashed');
      mockPrismaService.user.update.mockResolvedValue({ id: '1' });

      await service.changePassword('1', 'old-hashed', changePasswordData as any);

      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        data: { password: 'new-hashed' },
        where: { id: '1' },
      });
    });

    it('should throw BadRequestException if old password invalid', async () => {
      mockPasswordService.validatePassword.mockResolvedValue(false);

      await expect(
        service.changePassword('1', 'old-hashed', { old_password: 'wrong' } as any),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('updateRole', () => {
    it('should update role successfully', async () => {
      mockPrismaService.user.update.mockResolvedValue({ id: '1', role: Role.ADMIN });

      const result = await service.updateRole('1', Role.ADMIN);

      expect(result.role).toBe(Role.ADMIN);
      expect(mockPrismaService.user.update).toHaveBeenCalled();
    });
  });
});
