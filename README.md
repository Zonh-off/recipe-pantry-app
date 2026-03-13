# 🍳 Recipe Pantry App

A modern, full-stack monorepo application designed to simplify meal planning and minimize food waste. Manage your pantry, discover recipes based on what you already have, and organize your culinary life with ease.

---

## 📸 Screenshots

| Home Page | Pantry Management |
| :---: | :---: |
| ![Home Page Placeholder](https://via.placeholder.com/400x250?text=Home+Page) | ![Pantry Placeholder](https://via.placeholder.com/400x250?text=Pantry+Page) |

| Recipe Discovery | Grocery List |
| :---: | :---: |
| ![Recipes Placeholder](https://via.placeholder.com/400x250?text=Recipe+Search) | ![Grocery List Placeholder](https://via.placeholder.com/400x250?text=Grocery+List) |

---

## ✨ Key Features

- **🏠 Smart Home Page**: Get personalized recipe suggestions based on your current pantry contents.
- **📦 Pantry Management**: 
    - Track ingredients, quantities, and units.
    - Autocomplete ingredient search with correct spelling.
    - *Plan: Scan with camera for quick inventory.*
- **🔍 Recipe Discovery**: 
    - Search over 5,000+ recipes via Spoonacular API.
    - "Ready to Cook" mode: Finds recipes you can make *right now* with your ingredients.
    - Advanced filters: Diets, Cuisines, Max Cooking Time, and Calories.
- **📖 Recipe Details**: 
    - Rich descriptions, structured instructions, and nutritional info.
    - Visual indicators for "Available" vs "Missing" ingredients.
- **🔖 Collections**: Save your favorite recipes into custom organized collections.
- **🛒 Smart Grocery List**: 
    - Automatically add missing ingredients from a recipe to your list.
    - View items grouped by recipe or category.
- **🔐 Secure Authentication**: JWT-based auth with personalized profiles and tastes.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

### Backend
- **Framework**: NestJS
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Cache**: Redis
- **Documentation**: Swagger / OpenAPI
- **Validation**: Zod

---

## 🏗 Architecture

The project is structured as a **pnpm monorepo**.

- **`apps/frontend`**: A focused Next.js application with a feature-based folder structure.
- **`apps/backend`**: A NestJS application following **Clean Architecture** and **Domain-Driven Design (DDD)** principles, separating transport, application, domain, and infrastructure layers.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zonh-off/recipe-pantry-app.git
   cd recipe-pantry-app
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Environment Setup**:
   Create `.env` files in both `apps/frontend` and `apps/backend` (use `.env.example` as a template).
   
   **Root / Backend Key Variables:**
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/recipe_pantry"
   REDIS_URL="redis://localhost:6379"
   SPOONACULAR_API_KEY="your_api_key_here"
   JWT_SECRET="your_secret_here"
   ```

4. **Spin up infrastructure**:
   ```bash
   docker-compose up -d
   ```

5. **Run Database Migrations**:
   ```bash
   cd apps/backend
   pnpm prisma migrate dev
   ```

### Running Locally

From the root directory:

```bash
# Run both apps simultaneously
pnpm dev:frontend
pnpm dev:backend
```

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:3001/v1`
- **API Docs**: `http://localhost:3001/api`

---

## 📁 Project Structure

```text
recipe-pantry-app/
├── apps/
│   ├── frontend/        # Next.js Application
│   │   ├── src/features # Domain-specific features
│   │   └── src/shared   # Reusable UI/Hooks
│   └── backend/         # NestJS Application
│       ├── src/modules  # Domain modules (recipes, pantry, grocery...)
│       └── src/common   # Shared decorators, filters, pipes
├── docker-compose.yml   # Infrastructure setup
└── package.json         # Workspace scripts
```