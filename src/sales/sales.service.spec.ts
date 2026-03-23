import { Test, TestingModule } from '@nestjs/testing';
import { SalesService } from './sales.service';
import { PrismaService } from 'nestjs-prisma';

describe('SalesService', () => {
  let service: SalesService;
  let prisma: PrismaService;

  const mockPrismaService = {
    wintourHeader: {
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SalesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<SalesService>(SalesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createWintourImport', () => {
    it('should create a Wintour import successfully', async () => {
      const importData = {
        nr_arquivo: 'ACC-123',
        data_geracao: '2023-01-01',
        hora_geracao: '10:00',
        nome_agencia: 'LZT',
        versao_xml: 5,
        tickets: [
          {
            num_bilhete: '123456789',
            localizador: 'LOC123',
            user_id: 'user-1',
          },
        ],
      };

      mockPrismaService.wintourHeader.create.mockResolvedValue({ id: 'header-1', ...importData });

      const result = await service.createWintourImport(importData as any);

      expect(result.id).toBe('header-1');
      expect(mockPrismaService.wintourHeader.create).toHaveBeenCalled();
    });
  });
});
