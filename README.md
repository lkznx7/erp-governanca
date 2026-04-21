# ERP/CRM de Governança Estudantil

## 📋 Descrição
Sistema completo de gestão corporativa com RBAC rigoroso, gestão de membros e projetos comerciais.

## 🛠 Tech Stack
- **Frontend:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (Premium Dark Mode)
- **Backend:** Next.js API Routes + Prisma ORM
- **Database:** PostgreSQL
- **Validation:** Zod + React Hook Form

## 🎨 Design System
- Premium Dark Mode com acentos em cyan neon
- Interface corporativa limpa e responsiva

## 🏗 Estrutura
```
src/
├── app/
│   ├── api/          # API Routes
│   ├── components/  # Componentes React
│   ├── hooks/       # Custom Hooks
│   └── page.tsx     # Dashboard Principal
├── prisma/
│   └── schema.prisma # Schema do Banco
└── package.json
```

## 🔐 RBAC - Roles
| Role | Módulos permitidos |
|------|-------------------|
| DIRETORIA | Painel financeiro, Edição de usuários, Membros, Projetos |
| ADMIN | Membros, Projetos, Relatórios |
| COMERCIAL | Ciclo de vida dos projetos |
| MEMBER | visualização |
| VIEWER | Acesso somente leitura |

## 📊 Módulos Implementados

### 1. Gestão de Membros
- CRUD completo de membros
- Atribuição de cargos (Role)
- Departamento e posição
- Status ativo/inativo

### 2. Projetos Comerciais (Kanban)
- 4 colunas: TODO, IN_PROGRESS, REVIEW, DONE
- Gestão visual de workflow

## 🚀 Como Rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar banco (PostgreSQL)
Crie um arquivo `.env`:
```env
DATABASE_URL="postgresql://user:pass@localhost:5432/erp_governanca"
```

### 3. Push schema para banco
```bash
npm run db:push
```

### 4. Executar desenvolvimento
```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 📝 Decisões Arquiteturais
1. **Next.js App Router**: Server Components para performance
2. **Prisma ORM**: Type-safe database queries
3. **Zod + React Hook Form**: Validação rigorosa de formulários
4. **Zustand**: Gerenciamento de estado global
5. **RBAC no Frontend**: Componentes condicionais baseados na Role

## 🔧 Para Desenvolvedor
```bash
# Abrir Prisma Studio (GUI do banco)
npm run db:studio
```