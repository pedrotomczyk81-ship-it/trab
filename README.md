# GameHub

Catálogo web responsivo de jogos eletrônicos, desenvolvido em Angular. A aplicação permite explorar jogos, consultar detalhes, buscar por nome, filtrar por categoria e cadastrar novos títulos. Os dados são mantidos em memória por um serviço compartilhado, sem backend ou banco de dados.

## Funcionalidades

- Página inicial com destaques e indicadores dinâmicos de jogos totais e gratuitos.
- Catálogo com oito jogos iniciais, busca, filtro por categoria e estado vazio.
- Página de detalhes por ID, incluindo tratamento para jogo inexistente.
- Cadastro com validações para nome, preço não negativo e avaliação entre 0 e 5.
- Página Sobre com descrição do projeto e tecnologias.
- Navegação por Angular Router e redirecionamento de rotas não encontradas.

## Tecnologias

Angular standalone, TypeScript, Angular Router, formulários template-driven (`ngModel`) e CSS responsivo. O controle de fluxo utiliza `@if`, `@for` e `@switch`.

## Executar localmente

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm start
```

A aplicação fica disponível em `http://localhost:4200`. Para validar a compilação de produção:

```bash
npm run build
```

Os dados cadastrados existem apenas em memória e são reiniciados ao recarregar a aplicação. Substitua os campos de aluno(a) e disciplina na página Sobre antes da entrega.
"# trab"  
"# trab"  
