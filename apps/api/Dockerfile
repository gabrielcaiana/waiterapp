FROM node:22.15.0-alpine AS builder

WORKDIR /usr/src/app

RUN npm install -g pnpm

# Copia os arquivos de configuração do workspace
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./

# Copia o pacote models primeiro
COPY packages/models ./packages/models

# Copia a API
COPY apps/api ./apps/api

# Instala todas as dependências do workspace
RUN pnpm install

# Compila o pacote models
WORKDIR /usr/src/app/packages/models
RUN pnpm build

# Compila a API
WORKDIR /usr/src/app/apps/api
RUN pnpm build

# Segunda etapa
FROM node:22.15.0-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./

ARG PORT
ARG NODE_ENV
ARG MONGODB_URI
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG AWS_REGION
ARG AWS_BUCKET_NAME

ENV PORT=${PORT}
ENV NODE_ENV=${NODE_ENV}
ENV MONGODB_URI=${MONGODB_URI}
ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
ENV AWS_REGION=${AWS_REGION}
ENV AWS_BUCKET_NAME=${AWS_BUCKET_NAME}

RUN npm install -g pnpm

WORKDIR /usr/src/app/apps/api

RUN pnpm install

EXPOSE 3333

CMD ["pnpm", "start"]
