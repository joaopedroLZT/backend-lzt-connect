# Backend LZT Connect

Este é o serviço de backend para a integração LZT, desenvolvido com NestJS e Prisma.

## Pré-requisitos

- **Node.js**: v18.20.8 (Recomendado)
- **Docker**: Para rodar o banco de dados e a aplicação via containers.

## Instalação

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm ci
   ```
3. Configure o arquivo `.env` com base no `.env.example`.

## Comandos Prisma

Os comandos básicos para gerenciar o banco de dados via Prisma são:

- **Gerar Prisma Client**:
  ```bash
  npx prisma generate
  # ou
  npm run prisma:generate
  ```
- **Rodar Migrações (Desenvolvimento)**:
  ```bash
  npm run migrate:dev
  ```
- **Popular o Banco de Dados (Seed)**:
  ```bash
  npm run seed
  ```

## Rodando a Aplicação

### Localmente

Para iniciar o servidor de desenvolvimento:

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`.

### Via Docker

Para iniciar apenas o banco de dados:

```bash
npm run docker:db
```

Para iniciar a aplicação completa (API + Banco):

```bash
npm run docker
```

Para realizar o build dos containers:

```bash
npm run docker:build
```

## Testes

- **Testes Unitários**: `npm run test`
- **Testes E2E**: `npm run test:e2e`
- **Cobertura de Código**: `npm run test:cov`

## Documentação API (Swagger)

A documentação interativa da API está disponível via Swagger:

- **URL**: `http://localhost:3000/api`

Aqui você pode testar as rotas e visualizar os schemas de entrada e saída.

## Autenticação e Registro

### Registro e Login

A API utiliza JWT (JSON Web Token) para autenticação.

- **Registrar Novo Usuário**:
  - **Método**: `POST`
  - **URL**: `http://localhost:3000/auth/signup`
  - **Campos Obrigatórios**: `email`, `password` (mínimo 8 caracteres).
  - **Campos Opcionais**: `firstname`, `lastname`, `birthday`, `phone`, `street`, `city`, `state`, `zipCode`.

- **Realizar Login**:
  - **Método**: `POST`
  - **URL**: `http://localhost:3000/auth/login`
  - **Campos Obrigatórios**: `email`, `password`.
  - **Retorno**: `accessToken` e `refreshToken`.

- **Atualizar Token (Refresh)**:
  - **Método**: `POST`
  - **URL**: `http://localhost:3000/auth/refresh`
  - **Campo Obrigatório**: `token` (refreshToken).

## Gerenciamento de Usuários

### Perfil do Usuário

- **Obter Perfil Próprio**:
  - **Método**: `GET`
  - **URL**: `http://localhost:3000/users/me`
  - **Autenticação**: Requer **Bearer Token**.

- **Atualizar Perfil**:
  - **Método**: `PATCH`
  - **URL**: `http://localhost:3000/users`
  - **Autenticação**: Requer **Bearer Token**.
  - **Campos Opcionais**: `firstname`, `lastname`, `email`, `phone`, `birthday`, `street`, `city`, `state`, `zipCode`.

- **Alterar Senha**:
  - **Método**: `PATCH`
  - **URL**: `http://localhost:3000/users/change-password`
  - **Autenticação**: Requer **Bearer Token**.
  - **Campos Obrigatórios**: `oldPassword`, `newPassword`.

### Administração (Apenas Admin)

As rotas abaixo exigem que o usuário autenticado possua a role `ADMIN`.

- **Listar Todos os Usuários**:
  - **Método**: `GET`
  - **URL**: `http://localhost:3000/users`
  - **Autenticação**: Requer **Bearer Token** + Permissão de Admin.

- **Atualizar Cargo (Role) de um Usuário**:
  - **Método**: `PATCH`
  - **URL**: `http://localhost:3000/users/role`
  - **Autenticação**: Requer **Bearer Token** + Permissão de Admin.
  - **Campos Obrigatórios**: `userId`, `role` (ex: `ADMIN`, `USER`).

## Endpoints Principais

### Importação de Vendas (Wintour)

Este endpoint é utilizado para importar dados de vendas provenientes do sistema Wintour.

- **Método**: `POST`
- **URL**: `http://localhost:3000/sales/import-wintour`
- **Autenticação**: Requer **Bearer Token** (JWT).

#### Exemplo de Payload (Request Body)

```json
{
  "nr_arquivo": "ULTIMATE-XML-FULL-2023",
  "data_geracao": "20/03/2026",
  "hora_geracao": "13:30",
  "nome_agencia": "LZT TECHNOLOGY",
  "versao_xml": 5,
  "tickets": [
    {
      "userId": "cmmz18mc70001f6soukebaz62",
      "num_bilhete": "9571234567890",
      "localizador": "LZTFULL01",
      "prestador_svc": "AGENTE DE VIAGENS XPTO",
      "fornecedor": "LATAM AIRLINES",
      "passageiro": "JOÃO SILVA SANTOS",
      "idv_externo": "ID-EXT-999",
      "id_posto_atendimento": 10,
      "posto_atendimento": "SÃO PAULO CENTRAL",
      "dt_interna_cadastro": "2026-03-20T10:00:00.000Z",
      "data_lancamento": "2026-03-20T10:00:00.000Z",
      "codigo_produto": "PROD-AIR",
      "tour_code": "TC-XYZ-2026",
      "forma_de_pagamento": "FATURADO 30 DIAS",
      "cartao_mp": "1234",
      "cartao_cp": "5678",
      "conta_taxas_adicionais": "CTA-001",
      "conta_taxas_adicionais2": "CTA-002",
      "cod_outras_txs": "OTX-1",
      "cod_outras_txs2": "OTX-2",
      "cod_outras_txs3": "OTX-3",
      "cta_tx_emissao": "EMI-99",
      "ccustos_agencia": "TI-LZT",
      "moeda": "BRL",
      "emissor": "ROBOT AGENT",
      "promotor": "LZT PROMOTER",
      "gerente": "GERENTE COMERCIAL",
      "cliente": "LZT CORP LTDA",
      "ccustos_cliente": "BI-CENTER-01",
      "numero_requisicao": "REQ-2026-X",
      "data_requisicao": "2026-03-19T15:00:00.000Z",
      "tipo_passageiro": "ADT",
      "solicitante": "CARLOS SOLICITANTE",
      "aprovador": "MARIA APROVADORA",
      "departamento": "TECNOLOGIA",
      "matricula": "MAT-123456",
      "num_cc": "5502444455556666",
      "cod_autorizacao_cc": "AUT-998877",
      "tipo_domest_inter": "D",
      "scdp": "SCDP-2026-ABC",
      "info_adicionais": "Importação completa com todos os sub-objetos e colunas",
      "info_internas": "Venda prioridade alta",
      "canal_captacao": "API-WINT",
      "cta_du_rav": "TX-DU-01",
      "situacao_contabil": "A",
      "projeto": "PROJ-LZT-2026",
      "motivo_viagem": "REUNIÃO TECNICA",
      "tarifa_net": 1850,
      "motivo_recusa": "N/A",
      "tipo_roteiro_aereo": "RT",
      "tipo_emissao": "E",
      "tipo_roteiro": 1,
      "destino_rot_aereo": "GIG",
      "canal_venda": "ONLINE",
      "multi_ccustos_cli": "CC-1,CC-2",
      "cid_dest_principal": "Rio de Janeiro",
      "co2_kg": 250.75,
      "apportionments": [
        { "ccustos_cliente": "CC-DEV", "percentual": 60.0 },
        { "ccustos_cliente": "CC-OPS", "percentual": 40.0 }
      ],
      "sales_origin": [{ "item": 1 }],
      "ticket_conjugate": [{ "item": "CONJ-001" }],
      "values": [
        {
          "codigo": "TARIFA",
          "valor": 2500.0,
          "valor_df": 2500.0,
          "valor_mp": 0.0
        },
        { "codigo": "TAXA", "valor": 120.0, "valor_df": 120.0 },
        { "codigo": "DU", "valor": 45.0, "valor_mp": 45.0 }
      ],
      "expiry": [{ "codigo": "EXP-AIR", "valor": "2026-12-31T23:59:59Z" }],
      "sections": [
        {
          "cia_iata": "LA",
          "numero_voo": "3450",
          "aeroporto_origem": "GRU",
          "aeroporto_destino": "GIG",
          "data_partida": "2026-06-10T14:00:00.000Z",
          "hora_partida": "14:00",
          "data_chegada": "2026-06-10T15:05:00.000Z",
          "hora_chegada": "15:05",
          "base_tarifaria": "Y-PROMO",
          "ticket_designator": "TD-001",
          "conexao_arp_partida": 0,
          "conexao_arp_chegada": 0,
          "classe": "E",
          "co2_kg": 125.3
        }
      ],
      "hotel": {
        "nr_apts": 1,
        "categ_apt": "SUPERIOR",
        "tipo_apt": "DBL",
        "dt_check_in": "2026-06-10T00:00:00.000Z",
        "dt_check_out": "2026-06-12T00:00:00.000Z",
        "nr_hospedes": 2,
        "reg_alimentacao": "CAFÉ DA MANHÃ",
        "cod_tipo_pagto": "FAT",
        "dt_confirmacao": "2026-03-20T10:00:00.000Z",
        "confirmado_por": "ROBOT-AG"
      },
      "location": {
        "cidade_retirada": "Rio de Janeiro",
        "local_retirada": "GIG Aeroporto",
        "dt_retirada": "2026-06-10T16:00:00.000Z",
        "hr_retirada": "16:00",
        "local_devolucao": "SANTOS DUMONT",
        "dt_devolucao": "2026-06-12T10:00:00.000Z",
        "hr_devolucao": "10:00",
        "categ_veiculo": "ECONOMICO",
        "cod_tipo_pagto": "VOUCH",
        "dt_confirmacao": "2026-03-20T10:00:00.000Z",
        "confirmado_por": "ROBOT-AG"
      },
      "other": {
        "descricao": "TAXA DE SERVIÇO EXTRA PELO AGENTE"
      },
      "transfer": {
        "hotel_transfer_in": "Hotel Windsor",
        "cia_iata_chegada": "LA",
        "numero_voo_chegada": "3450",
        "data_chegada_voo": "2026-06-10T15:05:00.000Z",
        "hora_chegada_voo": "15:05",
        "aeroporto_chegada": "GIG",
        "hotel_transfer_out": "Hotel Windsor",
        "data_apanhar_pax": "2026-06-12T08:00:00.000Z",
        "hora_apanhar_pax": "08:00",
        "cia_iata_partida": "LA",
        "numero_voo_partida": "3451",
        "data_partida_voo": "2026-06-12T10:00:00.000Z",
        "hora_partida_voo": "10:00",
        "aeroporto_partida": "GIG"
      },
      "package": {
        "cid_dest_principal": "RIO DE JANEIRO",
        "descricao_pacote": "PACOTE RIO 48H",
        "data_inicio_pacote": "2026-06-10T00:00:00.000Z",
        "data_fim_pacote": "2026-06-12T00:00:00.000Z"
      },
      "other_services": {
        "cid_dest_principal": "BRASIL",
        "descricao_outros_svcs": "SEGURO VIAGEM FULL",
        "data_inicio_outros_svcs": "2026-06-10T00:00:00.000Z",
        "data_fim_outros_svcs": "2026-06-12T23:59:59.000Z"
      },
      "customer": {
        "acao_cli": "NEW",
        "razao_social": "LZT CORP SOLUTIONS",
        "tipo_endereco": "COMERCIAL",
        "endereco": "AV PAULISTA",
        "numero": "1000",
        "complemento": "SALA 50",
        "bairro": "BELA VISTA",
        "cep": "01310-000",
        "cidade": "SÃO PAULO",
        "estado": "SP",
        "tipo_fj": "J",
        "dt_nasc": "1990-01-01T00:00:00.000Z",
        "tel": "1133334444",
        "celular": "11999998888",
        "cpf_cnpj": "00.000.000/0001-91",
        "insc_identidade": "INS-123",
        "sexo": "M",
        "dt_cadastro": "2026-03-20T10:00:00.000Z",
        "email": "contato@lztcorp.com"
      }
    }
  ]
}
```

#### Campos Obrigatórios

- **Header**:

  - `nr_arquivo`: Identificador único da importação.
  - `data_geracao`: Data no formato XML.
  - `hora_geracao`: Hora no formato XML.
  - `nome_agencia`: Nome da agência.
  - `versao_xml`: Versão do formato (ex: 5).
  - `tickets`: Array contendo um ou mais objetos de bilhete.

- **Tickets** (Sub-objetos obrigatórios quando presentes):
  - **Apportionments**: `ccustos_cliente`, `percentual`.
  - **Values**: `codigo`, `valor`.
  - **Sections**: `cia_iata`, `aeroporto_origem`, `aeroporto_destino`.
  - **Other**: `descricao`.

## Fluxo de CI/CD

O projeto possui um fluxo de integração contínua (CI) configurado no arquivo [ci.yml](file:///c:/Users/joao.rodrigues/Desktop/projects/backend-lzt-connect/.github/workflows/ci.yml).

Sempre que houver um **push** ou **pull request** para a branch `main`:

1. O ambiente é preparado com Node 18.
2. As dependências são instaladas (`npm install`).
3. O código é verificado via Lint (`npm run lint`).
4. É realizado o build da aplicação (`npm run build`).
5. São executados os testes unitários (`npm test`).

Isso garante que o código na branch principal esteja sempre estável e pronto para subir para produção.
