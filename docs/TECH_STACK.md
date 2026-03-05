# Tech Stack Contract

This document defines the mandatory technology stack.
The AI agent must not introduce alternative technologies without explicit approval.

---

# Backend

Framework: NestJS  
Language: TypeScript (strict mode)  
ORM: Prisma  
Database: PostgreSQL  
Cache: Redis  
Queue: BullMQ  
Validation: class-validator  
Auth: JWT

---

# Frontend

Framework: Next.js (App Router)  
Language: TypeScript (strict)  
Auth: NextAuth  
Styling: TailwindCSS  
State: Minimal local state (no Redux)

---

# DevOps

Containerization: Docker  
Package Manager: pnpm  
Environment validation: zod at startup  
Logging: structured JSON

---

# Forbidden Stack Changes

❌ No direct Spoonacular calls from frontend  

---

# Final Rule

Stack is a contract.
Changing stack requires architecture review.