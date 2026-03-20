import 'reflect-metadata';
import { ObjectType, Field, Int, Float, ID } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import { User } from '../../users/models/user.model';

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
  @Field({ nullable: true })
  ticket_designator?: string;
  @Field(() => Int, { nullable: true })
  conexao_arp_partida?: number;
  @Field(() => Int, { nullable: true })
  conexao_arp_chegada?: number;
  @Field(() => Float, { nullable: true })
  co2_kg?: number;
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
  @Field({ nullable: true })
  cod_tipo_pagto?: string;
  @Field({ nullable: true })
  dt_confirmacao?: Date;
  @Field({ nullable: true })
  confirmado_por?: string;
}

@ObjectType()
export class WintourCustomerData {
  @Field({ nullable: true })
  acao_cli?: string;
  @Field({ nullable: true })
  razao_social?: string;
  @Field({ nullable: true })
  tipo_endereco?: string;
  @Field({ nullable: true })
  endereco?: string;
  @Field({ nullable: true })
  numero?: string;
  @Field({ nullable: true })
  complemento?: string;
  @Field({ nullable: true })
  bairro?: string;
  @Field({ nullable: true })
  cep?: string;
  @Field({ nullable: true })
  cidade?: string;
  @Field({ nullable: true })
  estado?: string;
  @Field({ nullable: true })
  tipo_fj?: string;
  @Field({ nullable: true })
  dt_nasc?: Date;
  @Field({ nullable: true })
  tel?: string;
  @Field({ nullable: true })
  celular?: string;
  @Field({ nullable: true })
  cpf_cnpj?: string;
  @Field({ nullable: true })
  insc_identidade?: string;
  @Field({ nullable: true })
  sexo?: string;
  @Field({ nullable: true })
  dt_cadastro?: Date;
  @Field({ nullable: true })
  email?: string;
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
  cid_dest_principal?: string;
  @Field({ nullable: true })
  data_inicio_pacote?: Date;
  @Field({ nullable: true })
  data_fim_pacote?: Date;
  @Field({ nullable: true })
  descricao_pacote?: string;
}

@ObjectType()
export class WintourOtherService {
  @Field({ nullable: true })
  cid_dest_principal?: string;
  @Field({ nullable: true })
  data_inicio_outros_svcs?: Date;
  @Field({ nullable: true })
  data_fim_outros_svcs?: Date;
  @Field({ nullable: true })
  descricao_outros_svcs?: string;
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
  data_apanhar_pax?: Date;
  @Field({ nullable: true })
  hora_apanhar_pax?: string;
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

@ObjectType()
export class WintourTicket extends BaseModel {
  @Field({ nullable: true })
  num_bilhete?: string;

  @Field({ nullable: true })
  userId?: string;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field({ nullable: true })
  localizador?: string;

  @Field({ nullable: true })
  fornecedor?: string;

  @Field({ nullable: true })
  passageiro?: string;

  @Field({ nullable: true })
  idv_externo?: string;

  @Field(() => Int, { nullable: true })
  id_posto_atendimento?: number;

  @Field({ nullable: true })
  posto_atendimento?: string;

  @Field({ nullable: true })
  dt_interna_cadastro?: Date;

  @Field({ nullable: true })
  data_lancamento?: Date;

  @Field({ nullable: true })
  codigo_produto?: string;

  @Field({ nullable: true })
  prestador_svc?: string;

  @Field({ nullable: true })
  tour_code?: string;

  @Field({ nullable: true })
  forma_de_pagamento?: string;

  @Field({ nullable: true })
  cartao_mp?: string;

  @Field({ nullable: true })
  cartao_cp?: string;

  @Field({ nullable: true })
  conta_taxas_adicionais?: string;

  @Field({ nullable: true })
  conta_taxas_adicionais2?: string;

  @Field({ nullable: true })
  cod_outras_txs?: string;

  @Field({ nullable: true })
  cod_outras_txs2?: string;

  @Field({ nullable: true })
  cod_outras_txs3?: string;

  @Field({ nullable: true })
  cta_tx_emissao?: string;

  @Field({ nullable: true })
  ccustos_agencia?: string;

  @Field({ nullable: true })
  moeda?: string;

  @Field({ nullable: true })
  emissor?: string;

  @Field({ nullable: true })
  promotor?: string;

  @Field({ nullable: true })
  gerente?: string;

  @Field({ nullable: true })
  cliente?: string;

  @Field({ nullable: true })
  ccustos_cliente?: string;

  @Field({ nullable: true })
  numero_requisicao?: string;

  @Field({ nullable: true })
  data_requisicao?: Date;

  @Field({ nullable: true })
  tipo_passageiro?: string;

  @Field({ nullable: true })
  solicitante?: string;

  @Field({ nullable: true })
  aprovador?: string;

  @Field({ nullable: true })
  departamento?: string;

  @Field({ nullable: true })
  matricula?: string;

  @Field({ nullable: true })
  num_cc?: string;

  @Field({ nullable: true })
  cod_autorizacao_cc?: string;

  @Field({ nullable: true })
  tipo_domest_inter?: string;

  @Field({ nullable: true })
  scdp?: string;

  @Field({ nullable: true })
  info_adicionais?: string;

  @Field({ nullable: true })
  info_internas?: string;

  @Field({ nullable: true })
  canal_captacao?: string;

  @Field({ nullable: true })
  cta_du_rav?: string;

  @Field({ nullable: true })
  situacao_contabil?: string;

  @Field({ nullable: true })
  projeto?: string;

  @Field({ nullable: true })
  motivo_viagem?: string;

  @Field({ nullable: true })
  motivo_recusa?: string;

  @Field({ nullable: true })
  tipo_roteiro_aereo?: string;

  @Field({ nullable: true })
  destino_rot_aereo?: string;

  @Field({ nullable: true })
  canal_venda?: string;

  @Field({ nullable: true })
  multi_ccustos_cli?: string;

  @Field(() => Int, { nullable: true })
  tipo_roteiro?: number;

  @Field(() => Int, { nullable: true })
  tarifa_net?: number;

  @Field({ nullable: true })
  tipo_emissao?: string;

  @Field(() => Float, { nullable: true })
  co2_kg?: number;

  @Field({ nullable: true })
  cid_dest_principal?: string;

  @Field(() => [WintourApportionment], { nullable: true })
  apportionments?: WintourApportionment[];

  @Field(() => [WintourValue], { nullable: true })
  values?: WintourValue[];

  @Field(() => [WintourExpiry], { nullable: true })
  expiry?: WintourExpiry[];

  @Field(() => WintourAir, { nullable: true })
  air_data?: WintourAir;

  @Field(() => WintourHotel, { nullable: true })
  hotel?: WintourHotel;

  @Field(() => WintourCustomerData, { nullable: true })
  customer?: WintourCustomerData;

  @Field(() => [WintourSalesOrigin], { nullable: true })
  sales_origin?: WintourSalesOrigin[];

  @Field(() => [WintourTicketConjugate], { nullable: true })
  ticket_conjugate?: WintourTicketConjugate[];

  @Field(() => WintourLocation, { nullable: true })
  location?: WintourLocation;

  @Field(() => WintourPackage, { nullable: true })
  package?: WintourPackage;

  @Field(() => WintourOtherService, { nullable: true })
  other_services?: WintourOtherService;

  @Field(() => WintourTransfer, { nullable: true })
  transfer?: WintourTransfer;

  @Field(() => WintourOther, { nullable: true })
  other?: WintourOther;
}

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
