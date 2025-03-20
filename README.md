# Desafio Técnico Nuclea

Este repositório contém a solução para o desafio técnico proposto pela empresa Nuclea. O projeto implementa testes automatizados utilizando Cypress para validar o comportamento de uma aplicação web.

## Estrutura do Projeto

```
TESTE TECNICO NUCLEA/
├── cypress/
│   ├── e2e/
│   │   ├── CarregamentoDesempenho/
│   │   │   └── diferentesNavegadores.spec.cy.js
│   │   ├── Menu de Navegação/
│   │   │   └── navegacaoCategorias.spec.cy.js
│   │   └── Sugestão de pesquisa/
│   │       ├── palavrasIncompletas.spec.cy.js
│   │       └── termoValido.spec.cy.js
│   ├── fixtures/
│   └── support/
├── node_modules/
├── cypress.config.js
├── package-lock.json
└── package.json
```

## Descrição dos Testes

### Carregamento e Desempenho
- **diferentesNavegadores.spec.cy.js**: Testes para verificar o comportamento da aplicação em diferentes navegadores, garantindo compatibilidade cross-browser.

### Menu de Navegação
- **navegacaoCategorias.spec.cy.js**: Testes para validar o funcionamento correto das funcionalidades de navegação por categorias.

### Sugestão de Pesquisa
- **palavrasIncompletas.spec.cy.js**: Testes para validar o comportamento da aplicação quando são inseridos termos de pesquisa incompletos.
- **termoValido.spec.cy.js**: Testes para validar o comportamento da aplicação quando são inseridos termos de pesquisa válidos.

## Requisitos

- Node.js (versão recomendada: 16.x ou superior)
- NPM ou Yarn

## Instalação

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/teste-tecnico-nuclea.git
cd teste-tecnico-nuclea
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## Executando os Testes

### Modo Headless
Para executar todos os testes em modo headless:
```bash
npx cypress run
```

### Modo Interativo
Para abrir o Cypress em modo interativo:
```bash
npx cypress open
```

## Relatórios

Os relatórios de testes são gerados automaticamente após a execução dos testes em modo headless. Eles podem ser encontrados na pasta `cypress/reports`.

## Cenários Testados

### Carregamento e Desempenho
- Verificação do tempo de carregamento da página principal
- Comportamento em diferentes navegadores (Chrome, Firefox, Edge)
- Desempenho em diferentes condições de rede

### Menu de Navegação
- Navegação entre diferentes categorias
- Verificação da exibição correta dos sub-menus
- Validação dos links e redirecionamentos

### Sugestão de Pesquisa
- Verificação de sugestões para termos de pesquisa incompletos
- Validação dos resultados para termos de pesquisa válidos
- Comportamento da aplicação para pesquisas com resultados vazios

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- JavaScript - Linguagem de programação utilizada
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript

## Boas Práticas Adotadas

- Uso de Page Objects para melhor organização do código
- Separação dos testes por funcionalidade
- Implementação de testes que verificam aspectos visuais e funcionais
- Uso de fixtures para dados de teste
- Verificações de acessibilidade

## Autor

Nicolas Andrade - QA SR
