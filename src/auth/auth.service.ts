import { PrismaService } from 'nestjs-prisma';
import { Prisma, User } from '@prisma/client';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { SignupInput } from './dto/signup.input';
import { Token } from './entities/token.entity';
import { SecurityConfig } from '../common/configs/config.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordService,
    private readonly configService: ConfigService,
  ) {}

  async createUser(payload: SignupInput): Promise<Token> {
    const hashedPassword = await this.passwordService.hashPassword(
      payload.password,
    );

    try {
      const user = await this.prisma.user.create({
        data: {
          ...payload,
          password: hashedPassword,
          role: 'USER',
        },
      });

      return this.generateTokens({
        user_id: user.id,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        throw new ConflictException(`O e-mail ${payload.email} já está em uso.`);
      }
      throw new Error(e);
    }
  }

  async login(email: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`Nenhum usuário encontrado para o e-mail: ${email}`);
    }

    const passwordValid = await this.passwordService.validatePassword(
      password,
      user.password,
    );

    if (!passwordValid) {
      throw new BadRequestException('Senha inválida');
    }

    return this.generateTokens({
      user_id: user.id,
    });
  }

  validateUser(user_id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: user_id } });
  }

  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['user_id'];
    return this.prisma.user.findUnique({ where: { id } });
  }

  generateTokens(payload: { user_id: string }): Token {
    return {
      access_token: this.generateAccessToken(payload),
      refresh_token: this.generateRefreshToken(payload),
    };
  }

  private generateAccessToken(payload: { user_id: string }): string {
    return this.jwtService.sign(payload);
  }

  private generateRefreshToken(payload: { user_id: string }): string {
    const securityConfig = this.configService.get<SecurityConfig>('security');
    return this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: securityConfig.refreshIn,
    });
  }

  refreshToken(token: string) {
    try {
      const { user_id } = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });

      return this.generateTokens({
        user_id,
      });
    } catch (e) {
      throw new UnauthorizedException('Não autorizado');
    }
  }
}

