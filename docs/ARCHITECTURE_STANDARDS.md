# 📘 Architecture Standards

Defines structural standards for scalable backend/frontend systems.

---

# 1. Recommended Backend Structure

Each module must contain its own domain, application, and infrastructure layers.

```
src/
  shared/                 # Only truly shared infrastructure
  modules/
    <module-name>/
      <module>.module.ts
      transport/
        controllers/
        dto/
      application/
        use-cases/
      domain/
        entities/
        repositories/
        services/         # Pure domain services only
      infrastructure/
        repositories/
        adapters/
        cache/
```

shared/ must contain only cross-cutting concerns

---

# 2. Domain Layer

Location:

```
modules/<module>/domain/
```

Domain must:
- Contain pure business rules
- Define entities and value objects
- Define repository interfaces (ports)
- Define domain services (if necessary)
- Be fully testable in isolation

Domain MUST NOT:
- Import NestJS
- Import Prisma or any database drivers
- Import HTTP objects
- Import external API clients

Domain layer defines contracts.
Infrastructure implements them.

---

# 3. Application Layer (Use Cases)

Location:

```
modules/<module>/application/use-cases/
```

UseCases must:

- Orchestrate domain logic
- Coordinate repositories via interfaces
- Handle transactional boundaries
- Be framework-agnostic
- Return predictable output models

Rules:
- One use case = one business action
- No HTTP logic
- No direct database access
- No external API calls directly (only via injected ports)

Use cases depend only on:
- Domain layer
- Interfaces (ports)

---

# 4. Infrastructure Layer

Location:

```
modules/<module>/infrastructure/
```

Infrastructure contains:

- Repository implementations (e.g. Prisma)
- External API adapters (e.g. Spoonacular)
- Cache implementations
- Persistence mapping logic

Rules:
- Must implement interfaces defined in the module’s domain layer
- May import Prisma, Redis, external SDKs
- Must not contain business rules
- Must not contain controller logic

Infrastructure is replaceable.
Domain and application must not depend on concrete implementations.

---

# 5. External Integrations

All third-party services must:
- Be wrapped in adapters
- Use interfaces
- Support timeouts
- Handle partial failures
- Be swappable without breaking domain

---

# 6. Caching Strategy

Cache must:
- Have clear TTL
- Use deterministic keys
- Be transparent to domain layer
- Support invalidation strategy

---

# 7. API Standards

- Versioned routes (/v1/)
- Consistent response envelope
- Proper HTTP status codes
- Idempotent write operations when applicable

---

# 8. Scalability Rules

System must allow:
- Horizontal scaling
- Worker separation
- Background job queues
- Swappable DB layer
- Feature modularization

---

# 9. Evolution Strategy

All systems must support:
- Adding new modules without refactoring core
- Replacing external providers
- Migrating database safely
- Feature flag introduction

---

# 10. Design Philosophy

Architecture must optimize for:
- Clarity
- Predictability
- Testability
- Replaceability
- Observability

Never optimize for:
- Short-term speed
- Cleverness
- Overengineering

---

# Final Architecture Rule

Each module must be independently understandable.
If implementing or modifying a feature requires editing multiple unrelated modules,
the structure is wrong.
Architecture is organized by feature, not by technical layer globally.