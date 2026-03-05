# 📘 Engineering Constitution

This document defines universal engineering rules applicable to any full-stack production system.

---

# 1. Core Principles

## 1.1 Production-First
- No hacks
- No temporary shortcuts
- No magic behavior
- No hidden state

All code must be deployable tomorrow.

---

## 1.2 Layer Isolation

Strict boundaries:

Controllers → Transport only  
UseCases → Application logic  
Domain → Business rules  
Repositories → Data access  
Adapters → External integrations

No cross-layer leakage.

---

## 1.3 Backend Authority

- External APIs must be accessed only from backend
- No secret exposure
- Frontend never accesses DB directly

---

# 2. Data Rules

- All input validated server-side
- No implicit schema changes
- Migrations required
- Avoid destructive operations

---

# 3. Error Handling

- Global exception handling required
- No raw stack traces to client
- Structured error responses only
- All errors logged with correlation ID

---

# 4. Observability

Must include:
- Structured logging (JSON)
- requestId
- userId (if available)
- latency measurement
- error tracking

---

# 5. Performance

- Avoid N+1 queries
- Use pagination
- Cache expensive operations
- Never block event loop
- Use background workers for heavy tasks

---

# 6. Security

- Never trust client input
- Validate DTOs
- No secrets in frontend
- Use rate limiting
- Sanitize all user input

---

# 7. Testing Standards

Required:
- Unit tests for business logic
- Integration tests for critical flows
- No skipped tests in main branch

Forbidden:
- Tests without assertions
- Tests against production DB

---

# 8. Deployment Rules

- Dockerized
- Environment variables validated at startup
- Graceful shutdown implemented
- Health checks:
    - /health/live
    - /health/ready

---

# 9. Forbidden Practices

❌ Business logic in controllers  
❌ Global mutable state  
❌ Silent failures  
❌ Hardcoded secrets  
❌ Tight coupling to external providers

---

# Final Rule

If it cannot scale conceptually,
it should not be implemented.