import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class ChangePasswordInput {
  @ApiProperty()
  @IsNotEmpty({ message: 'A senha antiga não pode estar vazia' })
  @MinLength(7, { message: 'A senha antiga deve ter no mínimo 7 caracteres' })
  old_password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A nova senha não pode estar vazia' })
  @MinLength(7, { message: 'A nova senha deve ter no mínimo 7 caracteres' })
  new_password: string;
}
