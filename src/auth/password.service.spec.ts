import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'nestjs-prisma';
import { ConfigService } from '@nestjs/config';
import { PasswordService } from './password.service';

describe('PasswordService', () => {
  let service: PasswordService;

  const mockConfigService = {
    get: jest.fn().mockImplementation((key: string) => {
      if (key === 'security') {
        return { bcryptSaltOrRound: 10 };
      }
      return null;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PasswordService,
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<PasswordService>(PasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should hash a password', async () => {
    const password = 'password123';
    const hashedPassword = await service.hashPassword(password);
    expect(hashedPassword).toBeDefined();
    expect(hashedPassword).not.toBe(password);
  });

  it('should validate a correct password', async () => {
    const password = 'password123';
    const hashedPassword = await service.hashPassword(password);
    const isValid = await service.validatePassword(password, hashedPassword);
    expect(isValid).toBe(true);
  });

  it('should invalidate an incorrect password', async () => {
    const password = 'password123';
    const hashedPassword = await service.hashPassword(password);
    const isValid = await service.validatePassword(
      'wrongpassword',
      hashedPassword,
    );
    expect(isValid).toBe(false);
  });
});
