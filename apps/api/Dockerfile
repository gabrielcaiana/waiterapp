FROM node:22.15.0-alpine AS builder

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./

COPY apps/api ./apps/api

RUN pnpm install --no-frozen-lockfile

WORKDIR /usr/src/app/packages/models
RUN pnpm build

WORKDIR /usr/src/app/apps/api

RUN pnpm build

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
  