# Roadmap — Site Alysson Mattos (Fisioterapeuta)

> Documento de planejamento. Definir e aprovar **antes** de iniciar a construção.
> Base: questionário respondido pelo cliente + material visual entregue.
> Referência de método: projeto `jessica-machado` (HTML/CSS/JS puro, deploy automático).
> Última atualização: 2026-06-22

> **✅ Decisões confirmadas (2026-06-22):** site **one-page + blog**; hospedagem
> **GitHub Pages** com deploy automático; **autorizada** a reescrita ética do diferencial.
> **Progresso:** Fase 1 ✅ · Fase 2 ✅ · Fase 3 ✅ · Fase 4 (Blog) ✅ ·
> Fase 5 (SEO/a11y/perf) ✅ — schema `Physiotherapy`, OG image dedicada, selo de autoridade no
> hero, links internos entre artigos, imagens otimizadas (+ foto do Sobre clareada), nota LGPD
> e aviso médico. Guia do Google Business em `docs/google-business.md`.
> **No ar:** https://ismailepereira.github.io/alysson-mattos-site/ (Pages via branch gh-pages).
> Repo: github.com/ismailepereira/alysson-mattos-site.
> **Pendente do cliente:** fotos/depoimentos reais · @ Instagram · horário · deploy automático
> (precisa `gh auth refresh -s workflow`) · domínio próprio · Google Business.

---

## 0. Resumo executivo

Site **institucional + captação** para o fisioterapeuta **Alysson Mattos**, em **Tangará
da Serra (MT)**. Atendimento **particular**, agendamento **via WhatsApp** (ele mesmo marca).
Objetivo: passar **autoridade** (abordagem ativa, baseada em esporte/fortalecimento),
gerar **contato no WhatsApp** e dar base para tráfego/Instagram.

**Tipo:** site de uma página (one-page) com âncoras + páginas de blog. *(recomendação — ver §7)*
**Stack:** HTML + CSS + JS puro, sem build. **Hospedagem:** GitHub Pages com deploy automático.

---

## 1. Identidade & posicionamento

**Alysson Mattos** — Fisioterapeuta · **CREFITO 255433-F** *(confirmar o número da região,
ex.: CREFITO-9; deve constar no site por exigência profissional).*

**Especialidades / serviços:**
- Fisioterapia **ortopédica** (lesões e traumas)
- Fisioterapia **esportiva**
- Fisioterapia **domiciliar**
- Fisioterapia **geriátrica**

**Atendimento:** somente **particular** (sem convênios).

**Público principal:** idosos · atletas · pessoas que querem **resolver de fato** a dor
(em vez de conviver com ela).

**Diferencial (essência):** abordagem **ativa**, baseada no esporte/desporto, voltada ao
**fortalecimento e à prevenção de lesões** — não fica só em recursos passivos ("choquinho,
laser, mobilização leve"). Trabalha **corpo e mente**.

> ⚠️ **Atenção ao copy:** o diferencial é forte e vendável, mas precisa ser escrito de forma
> **ética** (ver §3). Evitar promessas numéricas de resultado ("resolvo em metade do tempo")
> e autoelogio. Reescrever como **proposta de método**: *"abordagem ativa focada em
> fortalecimento e prevenção, para você voltar a se movimentar com segurança"*.

**Formações a destacar (agrupar como selos de autoridade, não listar cru):**
- 🎯 **Tratamento e prevenção de lesões:** TaFar (1 ano) · MTOR (treino baseado em academia para tratamento/prevenção) · tratamento de coluna · tratamento de joelho · liberação miofascial
- 🧬 **Dermatofuncional:** Pós-graduação (2 anos) + diplomatura na Faculdade Fénix (Chile)
- 🏃 **Movimento & performance:** Pilates · Treinamento funcional

---

## 2. Identidade visual

**Logo:** símbolo circular — silhueta de costas/coluna sobre uma **mão** (cuidado + estrutura
corporal), traço esportivo e clean. Entregue em alta (PNG com/sem fundo, `.ai`, `.psd`) — ótimo.

### Paleta (extraída da arte principal da logo)
| Uso | Cor | Hex |
|-----|-----|-----|
| Primária — header, títulos, texto forte | Azul-petróleo escuro | `#0D3451` |
| Secundária — botões, ícones, detalhes (CTA WhatsApp) | Verde-água / teal | `#49AAA1` |
| Apoio — degradês, links, destaques | Azul | `#06598C` |
| Fundo base | Off-white / cinza muito claro | `#F6F8F9` |
| Texto corrido | Cinza-azulado escuro | `#28323A` |

> Existe também versão **verde monocromática** (cor alternativa) — usar como variação para
> selos/ícones. Versões **branca** e **preta** servem para fundos escuros e materiais impressos.

### Tipografia (sugestão web)
- **Títulos:** sans-serif forte e geométrica — *Poppins* ou *Montserrat* (combina com o
  lettering em caixa-alta da logo "ALYSSON MATOS").
- **Corpo/UI:** *Inter* ou *Jost* (legível, limpa).
- Tom visual: **clínico + esportivo** — clean, com energia, sem ser "academia agressiva".

### Assets a aplicar
- [ ] Logo principal sem fundo → header/hero
- [ ] Versão branca → rodapé / faixas escuras
- [ ] Ícone isolado (`ft perfil 1.png`) → favicon + selo
- [ ] Foto de atendimento (`WhatsApp...07.32.57`) → ótima para hero/seção "como funciona"
- [ ] Foto de perfil (`WhatsApp...07.35.01`) → **está muito escura/azulada**; usar no "Sobre"
      apenas se tratada (clarear/equilibrar), ou pedir foto melhor (ver §9)

---

## 3. ⚠️ Conformidade profissional (CREFITO / COFFITO) — obrigatório antes de publicar

1. **Número do CREFITO visível** (rodapé + seção "Sobre"). Confirmar a região/dígito.
2. **Sem promessa de cura ou de resultado** — vedado pelo Código de Ética do Fisioterapeuta.
   Reescrever frases como "resultado em metade do tempo" → linguagem de **método e proposta**.
3. **Sem sensacionalismo / autopromoção** ("sou o melhor", comparações depreciativas com
   outros profissionais). O diferencial deve ser explicado, não "vendido na marra".
4. **Fotos "antes e depois"** têm regras restritas — só com consentimento e sem caráter
   sensacionalista. Recomendação: **não usar** antes/depois nesta primeira versão.
5. **Depoimentos:** permitidos com cautela (consentimento + sem promessa). Usar prints do
   Instagram só com autorização dos pacientes.

---

## 4. Estrutura do site (one-page com âncoras)

```
- Topo / Hero        → logo + nome + "Fisioterapia que devolve movimento" + CTA WhatsApp
- Diferencial        → abordagem ativa (fortalecimento e prevenção) em 3-4 pilares
- Serviços           → Ortopédica · Esportiva · Domiciliar · Geriátrica (cards)
- Como funciona      → 1) avaliação  2) plano ativo  3) alta com autonomia
- Sobre o Alysson    → história + formação (selos) + CREFITO + foto
- Depoimentos        → carrossel (Instagram / com consentimento)
- Blog / Dicas       → 3 cards mais recentes (ver §5)
- Área de atendimento→ Tangará da Serra e região (mapa/raio — ver §5)
- Contato            → WhatsApp (principal), e-mail, Instagram, horário
- Rodapé             → CREFITO + redes + "Desenvolvido por ismailepereira"
```

---

## 5. Funcionalidades

| Funcionalidade | Decisão do cliente | Implementação |
|----------------|--------------------|---------------|
| Contato/agendamento | **Só WhatsApp** | Botão flutuante + CTAs com mensagem pré-preenchida (`wa.me`) |
| Blog / dicas de saúde | **Sim** | Páginas `blog.html` + `blog-post.html` (modelo Jéssica). Começar com 2-3 posts |
| Google Maps | **Sim** | Atendimento é domiciliar → mostrar **cidade/raio de atendimento**, não endereço fixo |
| Instagram | "Alysson Mattos fisio" | Link + (opcional) feed/depoimentos |
| Domínio próprio | **Não tem** | Recomendar registrar `.com.br` (ex.: `alyssonmatosfisio.com.br`) — ver §9 |

---

## 6. Stack & hospedagem

- **Stack:** HTML5 + CSS (design system em variáveis) + JS puro. Sem framework/build.
- **Formulário → WhatsApp:** sem backend (igual Jéssica) — monta a mensagem e abre o `wa.me`.
- **Hospedagem (recomendada):** **GitHub Pages** + deploy automático (GitHub Actions) a cada push.
  - Grátis, HTTPS, rápido. Domínio próprio aponta para o Pages quando o cliente registrar.
  - Alternativa: Hostinger (FTPS) se o cliente preferir e-mail/hospedagem própria.
- **SEO técnico:** `robots.txt`, `sitemap.xml`, meta tags + Open Graph, dados estruturados
  `LocalBusiness`/`Physiotherapy` (schema.org).

---

## 7. SEO local (Tangará da Serra – MT)

Otimizar para a cidade e a especialidade. Exemplos de termos-alvo:
- "fisioterapeuta em Tangará da Serra"
- "fisioterapia domiciliar Tangará da Serra"
- "fisioterapia esportiva / ortopédica Tangará da Serra MT"
- "fisioterapeuta para idosos Tangará da Serra"

Ações: título e H1 com cidade, seção "área de atendimento", Google Business Profile (recomendar
criar), e os posts de blog mirando dúvidas comuns (dor no joelho, lombar, pós-lesão).

---

## 8. Fases de execução (o roadmap)

| Fase | Entrega | Depende de |
|------|---------|------------|
| **0. Alinhamento** | Aprovar este roadmap + responder pendências (§9) | Cliente |
| **1. Fundação** | Estrutura de pastas, design system (cores/tipos), logo + favicon aplicados | Fase 0 |
| **2. Conteúdo & copy** | Textos de todas as seções, com copy ética (§3) revisada | Fase 1 |
| **3. Build da home** | One-page completa, responsiva, CTA WhatsApp, mapa de área | Fase 2 |
| **4. Blog** | `blog.html` + template de post + 2-3 artigos iniciais | Fase 3 |
| **5. SEO & a11y** | Meta tags, schema, sitemap, acessibilidade, performance | Fase 4 |
| **6. Deploy** | GitHub Pages + Actions; revisão final com o cliente; (domínio quando houver) | Fase 5 |
| **7. Pós-lançamento** | Google Business, orientação de uso, novos posts conforme demanda | Fase 6 |

**Sugestão de ordem de trabalho:** Fases 1→3 entregam um site publicável (MVP);
Fases 4→5 elevam a qualidade; Fase 6 publica.

---

## 9. Pendências / informações que faltam do cliente

- [ ] **Horário de atendimento** (ficou em branco no questionário)
- [ ] **Nome a exibir no site** — confirmar: "Alysson Mattos · Fisioterapeuta" (ele estava em dúvida)
- [ ] **CREFITO** — confirmar número completo e região (formato p/ exibição)
- [ ] **@ do Instagram** (link exato) e se quer exibir feed
- [ ] **Depoimentos** — quais prints podem ser usados (com consentimento dos pacientes)
- [ ] **Área de atendimento** — bairros/raio de Tangará da Serra; atende cidades vizinhas?
- [ ] **Foto de perfil melhor** para o "Sobre" (a atual está escura) — ou autorizo tratar a atual
- [ ] **Domínio** — quer registrar `.com.br`? Qual nome? (recomendado para profissionalismo/SEO)
- [ ] **E-mail profissional** — manter `@hotmail` ou criar com domínio próprio
- [ ] **Valores** — exibir preço ou só "consultar pelo WhatsApp"? (recomendo "consultar")

---

## 10. Decisões a confirmar comigo (recomendações)

1. **One-page vs multi-página:** recomendo **one-page** + blog (mais simples, ótimo para WhatsApp/tráfego).
2. **Hospedagem:** recomendo **GitHub Pages** (grátis, deploy automático) — migrar p/ domínio depois.
3. **Tom do diferencial:** reescrever a vantagem competitiva de forma **ética e confiante** (§3).
```

