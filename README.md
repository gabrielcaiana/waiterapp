# WaiterApp 🍽️

Sistema completo para gerenciamento de pedidos em restaurantes, desenvolvido como parte do treinamento full stack.

## 🎯 Sobre o Projeto

O WaiterApp é uma solução completa para restaurantes, permitindo o gerenciamento eficiente de pedidos, cardápios e serviços. O projeto é composto por três componentes principais:

- **API REST**: Backend robusto desenvolvido com Node.js
- **Dashboard Web**: Interface administrativa disponível em React.js ou Vue.js
- **Mobile App**: Aplicativo para garçons feito com React Native

## 🛠️ Tecnologias

### Backend (API)
- Node.js com Express
- MongoDB
- Docker
- AWS S3

### Frontend (Opções)

#### React.js
- Ideal para equipes com experiência no ecossistema React
- Recomendado para aplicações complexas
- Maior ecossistema de componentes

#### Vue.js
- Excelente para equipes que preferem uma curva de aprendizado mais suave
- Ótimo para aplicações que precisam de performance e simplicidade
- Documentação abrangente

### Mobile (Opções)

#### React Native
- Framework multiplataforma mantido pelo Facebook/Meta
- Ideal para equipes com experiência em React
- Grande ecossistema de bibliotecas nativas

#### Flutter
- Framework multiplataforma do Google
- Excelente performance e UI consistente
- Curva de aprendizado suave com Dart

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- pnpm (recomendado) ou npm

### Estrutura do Projeto

```
apps/
  ├── api/          # Backend em Node.js
  ├── web/          # Frontend (React.js ou Vue.js)
  └── mobile/       # App mobile (React Native ou Flutter)
```

### Executando o Projeto

#### API (Backend)

```bash
cd apps/api
docker-compose up -d
```

#### Web (Frontend)

Escolha uma das implementações disponíveis:

##### React.js
```bash
cd apps/web-react
pnpm install
pnpm run dev
```

##### Vue.js
```bash
cd apps/web-vue
pnpm install
pnpm run dev
```

#### Mobile

##### React Native
```bash
cd apps/mobile-react-native
pnpm install
pnpm start
```

##### Flutter
```bash
cd apps/mobile-flutter
flutter pub get
flutter run
```

## 🔄 Escolhendo os Frameworks

Este projeto oferece múltiplas implementações tanto para o frontend web quanto para o mobile, permitindo que as equipes escolham a stack mais adequada às suas necessidades:

### Quando escolher React.js
- Equipe com experiência no ecossistema React
- Projeto requer componentes complexos e gerenciamento de estado robusto
- Necessidade de forte integração com TypeScript
- Preferência por abordagem mais flexível

### Quando escolher Vue.js
- Equipe nova ou com preferência por framework mais estruturado
- Prioridade em performance e simplicidade
- Necessidade de documentação clara e abrangente
- Preferência por abordagem mais opinativa

### Quando escolher React Native
- Equipe já familiarizada com React/React Native
- Necessidade de reutilização de componentes web
- Prioridade em integração nativa e APIs específicas da plataforma
- Projeto requer grande quantidade de bibliotecas nativas

### Quando escolher Flutter
- Busca por performance nativa e UI consistente
- Equipe interessada em aprender Dart
- Necessidade de desenvolvimento rápido com hot reload
- Prioridade em animações fluidas e UI personalizada

## 📚 Documentação

- [API Documentation](apps/api/README.md)
- [Web React Documentation](apps/web-react/README.md)
- [Web Vue Documentation](apps/web-vue/README.md)
- [Mobile Documentation](apps/mobile/README.md)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.