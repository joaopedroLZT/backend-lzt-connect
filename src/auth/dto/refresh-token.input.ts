import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty } from 'class-validator';

export class RefreshTokenInput {
  @IsNotEmpty()
  @IsJWT()
  @ApiProperty({ description: 'JWT token para atualizar' })
  token: string;
}
