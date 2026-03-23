/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourAir` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourApportionment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourCustomerData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourExpiry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourHeader` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourHotel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourOther` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourOtherService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourPackage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourSalesOrigin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourTicket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourTicketConjugate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourTransfer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WintourValue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WintourAir" DROP CONSTRAINT "WintourAir_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourApportionment" DROP CONSTRAINT "WintourApportionment_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourCustomerData" DROP CONSTRAINT "WintourCustomerData_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourExpiry" DROP CONSTRAINT "WintourExpiry_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourHotel" DROP CONSTRAINT "WintourHotel_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourLocation" DROP CONSTRAINT "WintourLocation_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourOther" DROP CONSTRAINT "WintourOther_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourOtherService" DROP CONSTRAINT "WintourOtherService_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourPackage" DROP CONSTRAINT "WintourPackage_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourSalesOrigin" DROP CONSTRAINT "WintourSalesOrigin_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourSection" DROP CONSTRAINT "WintourSection_airId_fkey";

-- DropForeignKey
ALTER TABLE "WintourTicket" DROP CONSTRAINT "WintourTicket_headerId_fkey";

-- DropForeignKey
ALTER TABLE "WintourTicket" DROP CONSTRAINT "WintourTicket_userId_fkey";

-- DropForeignKey
ALTER TABLE "WintourTicketConjugate" DROP CONSTRAINT "WintourTicketConjugate_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourTransfer" DROP CONSTRAINT "WintourTransfer_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "WintourValue" DROP CONSTRAINT "WintourValue_ticketId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "WintourAir";

-- DropTable
DROP TABLE "WintourApportionment";

-- DropTable
DROP TABLE "WintourCustomerData";

-- DropTable
DROP TABLE "WintourExpiry";

-- DropTable
DROP TABLE "WintourHeader";

-- DropTable
DROP TABLE "WintourHotel";

-- DropTable
DROP TABLE "WintourLocation";

-- DropTable
DROP TABLE "WintourOther";

-- DropTable
DROP TABLE "WintourOtherService";

-- DropTable
DROP TABLE "WintourPackage";

-- DropTable
DROP TABLE "WintourSalesOrigin";

-- DropTable
DROP TABLE "WintourSection";

-- DropTable
DROP TABLE "WintourTicket";

-- DropTable
DROP TABLE "WintourTicketConjugate";

-- DropTable
DROP TABLE "WintourTransfer";

-- DropTable
DROP TABLE "WintourValue";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "phone" TEXT,
    "birthday" TIMESTAMP(3),
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip_code" TEXT,
    "role" "Role" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_headers" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "nr_arquivo" TEXT NOT NULL,
    "data_geracao" TEXT NOT NULL,
    "hora_geracao" TEXT NOT NULL,
    "nome_agencia" TEXT NOT NULL,
    "versao_xml" INTEGER NOT NULL DEFAULT 4,

    CONSTRAINT "wintour_headers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_tickets" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "header_id" TEXT,
    "user_id" TEXT,
    "idv_externo" TEXT,
    "id_posto_atendimento" INTEGER,
    "posto_atendimento" TEXT,
    "dt_interna_cadastro" TIMESTAMP(3),
    "data_lancamento" TIMESTAMP(3),
    "codigo_produto" TEXT,
    "fornecedor" TEXT,
    "prestador_svc" TEXT,
    "num_bilhete" TEXT,
    "localizador" TEXT,
    "tour_code" TEXT,
    "forma_de_pagamento" TEXT,
    "cartao_mp" TEXT,
    "cartao_cp" TEXT,
    "conta_taxas_adicionais" TEXT,
    "conta_taxas_adicionais2" TEXT,
    "cod_outras_txs" TEXT,
    "cod_outras_txs2" TEXT,
    "cod_outras_txs3" TEXT,
    "cta_tx_emissao" TEXT,
    "ccustos_agencia" TEXT,
    "moeda" TEXT DEFAULT 'BRL',
    "emissor" TEXT,
    "promotor" TEXT,
    "gerente" TEXT,
    "cliente" TEXT,
    "ccustos_cliente" TEXT,
    "numero_requisicao" TEXT,
    "data_requisicao" TIMESTAMP(3),
    "passageiro" TEXT,
    "tipo_passageiro" TEXT,
    "solicitante" TEXT,
    "aprovador" TEXT,
    "departamento" TEXT,
    "matricula" TEXT,
    "num_cc" TEXT,
    "cod_autorizacao_cc" TEXT,
    "tipo_domest_inter" TEXT DEFAULT 'D',
    "scdp" TEXT,
    "info_adicionais" TEXT,
    "info_internas" TEXT,
    "canal_captacao" TEXT,
    "cta_du_rav" TEXT DEFAULT 'TX-DU',
    "situacao_contabil" TEXT,
    "projeto" TEXT,
    "motivo_viagem" TEXT,
    "motivo_recusa" TEXT,
    "tipo_roteiro_aereo" TEXT,
    "destino_rot_aereo" TEXT,
    "canal_venda" TEXT,
    "multi_ccustos_cli" TEXT,
    "tipo_roteiro" INTEGER,
    "tarifa_net" INTEGER,
    "tipo_emissao" TEXT DEFAULT 'E',
    "co2_kg" DOUBLE PRECISION,
    "cid_dest_principal" TEXT,

    CONSTRAINT "wintour_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_apportionments" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "ccustos_cliente" TEXT NOT NULL,
    "percentual" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "wintour_apportionments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_sales_origins" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "item" INTEGER NOT NULL,

    CONSTRAINT "wintour_sales_origins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_ticket_conjugates" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "item" TEXT NOT NULL,

    CONSTRAINT "wintour_ticket_conjugates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_values" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "valor_df" DOUBLE PRECISION,
    "valor_mp" DOUBLE PRECISION,

    CONSTRAINT "wintour_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_expiries" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "valor" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wintour_expiries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_airs" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,

    CONSTRAINT "wintour_airs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_sections" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "air_id" TEXT NOT NULL,
    "cia_iata" TEXT NOT NULL,
    "numero_voo" TEXT,
    "aeroporto_origem" TEXT NOT NULL,
    "aeroporto_destino" TEXT NOT NULL,
    "data_partida" TIMESTAMP(3),
    "hora_partida" TEXT,
    "data_chegada" TIMESTAMP(3),
    "hora_chegada" TEXT,
    "classe" TEXT,
    "base_tarifaria" TEXT,
    "ticket_designator" TEXT,
    "conexao_arp_partida" INTEGER,
    "conexao_arp_chegada" INTEGER,
    "co2_kg" DOUBLE PRECISION,

    CONSTRAINT "wintour_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_hotels" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "nr_apts" INTEGER,
    "categ_apt" TEXT,
    "tipo_apt" TEXT,
    "dt_check_in" TIMESTAMP(3),
    "dt_check_out" TIMESTAMP(3),
    "nr_hospedes" INTEGER,
    "reg_alimentacao" TEXT,
    "cod_tipo_pagto" TEXT,
    "dt_confirmacao" TIMESTAMP(3),
    "confirmado_por" TEXT,

    CONSTRAINT "wintour_hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_locations" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "cidade_retirada" TEXT,
    "local_retirada" TEXT,
    "dt_retirada" TIMESTAMP(3),
    "hr_retirada" TEXT,
    "local_devolucao" TEXT,
    "dt_devolucao" TIMESTAMP(3),
    "hr_devolucao" TEXT,
    "categ_veiculo" TEXT,
    "cod_tipo_pagto" TEXT,
    "dt_confirmacao" TIMESTAMP(3),
    "confirmado_por" TEXT,

    CONSTRAINT "wintour_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_others" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "wintour_others_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_transfers" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "hotel_transfer_in" TEXT,
    "cia_iata_chegada" TEXT,
    "numero_voo_chegada" TEXT,
    "data_chegada_voo" TIMESTAMP(3),
    "hora_chegada_voo" TEXT,
    "aeroporto_chegada" TEXT,
    "hotel_transfer_out" TEXT,
    "data_apanhar_pax" TIMESTAMP(3),
    "hora_apanhar_pax" TEXT,
    "cia_iata_partida" TEXT,
    "numero_voo_partida" TEXT,
    "data_partida_voo" TIMESTAMP(3),
    "hora_partida_voo" TEXT,
    "aeroporto_partida" TEXT,

    CONSTRAINT "wintour_transfers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_packages" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "cid_dest_principal" TEXT,
    "data_inicio_pacote" TIMESTAMP(3),
    "data_fim_pacote" TIMESTAMP(3),
    "descricao_pacote" TEXT,

    CONSTRAINT "wintour_packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_other_services" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "cid_dest_principal" TEXT,
    "data_inicio_outros_svcs" TIMESTAMP(3),
    "data_fim_outros_svcs" TIMESTAMP(3),
    "descricao_outros_svcs" TEXT,

    CONSTRAINT "wintour_other_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wintour_customer_data" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "acao_cli" TEXT,
    "razao_social" TEXT,
    "tipo_endereco" TEXT,
    "endereco" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cep" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "tipo_fj" TEXT,
    "dt_nasc" TIMESTAMP(3),
    "tel" TEXT,
    "celular" TEXT,
    "cpf_cnpj" TEXT,
    "insc_identidade" TEXT,
    "sexo" TEXT,
    "dt_cadastro" TIMESTAMP(3),
    "email" TEXT,

    CONSTRAINT "wintour_customer_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_headers_nr_arquivo_key" ON "wintour_headers"("nr_arquivo");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_airs_ticket_id_key" ON "wintour_airs"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_hotels_ticket_id_key" ON "wintour_hotels"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_locations_ticket_id_key" ON "wintour_locations"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_others_ticket_id_key" ON "wintour_others"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_transfers_ticket_id_key" ON "wintour_transfers"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_packages_ticket_id_key" ON "wintour_packages"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_other_services_ticket_id_key" ON "wintour_other_services"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "wintour_customer_data_ticket_id_key" ON "wintour_customer_data"("ticket_id");

-- AddForeignKey
ALTER TABLE "wintour_tickets" ADD CONSTRAINT "wintour_tickets_header_id_fkey" FOREIGN KEY ("header_id") REFERENCES "wintour_headers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_tickets" ADD CONSTRAINT "wintour_tickets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_apportionments" ADD CONSTRAINT "wintour_apportionments_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_sales_origins" ADD CONSTRAINT "wintour_sales_origins_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_ticket_conjugates" ADD CONSTRAINT "wintour_ticket_conjugates_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_values" ADD CONSTRAINT "wintour_values_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_expiries" ADD CONSTRAINT "wintour_expiries_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_airs" ADD CONSTRAINT "wintour_airs_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_sections" ADD CONSTRAINT "wintour_sections_air_id_fkey" FOREIGN KEY ("air_id") REFERENCES "wintour_airs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_hotels" ADD CONSTRAINT "wintour_hotels_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_locations" ADD CONSTRAINT "wintour_locations_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_others" ADD CONSTRAINT "wintour_others_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_transfers" ADD CONSTRAINT "wintour_transfers_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_packages" ADD CONSTRAINT "wintour_packages_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_other_services" ADD CONSTRAINT "wintour_other_services_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wintour_customer_data" ADD CONSTRAINT "wintour_customer_data_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "wintour_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
