import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerInput {
  @ApiProperty()
  razao_social: string;

  @ApiProperty({ required: false })
  acao_cli?: string;

  @ApiProperty({ required: false })
  tipo_endereco?: string;

  @ApiProperty({ required: false })
  endereco?: string;

  @ApiProperty({ required: false })
  numero?: string;

  @ApiProperty({ required: false })
  complemento?: string;

  @ApiProperty({ required: false })
  bairro?: string;

  @ApiProperty({ required: false })
  cep?: string;

  @ApiProperty({ required: false })
  cidade?: string;

  @ApiProperty({ required: false })
  estado?: string;

  @ApiProperty({ required: false })
  tipo_fj?: string;

  @ApiProperty({ required: false })
  dt_nasc?: Date;

  @ApiProperty({ required: false })
  tel?: string;

  @ApiProperty({ required: false })
  celular?: string;

  @ApiProperty({ required: false })
  cpf_cnpj?: string;

  @ApiProperty({ required: false })
  insc_identidade?: string;

  @ApiProperty({ required: false })
  sexo?: string;

  @ApiProperty({ required: false })
  dt_cadastro?: Date;

  @ApiProperty({ required: false })
  email?: string;
}
