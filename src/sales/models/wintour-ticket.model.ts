import 'reflect-metadata';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { BaseModel } from '../../common/models/base.model';
import { 
  WintourHeader, 
  WintourApportionment, 
  WintourValue, 
  WintourExpiry, 
  WintourAir, 
  WintourHotel, 
  WintourCustomerData,
  WintourSalesOrigin,
  WintourTicketConjugate,
  WintourLocation,
  WintourPackage,
  WintourOtherService,
  WintourTransfer,
  WintourOther
} from './wintour-base.model';

@ObjectType()
export class WintourTicket extends BaseModel {
  @Field(() => WintourHeader, { nullable: true })
  file?: WintourHeader;

  @Field({ nullable: true })
  num_bilhete?: string;

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
  expiry_dates?: WintourExpiry[];

  @Field(() => WintourAir, { nullable: true })
  air_data?: WintourAir;

  @Field(() => WintourHotel, { nullable: true })
  hotel_data?: WintourHotel;

  @Field(() => WintourCustomerData, { nullable: true })
  customer_data?: WintourCustomerData;

  @Field(() => [WintourSalesOrigin], { nullable: true })
  sales_origins?: WintourSalesOrigin[];

  @Field(() => [WintourTicketConjugate], { nullable: true })
  conjugates?: WintourTicketConjugate[];

  @Field(() => WintourLocation, { nullable: true })
  location_data?: WintourLocation;

  @Field(() => WintourPackage, { nullable: true })
  package_data?: WintourPackage;

  @Field(() => WintourOtherService, { nullable: true })
  other_services?: WintourOtherService;

  @Field(() => WintourTransfer, { nullable: true })
  transfer_data?: WintourTransfer;

  @Field(() => WintourOther, { nullable: true })
  wintourOther?: WintourOther;
}
