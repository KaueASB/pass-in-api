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
- Acesse `http://localhost:3333/docs` para ver a documentação interativa

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
