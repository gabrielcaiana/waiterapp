# WaiterApp API 🚀

API REST do sistema WaiterApp para gerenciamento de pedidos em restaurantes, desenvolvida como parte do treinamento full stack.

## 🎯 Objetivos de Aprendizado

- Desenvolvimento de APIs REST com Node.js e Express
- Integração com banco de dados MongoDB
- Gerenciamento de uploads com AWS S3
- Containerização com Docker
- Boas práticas de desenvolvimento e segurança
- Integração com diferentes frameworks frontend (React e Vue.js)
- Análise comparativa de complexidade entre frameworks

## 📋 Funcionalidades

- Gerenciamento de categorias
- Gerenciamento de produtos
- Gerenciamento de pedidos
- Upload de imagens para AWS S3
- Integração com múltiplas interfaces de usuário

## 🛠️ Tecnologias

### Backend
- Node.js
- Express
- MongoDB
- AWS S3 (para armazenamento de imagens)
- Docker

### Frontend (Opções Disponíveis)
- React.js
  - Ideal para equipes com experiência em ecossistema React
  - Recomendado para aplicações complexas com muitos estados
- Vue.js
  - Excelente para equipes que preferem uma curva de aprendizado mais suave
  - Ótimo para aplicações que precisam de performance e simplicidade

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.sample` com as seguintes variáveis:

```env
PORT=3333
NODE_ENV=development
MONGODB_URI=mongodb://root:root@mongo:27017/admin
AWS_ACCESS_KEY_ID=sua_access_key
AWS_SECRET_ACCESS_KEY=sua_secret_key
AWS_REGION=us-east-1
AWS_BUCKET_NAME=seu_bucket
```

### 🐳 Docker

1. Build da imagem:
```bash
docker build \
  --build-arg PORT=3333 \
  --build-arg NODE_ENV=development \
  --build-arg MONGODB_URI=mongodb://root:root@mongo:27017 \
  --build-arg AWS_ACCESS_KEY_ID=sua_access_key \
  --build-arg AWS_SECRET_ACCESS_KEY=sua_secret_key \
  --build-arg AWS_REGION=us-east-1 \
  --build-arg AWS_BUCKET_NAME=seu_bucket \
  -f apps/api/Dockerfile \
  -t waiterapp-api .
```

2. Executando com Docker Compose:
```bash
docker-compose up -d
```

3. Executando a imagem individualmente:
```bash
docker run -d \
 --network api_waiter-network \
 -p 3333:3333 \
 -e PORT=3333 \
 -e NODE_ENV=development \
 -e MONGODB_URI=mongodb://root:root@mongo:27017/admin \
 -e AWS_ACCESS_KEY_ID=sua_access_key \
 -e AWS_SECRET_ACCESS_KEY=sua_secret_key \
 -e AWS_REGION=us-east-1 \
 -e AWS_BUCKET_NAME=seu_bucket \
 waiterapp-api
```

## 📚 API Endpoints

### Categorias

- `GET /api/categories` - Lista todas as categorias
- `GET /api/categories/:categoryId/products` - Lista produtos por categoria
- `POST /api/categories` - Cria uma nova categoria

### Produtos

- `GET /api/products` - Lista todos os produtos
- `POST /api/products` - Cria um novo produto (aceita upload de imagem)

### Pedidos

- `GET /api/orders` - Lista todos os pedidos
- `POST /api/orders` - Cria um novo pedido
- `PATCH /api/orders/:orderId` - Atualiza o status de um pedido
- `DELETE /api/orders/:orderId` - Remove um pedido

## 🚀 Desenvolvimento

1. Instale as dependências:
```bash
pnpm install
```

2. Inicie o servidor de desenvolvimento:
```bash
pnpm run dev
```

## 🔄 Escolha do Framework Frontend

Este projeto suporta implementações tanto em React quanto em Vue.js, permitindo que as equipes escolham a stack mais adequada às suas necessidades. Considere os seguintes aspectos ao escolher o framework:

### React.js
- Maior ecossistema de componentes
- Forte suporte da comunidade
- Excelente para aplicações complexas
- Integração nativa com TypeScript

### Vue.js
- Documentação abrangente e clara
- Curva de aprendizado mais suave
- Performance otimizada
- Estrutura mais opinativa

A escolha do framework pode ser baseada em:
- Experiência prévia da equipe
- Requisitos específicos do projeto
- Necessidades de manutenção a longo prazo
- Complexidade da aplicação

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
