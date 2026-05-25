# Influish Backend API

**Influish Backend** is a robust NestJS-based API server that powers the Influish ecosystem. It provides comprehensive REST APIs and real-time communication for the mobile app and admin panel, handling everything from user authentication to campaign management and payment processing.

## 🚀 Project Overview

This is the **core backend service** for the **Influish** ecosystem which serves:

- **frontend_app** (Flutter) - Mobile application APIs
- **admin-web-app** (React.js) - Admin panel APIs
- **Real-time features** - WebSocket connections for chat and notifications

## ✨ Key Features

### 🔐 Authentication & Authorization

- **JWT-based authentication** with refresh tokens
- **Firebase Authentication** integration
- **Role-based access control** (Admin, Brand, Influencer)
- **API key protection** for external services

### 👥 User Management

- **Multi-role user system** (Influencers, Brands, Admins)
- **Profile management** with social media integration
- **KYC verification** with document upload
- **User activity tracking** and analytics

### 🎯 Campaign System

- **AI-powered campaign creation** with OpenAI integration
- **Campaign lifecycle management** (Draft → Active → Completed)
- **Influencer discovery** and matching algorithms
- **Campaign performance analytics** and reporting

### 💬 Real-time Communication

- **WebSocket-based chat** system between brands and influencers
- **Push notifications** via Firebase Cloud Messaging
- **Real-time updates** for campaign status changes
- **Admin chat support** system

### 💳 Payment Processing

- **Multi-gateway support** (Razorpay, Cashfree)
- **Wallet management** for influencers
- **Transaction history** and reconciliation
- **Automated withdrawals** and payouts

### 📊 Analytics & Insights

- **Performance tracking** for campaigns and users
- **Revenue analytics** and reporting
- **User engagement metrics**
- **Admin dashboard** data aggregation

### 🔧 Additional Features

- **File upload management** (AWS S3, Firebase Storage)
- **Email notifications** and templates
- **Cron jobs** for automated tasks
- **Rate limiting** and security measures
- **Comprehensive logging** with Winston
- **Observability** with SigNoz and OpenTelemetry

## 🛠 Tech Stack

### Core Framework

- **NestJS** `^10.0.0` - Progressive Node.js framework
- **TypeScript** `^5.1.3` - Type-safe JavaScript
- **Express** `^5.1.0` - Web application framework

### Database & ORM

- **Prisma ORM** `^5.18.0` - Next-generation ORM
- **PostgreSQL** - Primary database (configured via Prisma)
- **Redis** - Caching and session storage

### Authentication & Security

- **JWT** (`@nestjs/jwt: ^10.2.0`) - JSON Web Tokens
- **Passport** (`passport: ^0.7.0`) - Authentication middleware
- **bcrypt** (`bcrypt: ^5.1.1`) - Password hashing
- **Firebase Admin** (`firebase-admin: ^13.0.2`) - Firebase integration

### Payment Gateways

- **Razorpay** (`nestjs-razorpay: ^2.0.1`) - Payment processing
- **Cashfree** (`cashfree-pg: ^5.0.8`) - Payment gateway integration

### Real-time & Communication

- **Socket.IO** (`socket.io: ^4.8.1`) - WebSocket communication
- **WebSockets** (`@nestjs/websockets: ^10.0.0`) - NestJS WebSocket module
- **BullMQ** (`bullmq: ^5.53.2`) - Job queue processing

### External Services

- **OpenAI** (`openai: ^4.78.1`) - AI-powered features
- **AWS SDK** (`@aws-sdk/client-s3: ^3.705.0`) - File storage
- **Axios** (`axios: ^1.7.9`) - HTTP client

### Development & Monitoring

- **Swagger** (`@nestjs/swagger: ^7.4.0`) - API documentation
- **Winston** (`winston: ^3.15.0`) - Logging
- **OpenTelemetry** - Traces, metrics, and logs
- **SigNoz** - Self-hosted observability backend
- **Jest** - Testing framework

### Utilities

- **Class Validator** (`class-validator: ^0.14.1`) - Input validation
- **Class Transformer** (`class-transformer: ^0.5.1`) - Object transformation
- **Date-fns** (`date-fns: ^4.1.0`) - Date manipulation
- **Sharp** (`sharp: ^0.34.1`) - Image processing
- **PDFKit** (`pdfkit: ^0.16.0`) - PDF generation

## 🔧 Installation & Setup

### Prerequisites

- **Node.js** `>=18.0.0`
- **npm** or **yarn**
- **PostgreSQL** database
- **Redis** server
- **Git** for version control

### 1. Clone the Repository

```bash
git clone <repository-url>
cd influish/backend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create `.env` file with required variables:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/influish"

# JWT
JWT_SECRET="your-jwt-secret"
JWT_EXPIRES_IN="7d"

# Firebase
FIREBASE_PROJECT_ID="your-firebase-project"
FIREBASE_PRIVATE_KEY="your-private-key"
FIREBASE_CLIENT_EMAIL="your-client-email"

# Payment Gateways
RAZORPAY_KEY_ID="your-razorpay-key"
RAZORPAY_KEY_SECRET="your-razorpay-secret"
CASHFREE_APP_ID="your-cashfree-app-id"
CASHFREE_SECRET_KEY="your-cashfree-secret"

# AWS S3
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
AWS_S3_BUCKET="your-s3-bucket"

# Redis
REDIS_URI="redis://localhost:6379"

# OpenAI
OPENAI_API_KEY="your-openai-key"

# Observability
OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:4318"
OTEL_SERVICE_NAME_API="influish-api"
OTEL_SERVICE_NAME_CRON="influish-cron"
OTEL_SLOW_HTTP_MS="2000"
OTEL_SLOW_DB_MS="200"
LOG_LEVEL="info"
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Seed database (optional)
npm run seed
```

### 5. Run the Application

#### Development

```bash
# Start with hot reload
npm run start:dev

# Start with debug mode
npm run start:debug
```

#### Production

```bash
# Build the application
npm run build

# Start production server
npm run start:prod
```

### 6. API Documentation

Access Swagger documentation at: `http://localhost:3000/api`

## 📁 Project Architecture

The backend follows **Domain-Driven Design (DDD)** and **Clean Architecture** principles with modular organization.

```text
src/
├── main.ts                          # Application entry point
├── app.module.ts                    # Root module
├── app.controller.ts                # Health check endpoints
├── app.service.ts                   # Application service
│
├── auth/                            # Authentication module
│   ├── auth.controller.ts           # Auth endpoints
│   ├── auth.service.ts              # Auth business logic
│   ├── auth.module.ts               # Auth module configuration
│   └── guards/                      # Auth guards and strategies
│       ├── jwt-auth.guard.ts        # JWT authentication guard
│       ├── jwt.strategy.ts          # JWT strategy
│       └── api-key.guard.ts         # API key guard
│
├── admin/                           # Admin management
│   ├── admin.controller.ts          # Admin CRUD operations
│   ├── admin.service.ts             # Admin business logic
│   └── admin.module.ts              # Admin module
│
├── brand/                           # Brand user management
│   ├── brand.controller.ts          # Brand endpoints
│   ├── brand.service.ts             # Brand business logic
│   └── brand.module.ts              # Brand module
│
├── influencer/                      # Influencer management
│   ├── influencer.controller.ts     # Influencer endpoints
│   ├── influencer.service.ts        # Influencer business logic
│   └── influencer.module.ts         # Influencer module
│
├── campaign/                        # Campaign management
│   ├── campaign.controller.ts       # Campaign CRUD
│   ├── campaign.service.ts          # Campaign business logic
│   ├── campaign.module.ts           # Campaign module
│   └── campaign.cron.service.ts     # Campaign automated tasks
│
├── campaign-influencer/             # Campaign-Influencer relations
│   ├── campaign-influencer.controller.ts
│   ├── campaign-influencer.service.ts
│   └── campaign-influencer.module.ts
│
├── ai-campaign/                     # AI-powered campaigns
│   ├── ai-campaign.controller.ts    # AI campaign endpoints
│   ├── ai-campaign.service.ts       # OpenAI integration
│   └── ai-campaign.module.ts        # AI campaign module
│
├── chat/                            # Real-time messaging
│   ├── chat.controller.ts           # Chat REST endpoints
│   ├── chat.service.ts              # Chat business logic
│   ├── chat.gateway.ts              # WebSocket gateway
│   └── chat.module.ts               # Chat module
│
├── admin-chat/                      # Admin support chat
│   ├── admin-chat.controller.ts     # Admin chat endpoints
│   ├── admin-chat.service.ts        # Admin chat logic
│   └── admin-chat.module.ts         # Admin chat module
│
├── notification/                    # Push notifications
│   ├── notification.controller.ts   # Notification endpoints
│   ├── notification.service.ts      # FCM integration
│   ├── notification.processor.ts    # Background jobs
│   └── notification.module.ts       # Notification module
│
├── wallet/                          # Payment & wallet system
│   ├── wallet.controller.ts         # Wallet endpoints
│   ├── wallet.service.ts            # Wallet business logic
│   └── wallet.module.ts             # Wallet module
│
├── razorpay/                        # Razorpay integration
│   ├── payment.controller.ts        # Payment endpoints
│   ├── razorpay.service.ts          # Razorpay service
│   └── payment.module.ts            # Payment module
│
├── cashfree/                        # Cashfree integration
│   ├── cashfree.service.ts          # Cashfree service
│   └── cashfree.module.ts           # Cashfree module
│
├── instagram/                       # Instagram integration
│   ├── instagram.controller.ts      # Instagram endpoints
│   ├── instagram.service.ts         # Instagram API service
│   ├── instagram.processor.ts       # Background jobs
│   └── instagram.module.ts          # Instagram module
│
├── storage/                         # File storage services
│   ├── s3.storage.service.ts        # AWS S3 service
│   ├── firebase.storage.service.ts  # Firebase storage
│   └── storage.module.ts            # Storage module
│
├── prisma/                          # Database service
│   └── prisma.service.ts            # Prisma client service
│
├── config/                          # Configuration
│   ├── constants.ts                 # App constants
│   └── index.ts                     # Config exports
│
├── guards/                          # Security guards
│   ├── jwt-auth.guard.ts            # JWT guard
│   ├── api-key.guard.ts             # API key guard
│   └── combined-auth.guard.ts       # Combined auth
│
├── interceptor/                     # Request/Response interceptors
│   ├── serialize.interceptor.ts     # Response serialization
│   └── csv.interceptor.ts           # CSV export
│
├── decorator/                       # Custom decorators
│   └── current-user.decorator.ts    # User decorator
│
└── prisma-client-exception/         # Exception handling
    └── prisma-client-exception.filter.ts
```

### Key Architecture Patterns

- **Domain-Driven Design**: Business logic organized by domain
- **Dependency Injection**: NestJS built-in DI container
- **Repository Pattern**: Data access abstraction via Prisma
- **CQRS Pattern**: Command-Query Responsibility Segregation
- **Event-Driven Architecture**: Background job processing
- **Clean Architecture**: Clear separation of concerns

## 🚦 Development Guidelines

### Getting Started for New Developers

1. **Understand the Domain**: Study the business logic for Influencer-Brand interactions
2. **Review Database Schema**: Examine `prisma/schema.prisma` for data relationships
3. **Study API Endpoints**: Check Swagger documentation at `/api`
4. **Follow NestJS Patterns**: Use decorators, modules, and dependency injection
5. **Test Your Changes**: Write unit and integration tests

### Code Style & Standards

- **TypeScript**: Use strict type checking
- **ESLint + Prettier**: Automated code formatting
- **Class Validator**: Use DTOs with validation decorators
- **Error Handling**: Implement proper HTTP exceptions
- **Logging**: Use structured logging with Winston
- **Documentation**: Document APIs with Swagger decorators

### Development Workflow

1. **Create Feature Branch**: `git checkout -b feature/your-feature-name`
2. **Database Changes**: Update Prisma schema and run migrations
3. **Write Tests**: Add unit tests for new functionality
4. **API Documentation**: Update Swagger documentation
5. **Code Review**: Submit PR with clear description

### 🔄 Git Commit Workflow (Automated Quality Assurance)

This project uses **Husky** with **Conventional Commits** and automated quality checks to ensure code quality and consistent commit messages.

#### Quick Start for Commits

```bash
# Interactive prompts (recommended)
git add .
git commit        # Opens interactive commit prompt automatically

# Alternative: use npm script
git add .
npm run commit    # Also opens interactive commit prompt

# Manual commit (still validated)
git add .
git commit -m "feat: add user authentication system"
```

#### Automated Hooks & Checks

**Pre-commit Hook** (runs before each commit):

- 🔧 **Lint-staged**: Auto-fixes linting issues and formats code
- 🔍 **TypeScript Check**: Ensures type safety
- ❌ **Blocks commit** if there are unfixable linting errors or type issues

**Commit-msg Hook** (validates commit message):

- ✅ **Conventional Commits**: Validates commit message format
- 📝 **Message Format**: `type(scope): description`
- ❌ **Blocks commit** if message doesn't follow conventional format

**Pre-push Hook** (runs before push to remote):

- 🔍 **ESLint Check**: Final linting verification
- 🔧 **TypeScript Check**: Final type checking
- 🔨 **Build Check**: Ensures project builds successfully
- ❌ **Blocks push** if any checks fail

#### Conventional Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding/updating tests
- **build**: Build system changes
- **ci**: CI/CD changes
- **chore**: Other maintenance tasks
- **revert**: Reverting previous commits

#### Examples of Good Commit Messages

```bash
feat(auth): add JWT token validation middleware
fix(payment): resolve Razorpay webhook processing error
docs(readme): update API documentation with new endpoints
refactor(user): extract user validation logic to service layer
test(campaign): add unit tests for campaign creation flow
```

#### Useful Scripts

```bash
npm run commit          # Interactive commit with prompts
npm run commit:help     # Show commit workflow help
npm run validate        # Run all quality checks manually
npm run lint:check      # Check linting without fixing
npm run format:check    # Check code formatting
npm run type-check      # Run TypeScript checks
```

#### Benefits

- **🛡️ Zero Bad Code**: Prevents committing code with errors
- **📏 Consistent Style**: Auto-formatting ensures uniform code style
- **📝 Clear History**: Conventional commits create readable git history
- **🚀 Team Efficiency**: Automated checks reduce code review time
- **🔍 Early Detection**: Catches issues before they reach CI/CD

### Common Development Tasks

#### Adding a New Module

1. Generate module: `nest g module feature-name`
2. Generate service: `nest g service feature-name`
3. Generate controller: `nest g controller feature-name`
4. Add to main app module
5. Configure routes and middleware

#### Database Schema Changes

1. Update `prisma/schema.prisma`
2. Generate migration: `npx prisma migrate dev --name feature-name`
3. Update seed data if needed
4. Generate Prisma client: `npx prisma generate`

#### Adding Background Jobs

1. Create processor class with `@Processor()` decorator
2. Define job handlers with `@Process()` decorator
3. Queue jobs using `@InjectQueue()` in services
4. Configure Bull dashboard for monitoring

### Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Watch mode
npm run test:watch
```

### Debugging & Troubleshooting

#### Common Issues

- **Database connection**: Check DATABASE_URL in .env
- **Migration issues**: Run `npx prisma migrate reset`
- **Redis connection**: Verify Redis server is running
- **Auth errors**: Check JWT secret configuration

#### Performance Optimization

- **Database queries**: Use Prisma query optimization
- **Caching**: Implement Redis caching for frequent queries
- **Background jobs**: Use BullMQ for heavy operations
- **File uploads**: Stream large files to S3

## 📊 Monitoring & Observability

### Logging

- **Winston**: Structured application logging with OTLP export
- **Request logging**: Automatic HTTP request/response activity logs
- **Error logging**: Global exception and background job failure logs

### Tracing & Metrics

- **SigNoz + OpenTelemetry**: Unified traces, metrics, and logs
- **Bull Dashboard**: Job queue monitoring at `/admin/queues`
- **Health checks**: `/health`, `/health/live`, and `/health/ready`
- **Database monitoring**: Prisma slow-query signals plus Postgres profiling via `pg_stat_statements`

### Performance Monitoring

- **HTTP latency**: Slow API request detection through OpenTelemetry spans
- **Queue latency**: BullMQ completion/failure/backlog metrics
- **Database profiling**: `postgres-exporter` custom queries for locks, connection saturation, temp files, cache hit ratio, and sequential scans

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following our code guidelines
4. **Run tests**: `npm run test && npm run test:e2e`
5. **Update documentation**: Add Swagger docs for new endpoints
6. **Commit your changes**: `git commit -m 'Add amazing feature'`
7. **Push to branch**: `git push origin feature/amazing-feature`
8. **Open a Pull Request** with detailed description

### Contribution Guidelines

- Follow NestJS best practices and conventions
- Add comprehensive tests for new features
- Update API documentation with Swagger
- Ensure database migrations are reversible
- Add proper error handling and logging

## 📞 Support & Contact

- **Technical Issues**: Create an issue in the repository
- **General Inquiries**: [support@influish.com](mailto:support@influish.com)
- **API Documentation**: Available at `/api` endpoint

## 📄 License

This project is private and proprietary. All rights reserved.
