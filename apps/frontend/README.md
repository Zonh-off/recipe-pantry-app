# 🖼 Recipe Pantry Frontend

The user interface for the Recipe Pantry App, built with **Next.js**, **Tailwind CSS**, and **TanStack Query**. It provides a premium, responsive experience for managing kitchen inventory and discovering recipes.

---

## 🚀 Overview

The frontend is a modern React application that communicates with the NestJS backend. It uses a **feature-based architecture** to keep the codebase scalable and maintainable.

---

## ✨ Features

- **🏠 Interactive Dashboard**: Smarter hero section that counts available recipes based on your pantry.
- **📦 Pantry Manager**: 
  - Real-time ingredient search with autocomplete.
  - Form-based ingredient addition with unit presets.
  - Visual tracking of ingredient quantities.
- **🔍 Recipe explorer**: 
  - Grid-based search results with high-quality imagery.
  - Advanced filtering system (Diet, Cuisine, Time).
  - Specialized "Ready to Cook" mode.
- **📖 Rich Recipe Details**: 
  - Structured cooking steps.
  - Pantry-aware ingredient lists (checkmarked if owned).
  - Quick-add to grocery list or collections.
- **🛒 Grocery Assistant**: 
  - Smart grouping by recipe.
  - One-click addition of missing items.
- **🌓 Responsive Design**: Fully optimized for mobile, tablet, and desktop.

---

## 🛠 Tech Stack

- **Framework**: Next.js
- **State & Data**: TanStack Query(Server state), React Hook Form (Forms)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Validation**: Zod

---

## 📁 Folder Structure

We follow a **feature-driven** organization:

```text
src/
├── app/             # Next.js App Router (pages & layouts)
├── components/      # Global UI components (primitives)
├── features/        # Domain-specific modules
│   ├── recipes/     # Components, hooks, & API for recipes
│   ├── pantry/      # Ingredients management
│   ├── grocery-list/# Shopping list logic
│   └── collections/ # User folders & saving logic
├── shared/          # Reusable hooks, utils, and common UI
└── providers/       # Global context providers (Auth, QueryClient)
```

---

## 🔧 Getting Started

### Prerequisites
- Node.js 20+
- pnpm

### Development

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Setup environment**:
   Create a `.env` file in the root of this folder:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/v1
   ```

3. **Run the dev server**:
   ```bash
   pnpm dev
   ```

The app will be available at `http://localhost:3000`.

---

## 🧪 Frontend Guidelines

1. **Feature Isolation**: Keep logic related to a specific domain (like Pantry) inside `src/features/pantry`.
2. **Component Granularity**: Break large components into smaller, focused pieces within the feature's `components` subfolder.
3. **Type Safety**: Define interfaces for all API responses and component props using TypeScript.
4. **Resiliency**: Always handle loading and error states using the provided `LoadingSkeleton` or error boundary patterns.
