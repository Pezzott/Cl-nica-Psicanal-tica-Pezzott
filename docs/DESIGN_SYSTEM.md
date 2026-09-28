# Design system editorial — v2 premium

## Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| ink | `#243447` | Texto principal / CTAs |
| ink-soft | `#3D4F63` | Corpo / leitura |
| sage | `#6A9A96` | Acento institucional |
| sage-deep | `#4F7A76` | Links / ênfase |
| paper | `#F6F3EC` | Fundo |
| paper-warm | `#EFE9DF` | Headers de seção / rodapé |
| accent | `#8B6F47` | Detalhe quente pontual |

## Tipografia

- **Display:** Fraunces — títulos e marca
- **Body:** Literata — leitura longa
- **UI:** Source Sans 3 — navegação e meta

## Composição

1. **Home:** hero full-bleed com **zona editorial de leitura** (overlay assimétrico + tipografia clara) → destaques com reveal → mapa de temas → ponte Instagram → sobre
2. **Artigos:** header editorial + chips de tema + grade com reveal
3. **Artigo:** breadcrumb + hero tipográfico + progresso de leitura + corpo + relacionados
4. **Temas:** intro forte + grade refinada
5. **Sobre / Contato:** conteúdo-first; contato discreto

### Hero (legibilidade)

- Overlay localizado (`.hero-overlay`): escurece a esquerda/centro onde está o texto; preserva luminosidade e rostos à direita. No mobile, o gradiente vertical é mais denso na faixa do texto.
- Véu radial suave (`.hero-copy::before`): reforça a zona editorial sem caixa opaca.
- Crop responsivo (`.hero-photo`): `object-position` distinto em mobile/desktop.
- Hierarquia tipográfica no hero: título branco pleno; lede ~90% (`rgba(255,252,247,0.9)`); eyebrow branco pleno com peso bold.
- CTA secundário no hero: borda clara + fundo translúcido discreto (`secondaryLight`), sem caixa opaca.
- Contraste alvo: WCAG AA nos textos menores (eyebrow/lede); medido sobre a composição final, não só sobre a cor tipográfica isolada.

## Motion

- Reveal em scroll (opacity + translate) via `Reveal`
- Hover em cards/links (scale suave, underline progressivo)
- Barra de progresso de leitura no artigo

## Princípios

- Sem WhatsApp verde na home
- Uma composição por viewport no hero
- Conteúdo > conversão clínica
- Sofisticação sem efeito gratuito
- URLs canônicas em `/artigos` (redirect 301 de `/conteudos`)
