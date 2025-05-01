# WaiterApp 🍽️

Um sistema completo para gerenciamento de pedidos em restaurantes, desenvolvido como um monorepo contendo aplicações web, mobile e API.

## 📦 Estrutura do Projeto

Este projeto é organizado como um monorepo usando NX, contendo as seguintes aplicações:

- `apps/api`: Backend da aplicação desenvolvido em Node.js
- `apps/web`: Interface web para gerenciamento (em desenvolvimento)
- `apps/mobile`: Aplicativo mobile para garçons (em desenvolvimento)
- `packages/models`: Pacote compartilhado com modelos de dados

## 🛠️ Tecnologias Principais

- **Gerenciamento de Monorepo**: NX
- **Gerenciador de Pacotes**: pnpm
- **Backend**: Node.js
- **Banco de Dados**: MongoDB
- **Containerização**: Docker

## 🚀 Começando

### Pré-requisitos

- Node.js
- pnpm
- Docker e Docker Compose

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd waiterapp
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
- Copie o arquivo `.env.sample` da API para `.env`
- Configure as variáveis necessárias

### Executando o Projeto

#### API

Desenvolvimento:
```bash
pnpm run api:dev
```

Produção:
```bash
pnpm run api:build
pnpm run api:start
```

#### Com Docker

A API pode ser executada com Docker Compose:
```bash
cd apps/api
docker-compose up -d
```

## 📚 Documentação

- [Documentação da API](./apps/api/readme.md)
- Documentação Web (em breve)
- Documentação Mobile (em breve)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Autor

[@gabrielcaiana](https://github.com/gabrielcaiana)