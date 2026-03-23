import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class UpdateRoleInput {
  @ApiProperty()
  @IsNotEmpty()
  user_id: string;

  @ApiProperty({ enum: Role })
  @IsEnum(Role)
  role: Role;
}
