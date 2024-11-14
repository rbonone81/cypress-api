# cypress-api
Projeto de automação de testes de API utilizando Cypress.
Feita a validação diferentes métodos HTTP (GET, POST, PUT, DELETE) em uma API de teste bem simples para manipulação de postagens (https://jsonplaceholder.typicode.com/posts).
Geração de relatórios HTML e XML.
Integração com Gifthub Actions para CI e armazenamento de artefatos.

## Pré-requisitos
- Node JS

## Dependências
- Cypress: 13.15.2
- Cypress Plugin API:2.11.2
- Cypress Multi Reporters: 2.2.1
- Mochawesome Reporter: 3.6.1
- Mocha Junit Reporter: 2.0.4

## Instalação
Instale cypress-api com npm.

```bash
  cd cypress-api
  npm install
```

## Rodando os testes
Para rodar os testes utilize o seguinte comando.

```bash
  npx cypress run
```
## Relatório dos testes
.reports/html
.reports/junit