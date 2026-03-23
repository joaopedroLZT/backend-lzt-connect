import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEmail, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserInput {
  @ApiProperty({ required: false })
  @IsOptional()
  firstname?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  lastname?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  phone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  birthday?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  street?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  city?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  state?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  zip_code?: string;
}
