import { ApiProperty } from '@nestjs/swagger';

export class Token {
  @ApiProperty({ description: 'JWT token de acesso' })
  access_token: string;

  @ApiProperty({ description: 'JWT token para atualizar' })
  refresh_token: string;
}
