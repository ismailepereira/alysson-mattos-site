# Site — Alysson Mattos (Fisioterapeuta · CREFITO 255433-F)

Site institucional **one-page + blog** do fisioterapeuta **Alysson Mattos**, em
Tangará da Serra (MT). Foco: autoridade, captação de contato via **WhatsApp** e
base para conteúdo/tráfego.

## O que é
Atendimento **particular** de fisioterapia ortopédica, esportiva, domiciliar e
geriátrica. Abordagem **ativa** (fortalecimento e prevenção de lesões).

## Stack
HTML + CSS + JavaScript puro (sem build). Hospedagem em **GitHub Pages** com
deploy automático (GitHub Actions) a cada push na `main`.

## Como rodar (local)
Não precisa de build. Sirva a pasta `src/`:

```bash
# opção 1 — Python
cd src && python -m http.server 8080
# opção 2 — Node
npx serve src
```
Acesse `http://localhost:8080`.

## Estrutura
```
Alysson-Fisioterapeuta/
├── docs/
│   └── roadmap.md            # planejamento e fases do projeto
├── src/
│   ├── index.html            # página principal (one-page)
│   ├── blog.html             # blog (placeholder — Fase 4)
│   ├── 404.html
│   ├── robots.txt · sitemap.xml
│   └── assets/
│       ├── css/styles.css    # design system (paleta + componentes)
│       ├── js/main.js        # menu, revelação ao rolar, form→WhatsApp
│       ├── logo/             # logo oficial (variações PNG)
│       ├── icons/            # favicons gerados
│       └── img/              # fotos do Alysson
├── .github/workflows/deploy.yml
├── logofisiofinal/           # material original do designer (.ai/.psd não versionados)
└── README.md
```

## Identidade visual
- Azul-petróleo `#0D3451` · Verde-água `#49AAA1` · Azul `#06598C`
- Títulos: *Poppins* · Texto/UI: *Inter*

## Captura de contato
Os botões e o formulário (quando existir) montam uma mensagem e abrem o
**WhatsApp do Alysson** (`5565999677158`) — sem backend. A lógica está em
`src/assets/js/main.js`.

## Deploy
Workflow `.github/workflows/deploy.yml` publica `src/` no GitHub Pages.
Ao subir para o GitHub: **Settings → Pages → Source: GitHub Actions**.
URL prevista: `https://ismailepereira.github.io/alysson-mattos-site/`
(atualizar canônicas/OG ao migrar para domínio próprio).

## Como contribuir
Commits seguindo Conventional Commits (`feat:`, `fix:`, `docs:`...). Textos,
comentários e commits em português.

---
Desenvolvido por [ismailepereira](https://ismailepereira.github.io/)
