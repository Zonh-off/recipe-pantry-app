# Recipe Pantry App - Backend

This is the backend for the Recipe Pantry App, built with [NestJS](https://nestjs.com/), [Prisma ORM](https://www.prisma.io/), PostgreSQL, and Redis. It follows a strict Clean Architecture design pattern with distinct layering, ensuring high maintainability, testability, and separation of concerns.

## Architecture

The project is structured around the principles of Clean Architecture. Business logic and core definitions are isolated from external frameworks or services. 

Each feature is organized by domain modules (`src/modules/*`):
- **Core (Domain)**: pure TypeScript definitions (`entities`, `repositories` interfaces, `services` containing core logic).
- **Application**: Application specific use-cases orchestrating the business logic.
- **Infrastructure**: Adapters to external services (e.g., Prisma implementation of repositories, Spoonacular API clients).
- **Transport**: Entry points into the system such as HTTP Controllers (REST API endpoints), DTOs for request validation.

## Tech Stack
- **Framework:** NestJS
- **Language:** TypeScript
- **Database:** PostgreSQL (with Prisma Client/Adapter)
- **Caching:** Redis (`ioredis`)
- **Authentication:** JWT & Passport.js
- **Validation:** class-validator & class-transformer

## Requirements
- Node.js (>= 20)
- `pnpm`
- Docker (for local PostgreSQL and Redis)

## Setup & Local Development

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Environment Variables**
   Ensure you have a `.env` file in the root of the project with the necessary variables (refer to `.env.example` if available, or set `DATABASE_URL`, `REDIS_URL`, `JWT_SECRET`, and `SPOONACULAR_API_KEY`).

3. **Database Setup**
   Ensure your Docker containers for Postgres and Redis are running.
   ```bash
   # Run Prisma Migrations
   pnpm prisma migrate dev

   # Generate Prisma Client
   pnpm prisma generate
   ```

4. **Run the Application**

   ```bash
   # development mode (recompiles on change)
   pnpm run start:dev

   # production mode
   pnpm run build
   pnpm run start:prod
   ```

## API Documentation

Swagger UI is configured for the backend. Once the server is running, you can access the interactive API documentation at:
- **Swagger URL:** `http://localhost:3001/docs`

## Scripts

- `pnpm run build`: Compile the application.
- `pnpm run format`: Format code using Prettier.
- `pnpm run lint`: Run ESLint.
- `pnpm run test`: Run Jest unit tests.
- `pnpm run test:watch`: Run Jest in watch mode.

## Testing
Tests reside in the `test/` folder, matching the `src/` directory structure. Use `pnpm run test` to execute them.
