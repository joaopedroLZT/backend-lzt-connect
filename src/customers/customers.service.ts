import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateCustomerInput } from './dto/create-customer.input';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCustomerInput) {
    try {
      return await this.prisma.customer.create({
        data,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Cliente com e-mail ou CPF/CNPJ ja cadastrado.');
      }

      throw error;
    }
  }

  findAll() {
    return this.prisma.customer.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }
}
