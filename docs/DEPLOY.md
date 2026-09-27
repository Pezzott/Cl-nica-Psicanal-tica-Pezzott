# Publicação (GitHub + Vercel)

A v2 está pronta localmente na branch `v2-plataforma-conhecimento`.

## Situação atual

- Tag local: `v1-clinica-landing`
- Branch local: `v2-plataforma-conhecimento` (commit `ced453d`)
- Build: `npm run build` OK
- Preview local: `npx next dev -p 3000` → http://localhost:3000
- Push remoto bloqueado: a máquina autentica no GitHub como `AFERR136_ford`, sem permissão no repo `Pezzott/...`
- Vercel CLI: sessão deslogada (`vercel whoami` → Logged out)

## O que fazer (conta Pezzott)

### 1. Push da branch e da tag

No PowerShell, na pasta do projeto:

```powershell
cd "C:\Users\AFERR136\OneDrive - azureford\03_Estudos_Carreira\Clinica-Psicanalitica-Pezzott"
# Autentique como Pezzott (GitHub CLI ou credencial do Windows)
git push -u origin v2-plataforma-conhecimento
git push origin v1-clinica-landing
```

### 2. Preview na Vercel

```powershell
vercel login
vercel link   # escolha o time adenilton-pezzotts-projects / projeto existente ou novo
vercel        # preview (NÃO use --prod até aprovação)
```

Ou, após o push: no dashboard Vercel, conecte a branch `v2-plataforma-conhecimento` para gerar Preview URL automaticamente.

### 3. Produção

Só depois da revisão conjunta: promover o preview ou `vercel --prod` / merge em `master` conforme combinado.
