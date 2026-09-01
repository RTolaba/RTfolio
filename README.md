# RTfolio

Portfolio personal con Next.js, arquitectura por feature modules, MongoDB Atlas y panel admin.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- MongoDB Atlas + Mongoose
- Auth.js v5 (NextAuth)
- Vercel Analytics

## Estructura

```
src/
├── app/              # Routing (páginas delgadas)
├── modules/          # Features: home, about, projects, blog, contact, admin
├── components/ui/    # Primitivos compartidos (Button, Card, Input...)
└── lib/              # db, models
```

## Setup

1. Copiá `.env.local.example` a `.env.local` y completá las variables.
2. `npm install`
3. `npm run dev`

## Variables de entorno

| Variable | Descripción |
|---|---|
| `MONGODB_URI` | Connection string de MongoDB Atlas |
| `AUTH_SECRET` | Secret para Auth.js (`openssl rand -base64 32`) |
| `ADMIN_EMAIL` | Email del admin |
| `ADMIN_PASSWORD` | Password del admin |
| `NEXT_PUBLIC_SITE_URL` | URL del sitio (para sitemap) |

## Rutas

- `/` — Home
- `/about` — About
- `/projects` — Proyectos
- `/blog` — Blog
- `/contact` — Contacto
- `/admin` — Panel admin (requiere login en `/admin/login`)

Sin `MONGODB_URI`, el sitio funciona en modo demo con datos mock.
