# BTD6 Thumbnail Generator

Gerador de thumbnails para Bloons TD 6 (BTD6). Crie capas para vídeos do YouTube com facilidade, selecionando mapas de fundo, macacos/heróis (com suporte a todas as rotas e tiers), títulos, datas, números de rota (caminho) e logos personalizadas.

Originado a partir da criação de [Alisson Nunes no CodePen](https://codepen.io/Alynva/pen/LEbOVNy).

## Recursos

- **Planos de Fundo (Mapas)**: 86 mapas organizados por dificuldade, com armazenamento local.
- **Personagens (Torres e Heróis)**: 536 imagens com todas as ramificações e tiers.
- **Edição em Tempo Real**: Altere título, data e caminho (ex: 0-0-0) com pré-visualização instantânea no `<canvas>`.
- **Upload de Logo**: Suporte para carregar logo ou imagem personalizada.
- **Exportação Rápida**: Botões para Copiar (área de transferência) e Baixar imagem em formato PNG full resolution (1280x720).
- **Armazenamento 100% Local**: Todas as imagens estão baixadas no repositório, garantindo velocidade máxima e eliminando problemas de CORS no canvas.

## Como Executar Localmente

Como é uma aplicação web puramente estática (HTML/CSS/JS), você pode abrir diretamente com qualquer servidor estático HTTP:

```bash
# Com Python
python -m http.server 8000

# Ou com npx serve / live-server
npx serve
```

Depois acesse `http://localhost:8000`.

## Deploy no GitHub Pages

O repositório está configurado para deploy automático no GitHub Pages através do GitHub Actions (veja `.github/workflows/deploy.yml`).

Para ativar:
1. Acesse o repositório no GitHub: **Settings** > **Pages**.
2. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
3. A cada push na branch `main`, a página será atualizada automaticamente.

## Licença

[MIT](LICENSE.txt) © Alisson Nunes
