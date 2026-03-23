import { PrismaService } from 'nestjs-prisma';
import { Role } from '@prisma/client';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PasswordService } from '../auth/password.service';
import { ChangePasswordInput } from './dto/change-password.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  updateUser(userId: string, newUserData: UpdateUserInput) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput,
  ) {
    const passwordValid = await this.passwordService.validatePassword(
      changePassword.old_password,
      userPassword,
    );

    if (!passwordValid) {
      throw new BadRequestException('Senha Inválida');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.new_password,
    );

    return this.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    });
  }

  updateRole(userId: string, newRole: Role) {
    return this.prisma.user.update({
      data: { role: newRole },
      where: { id: userId },
    });
  }
}
