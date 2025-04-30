FROM node:22.15.0-alpine

WORKDIR /usr/src/app

# Instalar pnpm e tsx globalmente
RUN npm install -g pnpm tsx

# Copiar todos os arquivos de configuração do workspace
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages ./packages
COPY apps ./apps
COPY libs ./libs

# Instalar todas as dependências do workspace
RUN pnpm install

# Mudar para o diretório da API
WORKDIR /usr/src/app/apps/api

# Construir o projeto
RUN pnpm build

EXPOSE 3333

CMD ["tsx", "src/server.ts"]
