import 'reflect-metadata';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import { WintourTicket } from './wintour-ticket.model';

@ObjectType()
export class WintourHeader extends BaseModel {
  @Field()
  nr_arquivo: string;

  @Field()
  data_geracao: string;

  @Field()
  hora_geracao: string;

  @Field()
  nome_agencia: string;

  @Field(() => Int)
  versao_xml: number;

  @Field(() => [WintourTicket], { nullable: true })
  tickets?: WintourTicket[];
}

@ObjectType()
export class WintourApportionment {
  @Field()
  ccustos_cliente: string;
  @Field(() => Float)
  percentual: number;
}

@ObjectType()
export class WintourValue {
  @Field()
  codigo: string;
  @Field(() => Float)
  valor: number;
  @Field(() => Float, { nullable: true })
  valor_df?: number;
  @Field(() => Float, { nullable: true })
  valor_mp?: number;
}

@ObjectType()
export class WintourExpiry {
  @Field()
  codigo: string;
  @Field()
  valor: Date;
}

@ObjectType()
export class WintourSection {
  @Field()
  cia_iata: string;
  @Field({ nullable: true })
  numero_voo?: string;
  @Field()
  aeroporto_origem: string;
  @Field()
  aeroporto_destino: string;
  @Field({ nullable: true })
  data_partida?: Date;
  @Field({ nullable: true })
  hora_partida?: string;
  @Field({ nullable: true })
  data_chegada?: Date;
  @Field({ nullable: true })
  hora_chegada?: string;
  @Field({ nullable: true })
  classe?: string;
  @Field({ nullable: true })
  base_tarifaria?: string;
}

@ObjectType()
export class WintourAir {
  @Field(() => [WintourSection])
  sections: WintourSection[];
}

@ObjectType()
export class WintourHotel {
  @Field(() => Int, { nullable: true })
  nr_apts?: number;
  @Field({ nullable: true })
  categ_apt?: string;
  @Field({ nullable: true })
  tipo_apt?: string;
  @Field({ nullable: true })
  dt_check_in?: Date;
  @Field({ nullable: true })
  dt_check_out?: Date;
  @Field(() => Int, { nullable: true })
  nr_hospedes?: number;
  @Field({ nullable: true })
  reg_alimentacao?: string;
}

@ObjectType()
export class WintourCustomerData {
  @Field({ nullable: true })
  razao_social?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  cpf_cnpj?: string;
  @Field({ nullable: true })
  endereco?: string;
  @Field({ nullable: true })
  cidade?: string;
  @Field({ nullable: true })
  estado?: string;
  @Field({ nullable: true })
  cep?: string;
}

@ObjectType()
export class WintourSalesOrigin {
  @Field(() => Int)
  item: number;
}

@ObjectType()
export class WintourTicketConjugate {
  @Field()
  item: string;
}

@ObjectType()
export class WintourLocation {
  @Field({ nullable: true })
  cidade_retirada?: string;
  @Field({ nullable: true })
  local_retirada?: string;
  @Field({ nullable: true })
  dt_retirada?: Date;
  @Field({ nullable: true })
  hr_retirada?: string;
  @Field({ nullable: true })
  local_devolucao?: string;
  @Field({ nullable: true })
  dt_devolucao?: Date;
  @Field({ nullable: true })
  hr_devolucao?: string;
  @Field({ nullable: true })
  categ_veiculo?: string;
  @Field({ nullable: true })
  cod_tipo_pagto?: string;
  @Field({ nullable: true })
  dt_confirmacao?: Date;
  @Field({ nullable: true })
  confirmado_por?: string;
}

@ObjectType()
export class WintourPackage {
  @Field({ nullable: true })
  descricao?: string;
  @Field({ nullable: true })
  dt_inicio?: Date;
  @Field({ nullable: true })
  dt_fim?: Date;
}

@ObjectType()
export class WintourOtherService {
  @Field({ nullable: true })
  descricao?: string;
  @Field({ nullable: true })
  dt_inicio?: Date;
  @Field({ nullable: true })
  dt_fim?: Date;
}

@ObjectType()
export class WintourTransfer {
  @Field({ nullable: true })
  hotel_transfer_in?: string;
  @Field({ nullable: true })
  cia_iata_chegada?: string;
  @Field({ nullable: true })
  numero_voo_chegada?: string;
  @Field({ nullable: true })
  data_chegada_voo?: Date;
  @Field({ nullable: true })
  hora_chegada_voo?: string;
  @Field({ nullable: true })
  aeroporto_chegada?: string;
  @Field({ nullable: true })
  hotel_transfer_out?: string;
  @Field({ nullable: true })
  cia_iata_partida?: string;
  @Field({ nullable: true })
  numero_voo_partida?: string;
  @Field({ nullable: true })
  data_partida_voo?: Date;
  @Field({ nullable: true })
  hora_partida_voo?: string;
  @Field({ nullable: true })
  aeroporto_partida?: string;
}

@ObjectType()
export class WintourOther {
  @Field()
  descricao: string;
}
