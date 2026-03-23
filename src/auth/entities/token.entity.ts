import { ApiProperty } from '@nestjs/swagger';

export class Token {
  @ApiProperty({ description: 'JWT token de acesso' })
  accessToken: string;

  @ApiProperty({ description: 'JWT token para atualizar' })
  refreshToken: string;
}
