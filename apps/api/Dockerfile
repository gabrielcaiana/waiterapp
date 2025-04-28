FROM node:22-alpine:slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["npm", "start"]