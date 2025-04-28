FROM node:22.15.0-alpine

WORKDIR /usr/src/app

COPY ../../package.json ../../pnpm-workspace.yaml ../../pnpm-lock.yaml ./
COPY ../../packages ./packages
COPY ./package.json ./apps/api/

RUN npm install -g pnpm && pnpm install

COPY . ./apps/api/

WORKDIR /usr/src/app
RUN pnpm api:build

WORKDIR /usr/src/app/apps/api
EXPOSE 3333

CMD ["pnpm", "start"]
