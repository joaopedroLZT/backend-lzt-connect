import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class ChangePasswordInput {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(7)
  old_password: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(7)
  new_password: string;
}
