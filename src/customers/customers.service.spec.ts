import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { CustomersService } from './customers.service';

describe('CustomersService', () => {
  let service: CustomersService;

  const mockPrismaService = {
    customer: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a customer', async () => {
    mockPrismaService.customer.create.mockResolvedValue({
      id: 'customer-1',
      razao_social: 'LZT Corp',
    });

    const result = await service.create({
      razao_social: 'LZT Corp',
      email: 'contato@lzt.com',
    });

    expect(mockPrismaService.customer.create).toHaveBeenCalledWith({
      data: {
        razao_social: 'LZT Corp',
        email: 'contato@lzt.com',
      },
    });
    expect(result.id).toBe('customer-1');
  });

  it('should throw ConflictException when duplicate customer exists', async () => {
    mockPrismaService.customer.create.mockRejectedValue(
      new Prisma.PrismaClientKnownRequestError('duplicate', {
        code: 'P2002',
        clientVersion: 'test',
      }),
    );

    await expect(
      service.create({
        razao_social: 'LZT Corp',
        cpf_cnpj: '00.000.000/0001-91',
      }),
    ).rejects.toThrow(ConflictException);
  });

  it('should list customers ordered by created_at desc', async () => {
    mockPrismaService.customer.findMany.mockResolvedValue([
      { id: 'customer-1', razao_social: 'LZT Corp' },
    ]);

    const result = await service.findAll();

    expect(mockPrismaService.customer.findMany).toHaveBeenCalledWith({
      orderBy: {
        created_at: 'desc',
      },
    });
    expect(result).toHaveLength(1);
  });
});
