import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { BaseEntity } from '../../common/entities/base.entity';
import { Role } from '@prisma/client';

export class User extends BaseEntity {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  firstname?: string;

  @ApiProperty({ required: false })
  lastname?: string;

  @ApiProperty({ required: false })
  phone?: string;

  @ApiProperty({ required: false })
  birthday?: Date;

  @ApiProperty({ required: false })
  street?: string;

  @ApiProperty({ required: false })
  city?: string;

  @ApiProperty({ required: false })
  state?: string;

  @ApiProperty({ required: false })
  zip_code?: string;

  @ApiProperty({ enum: Role })
  role: Role;

  password: string;
}

