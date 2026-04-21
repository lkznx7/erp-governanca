# 🏛️ ERP Governança - Sistema de Gestão Corporativa

> Sistema completo de gestão corporativa com RBAC rigoroso, gestão de membros e projetos comerciais (Kanban).

[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748.svg)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue.svg)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Visão do Sistema](#-visão-do-sistema)
- [Arquitetura](#-arquitetura)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Esquema do Banco](#-esquema-do-banco)
- [RBAC - Controle de Acesso](#-rbac---controle-de-acesso)
- [Módulos](#-módulos)
- [Configuração](#-configuração)
- [Comandos](#-comandos)
- [Testando](#-testando)
- [Decisões Arquiteturais](#-decisões-arquiteturais)
- [FAQ](#-faq)

---

## 🎯 Sobre o Projeto

ERP Governança é um sistema de gestão corporativa completo com controle de acesso baseado em roles (RBAC), gestão de membros e projetos comerciais com workflow Kanban.

### ✨ Funcionalidades Principais

| Feature | Descrição |
|---------|-----------|
| **RBAC Rigoroso** | 5 roles com permissões granulares |
| **Gestão de Membros** | CRUD completo com cargos |
| **Projetos Kanban** | 4 colunas: TODO, IN_PROGRESS, REVIEW, DONE |
| **Gestão de Tarefas** | Tasks com status e prioridades |
| **Workspaces** | Multi-tenant por workspace |
| **Design Premium** | Dark Mode com acentos neon |

---

## 👁 Visão do Sistema

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ERP GOVERNANÇA                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────┐  ┌────────────────────────────────────────────┐   │
│  │              │  │                                            │   │
│  │   MENU      │  │              CONTEÚDO                       │   │
│  │   LATERAL  │  │                                            │   │
│  │            │  │  ┌────────────────────────────────────┐    │   │
│  │  ─────────  │  │  │          TABLE / KANBAN            │    │   │
│  │  Membros   │  │  │                                    │    │   │
│  │  Projetos  │  │  │                                    │    │   │
│  │  Relatórios│  │  │                                    │    │   │
│  │  Config    │  │  │                                    │    │   │
│  │            │  │  └────────────────────────────────────┘    │   │
│  │  ─────────  │  │                                            │   │
│  │  Usuario   │  │                                            │   │
│  │  Logado    │  │                                            │   │
│  └──────────────┘  └────────────────────────────────────────────┘   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🏗 Arquitetura

### Fluxo de Dados

```
┌───────────────────────────────────────────────────────────────────────┐
│                         FRONTEND (Next.js)                            │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────┐       │
│  │                    React Components                          │       │
│  │                                                              │       │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │       │
│  │  │ Sidebar │  │ Members │  │ Projects│  │ Forms   │       │       │
│  │  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘       │       │
│  │       │            │            │            │             │       │
│  │  ┌────▼────────────▼────────────▼────────────▼────┐       │       │
│  │  │             State Management (Zustand)         │       │       │
│  │  └────────────────────┬───────────────────────────┘       │       │
│  └───────────────────────┼───────────────────────────────────┘       │
│                        │                                              │
│  ─────────────────────▼─────────────────────────────────────────    │
│                         BACKEND (Next.js API Routes)                  │
│  ─────────────────────▼─────────────────────────────────────────    │
│                        │                                              │
└────────────────────────┼────────────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────────────┐
│                         PRISMA ORM                                    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────┐     │
│  │                    PostgreSQL Database                       │     │
│  │                                                              │     │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐         │     │
│  │  │  User   │  │ Member  │  │ Project │  │  Task   │         │     │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘         │     │
│  │                                                              │     │
│  └─────────────────────────────────────────────────────────────┘     │
│                                                                        │
└──────────────────────────────────────────────────────────────────────┘
```

### Stack Full-Stack

```
Frontend ──── Next.js API Routes ──── Prisma ORM ──── PostgreSQL
(React)        (Serverless)            (Type-safe)     (Database)
```

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|-----------|-------|-----|
| **Next.js** | 14 | Framework React + API |
| **React** | 18 | UI Library |
| **TypeScript** | 5 | Tipagem estática |
| **Tailwind CSS** | 3.4 | Framework CSS |
| **Prisma** | 5 | ORM |
| **PostgreSQL** | 16 | Banco de dados |
| **Zod** | 3.22 | Validação |
| **React Hook Form** | 7.49 | Formulários |
| **Zustand** | 4.4 | State Management |
| **Lucide React** | 0.303 | Ícones |
| **bcryptjs** | 2.4 | Hash de senhas |
| **jsonwebtoken** | 9.0 | JWT |
| **date-fns** | 3.0 | Datas |

---

## 📁 Estrutura do Projeto

```
erp-governanca/
├── src/
│   └── app/
│       ├── globals.css            # Estilos globais
│       ├── layout.tsx            # Layout principal
│       ├── page.tsx              # Dashboard
│       └── api/                 # API Routes (futuro)
│           ├── members/
│           ├── projects/
│           └── tasks/
├── prisma/
│   └── schema.prisma              # Schema do banco
├── public/                       # Arquivos estáticos
├── package.json                   # Dependências
├── tailwind.config.js            # Config Tailwind
├── tsconfig.json                # Config TypeScript
├── next.config.js               # Config Next.js
└── README.md
```

---

## 🚀 Instalação

### Pré-requisitos

| Software | Versão Mínima |
|----------|---------------|
| Node.js | 18 |
| npm | 9 |
| PostgreSQL | 14 |
| Docker | 24 (opcional) |

### Passo 1: Clonar

```bash
git clone https://github.com/lkznx7/erp-governanca.git
cd erp-governanca
```

### Passo 2: Instalar

```bash
npm install
```

### Passo 3: Configurar Banco

Crie um arquivo `.env`:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/erp_governanca"
```

### Passo 4: Criar Tabelas

```bash
npx prisma db push
```

### Passo 5: Executar

```bash
npm run dev
```

### Passo 6: Acessar

```
http://localhost:3000
```

---

## 🗄️ Esquema do Banco

### Diagrama ER

```
┌───────────────────────────────────────────────────────────────────────┐
│                     DATABASE SCHEMA                                    │
├───────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─────────────┐                                                      │
│  │   User     │ (1)                                                     │
│  └──────┬─────┘                                                        │
│         │ (N)                                                          │
│         │   ┌─────────────┐                                             │
│  ┌──────┴───│UserWorkspace│(N)                                          │
│  │           └──────┬─────┘                                             │
│  │                  │ (N)                                               │
│  │           ┌──────┴─────┐                                             │
│  │           │ Workspace  │ (1)                                          │
│  │           └──────┬─────┘                                             │
│  │                  │ (N)  (N)                                           │
│  │      ┌───────────┼───────────┐                                         │
│  │      │           │           │                                         │
│  │ (N)  │           │           │ (N)                                    │
│  ▼      ▼           ▼           ▼                                        │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐                                   │
│ │ Member  │  │ Project │  │ Member  │                                   │
│ └─────────┘  └────┬────┘  └─────────┘                                   │
│                  │ (N)                                                  │
│             ┌────┴────┐                                                 │
│             │  Task   │                                                  │
│             └─────────┘                                                  │
│                                                                        │
└───────────────────────────────────────────────────────────────────────┘
```

### Model User

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  role      Role     @default(MEMBER)
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  workspaces  UserWorkspace[]
  projects    Project[]       @relation("ProjectOwner")
  tasks       Task[]          @relation("TaskAssignee")
}
```

### Model Member

```prisma
model Member {
  id          String   @id @default(cuid())
  name       String
  email      String
  role       Role     @default(MEMBER)
  department String?
  position   String?
  avatar     String?
  active    Boolean  @default(true)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  workspaceId String

  tasks Task[]
}
```

### Model Project

```prisma
model Project {
  id          String        @id @default(cuid())
  name        String
  description String?
  status      ProjectStatus @default(ACTIVE)
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt

  ownerId      String
  owner       User          @relation("ProjectOwner", fields: [ownerId], references: [id])
  workspace   Workspace     @relation(fields: [workspaceId], references: [id])
  workspaceId String

  tasks Task[]

  @@unique([name, workspaceId])
}
```

### Model Task

```prisma
model Task {
  id          String    @id @default(cuid())
  title       String
  description String?
  status      TaskStatus @default(TODO)
  priority    Priority   @default(MEDIUM)
  dueDate     DateTime?
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt

  project    Project   @relation(fields: [projectId], references: [id])
  projectId  String
  assignee   User?     @relation("TaskAssignee", fields: [assigneeId], references: [id])
  assigneeId String?
  member     Member?   @relation(fields: [memberId], references: [id])
  memberId   String?
}
```

### Enums

```prisma
enum Role {
  DIRETORIA
  ADMIN
  COMERCIAL
  MEMBER
  VIEWER
}

enum ProjectStatus {
  ACTIVE
  ON_HOLD
  COMPLETED
  ARCHIVED
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  REVIEW
  DONE
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}
```

---

## 🔐 RBAC - Controle de Acesso

### Matriz de Permissões

| Recurso | DIRETORIA | ADMIN | COMERCIAL | MEMBER | VIEWER |
|---------|-----------|-------|-----------|-------|--------|
| **Membros** | | | | | |
| Ver | ✅ | ✅ | ❌ | 👁️ | 👁️ |
| Criar | ✅ | ✅ | ❌ | ❌ | ❌ |
| Editar | ✅ | ✅ | ❌ | ❌ | ❌ |
| Deletar | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Projetos** | | | | | |
| Ver | ✅ | ✅ | ✅ | 👁️ | 👁️ |
| Criar | ✅ | ✅ | ✅ | ❌ | ❌ |
| Editar | ✅ | ✅ | ✅ | ❌ | ❌ |
| Deletar | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Relatórios** | | | | | |
| Ver | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Configurações** | | | | |
| Ver | ✅ | ✅ | ❌ | ❌ | ❌ |
| Editar | ✅ | ❌ | ❌ | ❌ | ❌ |

### Roles Detalhadas

#### DIRETORIA 🟣
- **Descrição:** Direção executiva
- **Permissões:** plenas (tudo)
- **Uso:** Decisões estratégicas, gestão de alto nível

#### ADMIN 🔵
- **Descrição:** Administrador
- **Permissões:** Gestão de membros e projetos
- **Uso:** Gestão operacional do sistema

#### COMERCIAL 🟢
- **Descrição:** Time comercial
- **Permissões:** Apenas projetos
- **Uso:** Time de vendas e projetos

#### MEMBER ⬛
- **Descrição:** Membro comum
- **Permissões:** Apenas visualização
- **Uso:** Colaboradores de projetos

#### VIEWER ⬜
- **Descrição:** Leitor
- **Permissões:** Somente leitura
- **Uso:** Stakeholders, clientes

### Implementação no Frontend

```typescript
type Role = 'DIRETORIA' | 'ADMIN' | 'COMERCIAL' | 'MEMBER' | 'VIEWER';

// Current user role (simulated)
const currentUserRole: Role = 'DIRETORIA';

// Permission checks
const canEdit = currentUserRole === 'DIRETORIA' || currentUserRole === 'ADMIN';
const canDelete = currentUserRole === 'DIRETORIA';
```

### Componentes Condicionais

```tsx
// Mostrar botão de edição apenas para quem pode editar
{canEdit && (
  <button className="btn-primary">
    Novo Membro
  </button>
)}

// Mostrar coluna de ações apenas para admins
{canDelete && <th>Ações</th>}
```

### Badge de Roles

```typescript
const getRoleBadge = (role: Role) => {
  const colors: Record<Role, string> = {
    DIRETORIA: 'bg-purple-600',
    ADMIN: 'bg-blue-600',
    COMERCIAL: 'bg-green-600',
    MEMBER: 'bg-dark-600',
    VIEWER: 'bg-dark-500',
  };
  return colors[role];
};
```

---

## 📦 Módulos

### 1. Gestão de Membros

#### Lista de Membros

| Campo | Tipo | Descrição |
|-------|------|-----------|
| Nome | String | Nome completo |
| Email | String | Email corporativo |
| Departamento | String | Área/departamento |
| Cargo | Role | Papel no sistema |
| Status | Boolean | Ativo/Inativo |
| Ações | Buttons | Editar/Deletar |

#### Badges de Status

```typescript
// Ativo
<span className="bg-green-900 text-green-400">
  Ativo
</span>

// Inativo
<span className="bg-red-900 text-red-400">
  Inativo
</span>
```

---

### 2. Projetos Comerciais (Kanban)

#### Colunas

| Coluna | Status | Cor |
|-------|--------|-----|
| TODO | À Fazer | dark-400 |
| IN_PROGRESS | Em Progresso | blue-500 |
| REVIEW | Revisão | yellow-500 |
| DONE | Concluído | green-500 |

#### Kanban Board

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│  TODO    │  │IN_PROGRESS│  │  REVIEW  │  │   DONE   │
├──────────┤  ├──────────┤  ├──────────┤  ├──────────┤
│          │  │          │  │          │  │          │
│ ┌──────┐ │  │ ┌──────┐ │  │ ┌──────┐ │  │ ┌──────┐ │
│ │Card 1│ │  │ │Card 2│ │  │ │Card 3│ │  │ │Card 4│ │
│ └──────┘ │  │ └──────┘ │  │ └──────┘ │  │ └──────┘ │
│          │  │          │  │          │  │          │
│ ┌──────┐ │  │ ┌──────┐ │  │          │  │ ┌──────┐ │
│ │Card 5│ │  │ │Card 6│ │  │          │  │ │Card 7│ │
│ └──────┘ │  │ └──────┘ │  │          │  │ └──────┘ │
│          │  │          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

---

### 3. Tarefas (Tasks)

#### Status Workflow

```
┌──────┐     ┌─────────────┐     ┌────────┐     ┌──────┐
│ TODO │ ──▶ │ IN_PROGRESS │ ──▶ │ REVIEW │ ──▶ │ DONE │
└──────┘     └─────────────┘     └────────┘     └──────┘
```

#### Prioridades

| Prioridade | Indicador | Cor |
|------------|-----------|-----|
| LOW | 🟢 | verde |
| MEDIUM | 🟡 | amarelo |
| HIGH | 🟠 | laranja |
| URGENT | 🔴 | vermelho |

---

## ⚙️ Configuração

### Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | URL do PostgreSQL | `postgresql://user:pass@localhost:5432/erp` |
| `JWT_SECRET` | Chave JWT (futuro) | `your-secret-key` |

### .env.example

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/erp_governanca"
JWT_SECRET="super-secret-jwt-key-change-in-production"
```

### Prisma Schema

```bash
# Gerar cliente Prisma
npx prisma generate

# Criar migrations
npx prisma migrate dev --name init

# Push schema para banco
npx prisma db push

# Abrir Prisma Studio
npx prisma studio
```

---

## 🔧 Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Iniciar desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Iniciar produção |
| `npm run lint` | Verificar código |
| `npx prisma db push` | Sincronizar banco |
| `npx prisma studio` | GUI do banco |
| `npx prisma generate` | Gerar cliente |

---

## 🧪 Testando

### Teste 1: Página Principal

```bash
npm run dev
# Abra http://localhost:3000
# Verifique o dashboard
```

### Teste 2: Aba Membros

```bash
# Clique em "Membros" no menu lateral
# Verifique a tabela
```

### Teste 3: Aba Projetos

```bash
# Clique em "Projetos" no menu lateral
# Verifique o Kanban
```

### Teste 4: Permissões

```bash
# Altere currentUserRole para diferentes valores:
# 'ADMIN', 'MEMBER', 'VIEWER'
# Observe as mudanças nos botões e ações
```

---

## 🏛️ Decisões Arquiteturais

### 1. Next.js App Router

**Decisão:** Usar Next.js 14 com App Router.

**Motivo:**
- Server Components para performance
- Layouts aninhados
- API Routes integradas
- Melhor DX

**Alternativa rejeitada:** Pages Router

---

### 2. Prisma ORM

**Decisão:** Usar Prisma para acesso a dados.

**Motivo:**
- Type-safe queries
- Migrações fáceis
- GUI (Prisma Studio)
- Multi-database

**Alternativa rejeitada:** raw SQL

---

### 3. Zustand para State

**Decisão:** Usar Zustand para state management.

**Motivo:**
- Simples e leve
- TypeScript nativo
- Sem boilerplate
- Performance

**Alternativa rejeitada:** Redux

---

### 4. Zod + React Hook Form

**Decisão:** Usar Zod para validação.

**Motivo:**
- Type-safe schemas
- Integração com RHF
- Validação complexa
- Reutilizável

---

### 5. Design System Próprio

**Decisão:** CSS customizado ao invés de componentes prontos.

**Motivo:**
- Total controle
- Leve (sem libs pesadas)
- Customizável
- Aprendizado

---

## ❓ FAQ

### P: Como adicionar um novo Role?

R: Edite o enum `Role` em `schema.prisma`:
```prisma
enum Role {
  DIRETORIA
  ADMIN
  COMERCIAL
  MEMBER
  VIEWER
  NEW_ROLE // Adicione aqui
}
```

Depois execute:
```bash
npx prisma db push
```

---

### P: Como adicionar um novo Status de Projeto?

R: Edite `ProjectStatus`:
```prisma
enum ProjectStatus {
  ACTIVE
  ON_HOLD
  COMPLETED
  ARCHIVED
  CANCELLED // Adicione aqui
}
```

---

### P: Posso usar MySQL?

R: Sim, troque em `schema.prisma`:
```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

---

### P: Como fazer deploy?

R: Use Vercel:
```bash
vercel
```

Ou Docker:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

---

## 📄 Licença

MIT License - Lucas Moreira Brandão

---

## 👤 Autor

**Lucas Moreira Brandão**
- GitHub: [@lkznx7](https://github.com/lkznx7)

---

<p align="center">
  <strong>ERP Governança</strong> - Gestão Corporativa com RBAC
</p>