/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "WintourHeader" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nr_arquivo" TEXT NOT NULL,
    "data_geracao" TEXT NOT NULL,
    "hora_geracao" TEXT NOT NULL,
    "nome_agencia" TEXT NOT NULL,
    "versao_xml" INTEGER NOT NULL DEFAULT 4,

    CONSTRAINT "WintourHeader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourTicket" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fileId" TEXT,
    "userId" TEXT,
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

    CONSTRAINT "WintourTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourApportionment" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "ccustos_cliente" TEXT NOT NULL,
    "percentual" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "WintourApportionment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourSalesOrigin" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "item" INTEGER NOT NULL,

    CONSTRAINT "WintourSalesOrigin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourTicketConjugate" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "item" TEXT NOT NULL,

    CONSTRAINT "WintourTicketConjugate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourValue" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "valor_df" DOUBLE PRECISION,
    "valor_mp" DOUBLE PRECISION,

    CONSTRAINT "WintourValue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourExpiry" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "valor" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WintourExpiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourAir" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,

    CONSTRAINT "WintourAir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourSection" (
    "id" TEXT NOT NULL,
    "airId" TEXT NOT NULL,
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

    CONSTRAINT "WintourSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourHotel" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
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

    CONSTRAINT "WintourHotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourLocation" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
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

    CONSTRAINT "WintourLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourOtherService" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "cid_dest_principal" TEXT,
    "data_inicio_outros_svcs" TIMESTAMP(3),
    "data_fim_outros_svcs" TIMESTAMP(3),
    "descricao_outros_svcs" TEXT,

    CONSTRAINT "WintourOtherService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourPackage" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "cid_dest_principal" TEXT,
    "data_inicio_pacote" TIMESTAMP(3),
    "data_fim_pacote" TIMESTAMP(3),
    "descricao_pacote" TEXT,

    CONSTRAINT "WintourPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourTransfer" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
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

    CONSTRAINT "WintourTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WintourCustomerData" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
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

    CONSTRAINT "WintourCustomerData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WintourHeader_nr_arquivo_key" ON "WintourHeader"("nr_arquivo");

-- CreateIndex
CREATE UNIQUE INDEX "WintourAir_ticketId_key" ON "WintourAir"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "WintourHotel_ticketId_key" ON "WintourHotel"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "WintourLocation_ticketId_key" ON "WintourLocation"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "WintourOtherService_ticketId_key" ON "WintourOtherService"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "WintourPackage_ticketId_key" ON "WintourPackage"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "WintourTransfer_ticketId_key" ON "WintourTransfer"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "WintourCustomerData_ticketId_key" ON "WintourCustomerData"("ticketId");

-- AddForeignKey
ALTER TABLE "WintourTicket" ADD CONSTRAINT "WintourTicket_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "WintourHeader"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourTicket" ADD CONSTRAINT "WintourTicket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourApportionment" ADD CONSTRAINT "WintourApportionment_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourSalesOrigin" ADD CONSTRAINT "WintourSalesOrigin_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourTicketConjugate" ADD CONSTRAINT "WintourTicketConjugate_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourValue" ADD CONSTRAINT "WintourValue_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourExpiry" ADD CONSTRAINT "WintourExpiry_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourAir" ADD CONSTRAINT "WintourAir_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourSection" ADD CONSTRAINT "WintourSection_airId_fkey" FOREIGN KEY ("airId") REFERENCES "WintourAir"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourHotel" ADD CONSTRAINT "WintourHotel_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourLocation" ADD CONSTRAINT "WintourLocation_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourOtherService" ADD CONSTRAINT "WintourOtherService_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourPackage" ADD CONSTRAINT "WintourPackage_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourTransfer" ADD CONSTRAINT "WintourTransfer_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WintourCustomerData" ADD CONSTRAINT "WintourCustomerData_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "WintourTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
