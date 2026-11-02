# Vitrine de Produtos – React + TypeScript

Projeto desenvolvido como resposta ao teste técnico: uma página em **React** e **TypeScript** que monta uma vitrine de produtos a partir de um arquivo JSON e exibe os detalhes de cada produto em um modal, seguindo o layout do Figma.

## O que foi feito

- **Página em React e TypeScript:** interface construída conforme o layout do Figma, respeitando espaçamentos, tamanhos de fonte, cores e botões (pixel a pixel).
- **Vitrine de produtos:** os produtos são carregados do JSON fornecido no teste e exibidos em cards na vitrine.
- **Modal de produto:** ao clicar em um produto, abre-se um modal com as principais informações dele, de acordo com o item selecionado e com o layout proposto.
- **Pré-processador:** estilos escritos em **Sass** (arquivos `.scss`).
- **Sem bibliotecas de UI:** não foram utilizados Bootstrap, Foundation ou similares. Toda a estilização foi feita manualmente.

## Tecnologias

- React
- TypeScript
- Sass (SCSS)

## Estrutura sugerida

```
src/
├── components/
│   ├── ProductCard/
│   ├── ProductList/
│   └── ProductModal/
├── styles/
├── types/
├── App.tsx
└── main.tsx (ou index.tsx)
```

## Requisitos do teste atendidos

- [x] Página em React e TypeScript conforme o layout do Figma
- [x] Vitrine de produtos consumindo o JSON
- [x] Modal com as informações do produto ao clicar
- [x] Pré-processador Sass
- [x] Layout fiel ao design (fontes, cores e botões)
- [x] Nenhuma biblioteca de UI utilizada
