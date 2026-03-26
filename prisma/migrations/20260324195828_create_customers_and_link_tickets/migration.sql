-- AlterTable
ALTER TABLE "wintour_tickets" ADD COLUMN     "customer_id" TEXT;

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "acao_cli" TEXT,
    "razao_social" TEXT NOT NULL,
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

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_cpf_cnpj_key" ON "customers"("cpf_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- AddForeignKey
ALTER TABLE "wintour_tickets" ADD CONSTRAINT "wintour_tickets_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
