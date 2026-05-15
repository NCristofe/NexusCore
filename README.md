# NexusCore

Landing page experimental para um estúdio de experiências digitais. O foco do projeto é fugir do visual institucional genérico e apresentar um serviço de UI/UX com mais presença, movimento e intenção comercial.

## Visão

NexusCore foi desenhado como uma página de venda para serviços de design digital. A interface mistura estética editorial, microinterações e blocos de prova visual para criar uma sensação mais autoral do que uma landing page tradicional.

O objetivo não é apenas informar o visitante. É prender atenção, construir desejo e conduzir para o contato.

## Destaques

- Identidade visual própria em SVG, com símbolo orbital e assinatura de estúdio.
- Hero com composição assimétrica, mockup animado e faixa cinética.
- Seção manifesto com poster visual, chips flutuantes e cards de narrativa.
- Serviços apresentados como argumentos de valor, não como lista burocrática.
- Projetos em formato editorial, com cards alternados, movimento em imagem e CTA contextual.
- CTA final com contraste forte, copy persuasiva e cards flutuantes.
- Layout responsivo com atenção a desktop e mobile.
- Animações em CSS com suporte a `prefers-reduced-motion`.

## Stack

- React 18
- Vite
- Styled Components
- React Router
- ESLint

## Estrutura

```bash
src/
  assets/
    icons/
    img/
  components/
    CallToAction.jsx
    ExperienceLab.jsx
    Footer.jsx
    Header.jsx
    Hero.jsx
    Projects.jsx
    Specialities.jsx
  pages/
    LandingPage.jsx
  global.css
  main.jsx
```

## Rodando Localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Direção de Design

A linguagem visual usa fundo claro, contraste azul/teal, formas deslocadas, grids sutis e elementos com aparência de interface em construção. A intenção é passar a ideia de um estúdio que pensa experiência como produto vivo, não como template pronto.

## Status

Projeto em evolução para portfólio. Próximos pontos interessantes:

- Formulário real de contato.
- Melhorias de SEO e metatags sociais.
- Conteúdo real para cases.
- Testes visuais em múltiplos breakpoints.
- Deploy público.
