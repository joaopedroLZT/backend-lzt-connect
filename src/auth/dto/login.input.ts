import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginInput {
  @ApiProperty()
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @MinLength(7, { message: 'A senha deve ter no mínimo 7 caracteres' })
  password: string;
}
