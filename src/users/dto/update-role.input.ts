import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class UpdateRoleInput {
  @ApiProperty()
  @IsNotEmpty({ message: 'O ID do usuário não pode estar vazio' })
  user_id: string;

  @ApiProperty({ enum: Role })
  @IsEnum(Role, { message: 'O cargo deve ser um valor válido (ADMIN ou USER)' })
  role: Role;
}
