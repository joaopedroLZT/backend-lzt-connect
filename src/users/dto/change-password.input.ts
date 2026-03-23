import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class ChangePasswordInput {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  old_password: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  new_password: string;
}
