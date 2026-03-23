import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateWintourImportInput } from './dto/create-wintour-import.input';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async createWintourImport(data: CreateWintourImportInput) {
    const { nr_arquivo, data_geracao, hora_geracao, nome_agencia, versao_xml, tickets } = data;

    return this.prisma.wintourHeader.create({
      data: {
        nr_arquivo,
        data_geracao,
        hora_geracao,
        nome_agencia,
        versao_xml,
        tickets: {
          create: tickets.map((ticket) => ({
            num_bilhete: ticket.num_bilhete,
            user_id: ticket.user_id || undefined,
            localizador: ticket.localizador,
            fornecedor: ticket.fornecedor,
            passageiro: ticket.passageiro,
            idv_externo: ticket.idv_externo,
            id_posto_atendimento: ticket.id_posto_atendimento,
            posto_atendimento: ticket.posto_atendimento,
            dt_interna_cadastro: ticket.dt_interna_cadastro,
            data_lancamento: ticket.data_lancamento,
            codigo_produto: ticket.codigo_produto,
            prestador_svc: ticket.prestador_svc,
            tour_code: ticket.tour_code,
            forma_de_pagamento: ticket.forma_de_pagamento,
            cartao_mp: ticket.cartao_mp,
            cartao_cp: ticket.cartao_cp,
            conta_taxas_adicionais: ticket.conta_taxas_adicionais,
            conta_taxas_adicionais2: ticket.conta_taxas_adicionais2,
            cod_outras_txs: ticket.cod_outras_txs,
            cod_outras_txs2: ticket.cod_outras_txs2,
            cod_outras_txs3: ticket.cod_outras_txs3,
            cta_tx_emissao: ticket.cta_tx_emissao,
            ccustos_agencia: ticket.ccustos_agencia,
            moeda: ticket.moeda,
            emissor: ticket.emissor,
            promotor: ticket.promotor,
            gerente: ticket.gerente,
            cliente: ticket.cliente,
            ccustos_cliente: ticket.ccustos_cliente,
            numero_requisicao: ticket.numero_requisicao,
            data_requisicao: ticket.data_requisicao,
            tipo_passageiro: ticket.tipo_passageiro,
            solicitante: ticket.solicitante,
            aprovador: ticket.aprovador,
            departamento: ticket.departamento,
            matricula: ticket.matricula,
            num_cc: ticket.num_cc,
            cod_autorizacao_cc: ticket.cod_autorizacao_cc,
            tipo_domest_inter: ticket.tipo_domest_inter,
            scdp: ticket.scdp,
            info_adicionais: ticket.info_adicionais,
            info_internas: ticket.info_internas,
            canal_captacao: ticket.canal_captacao,
            cta_du_rav: ticket.cta_du_rav,
            situacao_contabil: ticket.situacao_contabil,
            projeto: ticket.projeto,
            motivo_viagem: ticket.motivo_viagem,
            motivo_recusa: ticket.motivo_recusa,
            tipo_roteiro_aereo: ticket.tipo_roteiro_aereo,
            destino_rot_aereo: ticket.destino_rot_aereo,
            canal_venda: ticket.canal_venda,
            multi_ccustos_cli: ticket.multi_ccustos_cli,
            tipo_roteiro: ticket.tipo_roteiro,
            tarifa_net: ticket.tarifa_net,
            tipo_emissao: ticket.tipo_emissao,
            co2_kg: ticket.co2_kg,
            cid_dest_principal: ticket.cid_dest_principal,
            
            apportionments: {
              create: ticket.apportionments?.map((a) => ({
                ccustos_cliente: a.ccustos_cliente,
                percentual: a.percentual,
              })),
            },
            values: {
              create: ticket.values?.map((v) => ({
                codigo: v.codigo,
                valor: v.valor,
                valor_df: v.valor_df,
                valor_mp: v.valor_mp,
              })),
            },
            expiry_dates: {
              create: ticket.expiry?.map((e) => ({
                codigo: e.codigo,
                valor: e.valor,
              })),
            },
            air_data: ticket.sections
              ? {
                  create: {
                    sections: {
                      create: ticket.sections.map((s) => ({
                        cia_iata: s.cia_iata,
                        numero_voo: s.numero_voo,
                        aeroporto_origem: s.aeroporto_origem,
                        aeroporto_destino: s.aeroporto_destino,
                        data_partida: s.data_partida,
                        hora_partida: s.hora_partida,
                        data_chegada: s.data_chegada,
                        hora_chegada: s.hora_chegada,
                        classe: s.classe,
                        base_tarifaria: s.base_tarifaria,
                        ticket_designator: s.ticket_designator,
                        conexao_arp_partida: s.conexao_arp_partida,
                        conexao_arp_chegada: s.conexao_arp_chegada,
                        co2_kg: s.co2_kg,
                      })),
                    },
                  },
                }
              : undefined,
            hotel_data: ticket.hotel
              ? {
                  create: {
                    nr_apts: ticket.hotel.nr_apts,
                    categ_apt: ticket.hotel.categ_apt,
                    tipo_apt: ticket.hotel.tipo_apt,
                    dt_check_in: ticket.hotel.dt_check_in,
                    dt_check_out: ticket.hotel.dt_check_out,
                    nr_hospedes: ticket.hotel.nr_hospedes,
                    reg_alimentacao: ticket.hotel.reg_alimentacao,
                    cod_tipo_pagto: ticket.hotel.cod_tipo_pagto,
                    dt_confirmacao: ticket.hotel.dt_confirmacao,
                    confirmado_por: ticket.hotel.confirmado_por,
                  },
                }
              : undefined,
            customer_data: ticket.customer
              ? {
                  create: {
                    acao_cli: ticket.customer.acao_cli,
                    razao_social: ticket.customer.razao_social,
                    tipo_endereco: ticket.customer.tipo_endereco,
                    endereco: ticket.customer.endereco,
                    numero: ticket.customer.numero,
                    complemento: ticket.customer.complemento,
                    bairro: ticket.customer.bairro,
                    cep: ticket.customer.cep,
                    cidade: ticket.customer.cidade,
                    estado: ticket.customer.estado,
                    tipo_fj: ticket.customer.tipo_fj,
                    dt_nasc: ticket.customer.dt_nasc,
                    tel: ticket.customer.tel,
                    celular: ticket.customer.celular,
                    cpf_cnpj: ticket.customer.cpf_cnpj,
                    insc_identidade: ticket.customer.insc_identidade,
                    sexo: ticket.customer.sexo,
                    dt_cadastro: ticket.customer.dt_cadastro,
                    email: ticket.customer.email,
                  },
                }
              : undefined,
            sales_origins: {
              create: ticket.sales_origin?.map((so) => ({
                item: so.item,
              })),
            },
            conjugates: {
              create: ticket.ticket_conjugate?.map((c) => ({
                item: c.item,
              })),
            },
            location_data: ticket.location
              ? {
                  create: {
                    cidade_retirada: ticket.location.cidade_retirada,
                    local_retirada: ticket.location.local_retirada,
                    dt_retirada: ticket.location.dt_retirada,
                    hr_retirada: ticket.location.hr_retirada,
                    local_devolucao: ticket.location.local_devolucao,
                    dt_devolucao: ticket.location.dt_devolucao,
                    hr_devolucao: ticket.location.hr_devolucao,
                    categ_veiculo: ticket.location.categ_veiculo,
                    cod_tipo_pagto: ticket.location.cod_tipo_pagto,
                    dt_confirmacao: ticket.location.dt_confirmacao,
                    confirmado_por: ticket.location.confirmado_por,
                  },
                }
              : undefined,
            package_data: ticket.package
              ? {
                  create: {
                    cid_dest_principal: ticket.package.cid_dest_principal,
                    data_inicio_pacote: ticket.package.data_inicio_pacote,
                    data_fim_pacote: ticket.package.data_fim_pacote,
                    descricao_pacote: ticket.package.descricao_pacote,
                  },
                }
              : undefined,
            other_services: ticket.other_services
              ? {
                  create: {
                    cid_dest_principal: ticket.other_services.cid_dest_principal,
                    data_inicio_outros_svcs: ticket.other_services.data_inicio_outros_svcs,
                    data_fim_outros_svcs: ticket.other_services.data_fim_outros_svcs,
                    descricao_outros_svcs: ticket.other_services.descricao_outros_svcs,
                  },
                }
              : undefined,
            transfer_data: ticket.transfer
              ? {
                  create: {
                    hotel_transfer_in: ticket.transfer.hotel_transfer_in,
                    cia_iata_chegada: ticket.transfer.cia_iata_chegada,
                    numero_voo_chegada: ticket.transfer.numero_voo_chegada,
                    data_chegada_voo: ticket.transfer.data_chegada_voo,
                    hora_chegada_voo: ticket.transfer.hora_chegada_voo,
                    aeroporto_chegada: ticket.transfer.aeroporto_chegada,
                    hotel_transfer_out: ticket.transfer.hotel_transfer_out,
                    data_apanhar_pax: ticket.transfer.data_apanhar_pax,
                    hora_apanhar_pax: ticket.transfer.hora_apanhar_pax,
                    cia_iata_partida: ticket.transfer.cia_iata_partida,
                    numero_voo_partida: ticket.transfer.numero_voo_partida,
                    data_partida_voo: ticket.transfer.data_partida_voo,
                    hora_partida_voo: ticket.transfer.hora_partida_voo,
                    aeroporto_partida: ticket.transfer.aeroporto_partida,
                  },
                }
              : undefined,
            wintour_other: ticket.other
              ? {
                  create: {
                    descricao: ticket.other.descricao,
                  },
                }
              : undefined,
          })),
        },
      },
      include: {
        tickets: {
          include: {
            apportionments: true,
            values: true,
            expiry_dates: true,
            air_data: {
              include: {
                sections: true,
              },
            },
            hotel_data: true,
            customer_data: true,
            sales_origins: true,
            conjugates: true,
            location_data: true,
            package_data: true,
            other_services: true,
            transfer_data: true,
            wintour_other: true,
            user: true,
          },
        },
      },
    });
  }
}
