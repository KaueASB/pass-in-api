# Pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.
A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.
Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.
O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev)
- [Swagger](https://swagger.io/)

### Executando a aplicação localmente

- Clone este repositório
- Execute `npm install` para instalar as dependências
- Execute `npm run dev` para iniciar o servidor local
- Execute `npm run db:migrate` para rodar as migrations no banco de dados

## Documentação da API (Swagger)

Para documentação da API, acesse o link: `http://localhost:3333/docs`

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento
- [x] O organizador deve poder visualizar dados de um evento
- [x] 0 organizador deve poder visualizar a lista de participantes
- [x] 0 participante deve poder se inscrever em um evento
- [x] 0 participante deve poder visualizar seu crachá de inscrição
- [x] 0 participante deve poder realizar check-in no evento

### Regras de negócio

- [x] 0 participante só pode se inscrever em um evento uma única vez
- [x] 0 participante só pode se inscrever em eventos com vagas disponíveis
- [x] 0 participante só pode realizar check-in em um evento uma única vez

### Requisitos não-funcionais

- [x] 0 check-in no evento será realizado através de um QRCode

## Banco de dados

Nessa aplicação foi utilizado banco de dados relacional (SQL). Para ambiente de desenvolvimento adotei o SQLite pela facilidade do ambiente.

<!-- ### Diagrama ERD

<img src=".github/erd.svg" width="600" alt="Diagrama ERD do banco de dados" />

### Estrutura do banco (SQL)

```sql
-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,
    "maximum_attendees" INTEGER
);

-- CreateTable
CREATE TABLE "attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "check_ins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendeeId" INTEGER NOT NULL,
    CONSTRAINT "check_ins_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "attendees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "events"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "attendees_event_id_email_key" ON "attendees"("event_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "check_ins_attendeeId_key" ON "check_ins"("attendeeId");
``` -->
