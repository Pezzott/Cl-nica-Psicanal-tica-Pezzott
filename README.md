# Clínica Psicanalítica Pezzott — Plataforma de Conhecimento (v2)

Site editorial da **Clínica Psicanalítica Pezzott**: conteúdo e autoridade em psicanálise, com foco no cotidiano de quem chega pelo Instagram.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + `@tailwindcss/typography`
- Conteúdo em MDX (`content/artigos`)
- Deploy previsto via Vercel (branch `v2-plataforma-conhecimento`)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/app` — páginas (Home, Conteúdos, Temas, Sobre, Contato)
- `src/components` — UI editorial
- `src/lib` — site, temas, artigos
- `content/artigos` — artigos MDX
- `public/img` — assets herdados da v1

## Versões

- Tag `v1-clinica-landing` — landing de clínica (CRA)
- Branch `v2-plataforma-conhecimento` — plataforma editorial (este código)
