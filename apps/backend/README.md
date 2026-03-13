# ⚙️ Recipe Pantry Backend

The robust core of the Recipe Pantry App, built with **NestJS**. It follows **Clean Architecture** and **Domain-Driven Design (DDD)** principles to provide a scalable, testable, and high-performance API.

---

## 🚀 Overview

The backend handles complex recipe logic, pantry inventory management, user authentication, and smart mapping between ingredients. It integrates with external providers (Spoonacular) while maintaining a strict separation between business rules and infrastructure.

---

## ✨ Key Features

- **🔐 Robust Authentication**: JWT-based system with login, registration, and profile management.
- **🍳 Smart Recipe Engine**: 
  - Integrated with Spoonacular API for global recipe discovery.
  - **Forgiving Matching**: Advanced logic to match recipe ingredients with pantry items regardless of units or quantities.
  - **Composite Ingredient Handling**: Splits and matches complex items like "Salt and Pepper".
- **📦 Pantry Management**: CRUD operations for user kitchen inventory with ingredient normalization.
- **🛒 Grocery Orchestration**: Logic for adding missing recipe ingredients to shopping lists.
- **📁 Collection Management**: Personalized recipe folders and saving logic.
- **⚡ Performance Caching**: Redis-backed caching for recipe searches and recommendations.
- **📝 API Documentation**: Auto-generated Swagger documentation for all endpoints.

---

## 🏗 Architecture

The project follows a **Layered Clean Architecture**:

- **Transport Layer (`transport/`)**: API Controllers and DTOs. Handles HTTP requests/responses and validation.
- **Application Layer (`application/`)**: Contains **Use Cases**. This is where the orchestration of business logic happens.
- **Domain Layer (`domain/`)**: Pure business logic. Entities, repository interfaces, and domain services. Zero dependencies on external frameworks.
- **Infrastructure Layer (`infrastructure/`)**: Implementation of repository interfaces (Prisma/DB), external API clients (Spoonacular), and caching (Redis).

---

## 🛠 Tech Stack

- **Framework**: NestJS
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Cache**: Redis
- **Documentation**: Swagger / OpenAPI
- **Validation**: Zod & Class-Validator
- **Testing**: Jest

---

## 📁 Project Structure

```text
src/
├── common/          # Shared decorators, guards, filters, and interceptors
├── config/          # Centralized configuration logic
├── modules/         # Domain-specific modules
│   ├── recipes/     # Core recipe search and details logic
│   ├── pantry/      # Inventory and ingredient normalization
│   ├── grocery/     # Shopping list management
│   ├── auth/        # Identity and access management
│   └── collections/ # User folders and recipe saving
└── main.ts          # Application entry point
```

---

## 🔧 Getting Started

### Prerequisites
- Node.js 20+
- pnpm
- Docker (for DB & Cache)

### Development

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Setup environment**:
   Create a `.env` file in the root of this folder (refer to `.env.example`):
   ```bash
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/recipe_pantry"
   REDIS_URL="redis://localhost:6379"
   SPOONACULAR_API_KEY="your_api_key_here"
   JWT_SECRET="your_secret_here"
   ```

3. **Database & Infrastructure**:
   ```bash
   # Spin up containers
   docker-compose up -d
   # Run migrations
   pnpm prisma migrate dev
   ```

4. **Run the server**:
   ```bash
   pnpm run start:dev
   ```

- **API Base**: `http://localhost:3001/v1`
- **Swagger Docs**: `http://localhost:3001/api` (or `/docs`)

---

## 🧪 Backend Guidelines

1. **Dependency Inversion**: Always depend on interfaces in the Domain layer, never on concrete Infrastructure implementations.
2. **Fat Domain, Thin Transport**: Keep validation and orchestration in transport/application and business rules in the Domain.
3. **Use Cases**: Every primary action (e.g., `AddPantryItem`) should have its own dedicated Use Case class.
4. **Error Handling**: Use the global `HttpException` filters and custom domain exceptions.
