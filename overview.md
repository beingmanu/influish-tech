# 🌟 Influish Backend Overview

> A scalable, strictly-typed, and modular core API server built with **NestJS** that powers the entire Influish ecosystem.

---

## 🚀 What is Influish Backend?
It serves as the robust central hub connecting different platforms and services seamlessly:
*   📱 **Mobile App APIs:** Consumed by the Flutter frontend.
*   💻 **Admin Panel APIs:** Consumed by the React.js frontend.
*   ⚡ **Real-time Features:** Powered by WebSocket connections for live chat and instantaneous notifications.

---

## ✨ Key Features
The backend is highly feature-rich and strictly organized into functional domains:

| Domain | Capabilities |
| :--- | :--- |
| 🔐 **Auth & Security** | JWT, Firebase Auth, RBAC (Admin, Brand, Influencer), & API keys. |
| 👥 **User Management** | Multi-role profiles, social media integrations, & KYC document verification. |
| 🎯 **Campaign System** | AI-powered creation (via OpenAI), influencer matching, & lifecycle management. |
| 💬 **Real-Time Comm** | Brand-influencer chats (`Socket.IO`), FCM push notifications, & admin support. |
| 💳 **Payment & Wallet** | `Razorpay` & `Cashfree` integrations, plus an internal wallet for fast payouts. |
| 📊 **Observability** | Campaign tracking, `Winston` (logging), `OpenTelemetry`, & `SigNoz` for health. |
| 🤖 **DM Automation** | Robust background processing (`BullMQ` & `Redis`) for IG DMs with rate-limiting. |

---

## 🛠 Tech Stack
Leveraging a modern, high-performance Node.js ecosystem:

*   **Core:** `NestJS`, `TypeScript`, `Express`
*   **Database:** `PostgreSQL` (with `Prisma ORM`), `Redis` (caching & queues)
*   **Job Queues:** `BullMQ`
*   **External Services:** AWS S3, Firebase (Auth/Storage/Push), OpenAI, Instagram API
*   **Payments:** Razorpay, Cashfree

---

## 📁 Architecture & Workflow

### 🏗️ Design Patterns
Engineered for scalability and maintainability using enterprise-grade architectural patterns:
*   **DDD** (Domain-Driven Design)
*   **Clean Architecture**
*   **CQRS** (Command Query Responsibility Segregation)
*   **Event-Driven Architecture**

### 🛡️ Code Quality & CI/CD
*   **Husky Hooks:** Strictly enforces checks before commits are allowed.
*   **Linters/Formatters:** Runs `Prettier`, `ESLint`, and `TypeScript` checks automatically.
*   **Commit Standards:** Mandates Conventional Commits (e.g., `feat(auth): add login`).

---
> *Built to handle the complex, real-time workflows and financial transactions required by a modern influencer marketing platform.*
