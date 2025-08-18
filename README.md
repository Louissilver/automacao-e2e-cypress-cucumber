# Automação E2E com Cypress

[![Status de Testes](https://github.com/Louissilver/automacao-e2e-cypress-cucumber/actions/workflows/cypress-e2e.yml/badge.svg)](https://github.com/Louissilver/automacao-e2e-cypress-cucumber/actions)
[![GitHub last commit](https://img.shields.io/github/last-commit/Louissilver/automacao-e2e-cypress-cucumber)](https://github.com/Louissilver/automacao-e2e-cypress-cucumber/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/Louissilver/automacao-e2e-cypress-cucumber)](https://github.com/Louissilver/automacao-e2e-cypress-cucumber/issues)
[![GitHub forks](https://img.shields.io/github/forks/Louissilver/automacao-e2e-cypress-cucumber?style=social)](https://github.com/Louissilver/automacao-e2e-cypress-cucumber/network/members)
[![GitHub stars](https://img.shields.io/github/stars/Louissilver/automacao-e2e-cypress-cucumber?style=social)](https://github.com/Louissilver/automacao-e2e-cypress-cucumber/stargazers)
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://github.com/Louissilver/automacao-e2e-cypress-cucumber)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

## Índice

- [Configuração de Ambiente (.env)](#configuração-de-ambiente-env)
- [Principais Pacotes](#principais-pacotes)
- [Execução em Pipeline (CI/CD)](#execução-em-pipeline-cicd)
- [Scripts de Relatório](#scripts-de-relatório)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Como Executar os Testes](#como-executar-os-testes)
- [Como Usar](#como-usar)
- [Adaptação](#adaptação)

## Configuração de Ambiente (.env)

Este projeto utiliza o pacote `dotenv` para carregar variáveis de ambiente dos arquivos `.env`.
**Antes de executar os testes, é necessário rodar os comandos abaixo para garantir que o ambiente esteja configurado corretamente:**

```powershell
npm run preinstall
npm run prepare
```

### Quais arquivos .env criar e exemplos de valores

Crie os seguintes arquivos na raiz do projeto:

- `.env`

Cada arquivo pode conter variáveis específicas para o ambiente de execução ou informações sensíveis do ambiente. Exemplos:

#### .env

```env
USER_PASSWORD=123456
```

Adicione outras variáveis conforme a necessidade do seu projeto, como tokens, credenciais de teste, etc.

## Principais Pacotes

- **Cypress**: Framework principal para automação de testes E2E.
- **@badeball/cypress-cucumber-preprocessor**: Permite escrever cenários de teste em Gherkin e integrá-los ao Cypress.
- **eslint**: Ferramenta para padronização e análise de código JavaScript.

## Execução em Pipeline (CI/CD)

Este projeto possui integração pronta para execução dos testes em pipelines do GitHub Actions. O workflow está localizado em `.github/workflows/cypress-e2e.yml`.

### Como funciona o pipeline

- Executa os testes E2E em ambiente Ubuntu.
- Permite escolher o alvo de execução (`desktop` ou `mobile`) manualmente ou via push/pull request.
- Instala dependências, prepara o ambiente e executa os testes conforme o alvo.
- Gera relatórios HTML dos testes após a execução.
- Disponibiliza artefatos dos testes (vídeos, screenshots, downloads, resultados e relatórios HTML) para download na interface do GitHub Actions.

### Como acessar os relatórios

Após a execução do pipeline, acesse a aba **Actions** do GitHub, selecione o workflow executado e faça download dos artefatos:

- **cypress-videos-\***: vídeos dos testes.
- **cypress-screenshots-\***: screenshots dos testes.
- **cypress-downloads-\***: arquivos baixados durante os testes.
- **test-results-\***: resultados e relatórios dos testes.
- **html-report-\***: relatório HTML gerado pelo comando `npm run report`.

## Scripts de Relatório

O comando `npm run report` é responsável por gerar o relatório HTML dos testes. Certifique-se de que este script está configurado no `package.json` e que o relatório é gerado na pasta `reports/`.

Exemplo de configuração no `package.json`:

```json
"scripts": {
  ...existing code...
  "report": "cypress-mochawesome-reporter --reportDir reports"
}
```

## Estrutura do Projeto

```
cypress.config.js           # Configuração do Cypress
eslint.config.mjs           # Configuração do ESLint
package.json                # Dependências e scripts do projeto
cypress/
  downloads/                # Arquivos baixados durante os testes
  e2e/                      # Features e cenários de teste
    register.feature        # Exemplo de feature em Gherkin
  support/
    commands.js             # Comandos customizados do Cypress
    e2e.js                  # Configurações adicionais
    reporter-config.json    # Configuração de relatórios
    elements/               # Elementos de página
    factories/              # Fábricas de dados
    messages/               # Mensagens utilizadas nos testes
    modules/                # Módulos auxiliares
    pages/                  # Page Objects
      registerPage.js       # Exemplo de Page Object
    step_definitions/       # Definições dos passos dos cenários
      registerSteps.js      # Exemplo de definição de passos
  test-results/             # Resultados dos testes
```

## Instalação

1. Clone o repositório:
   ```powershell
   git clone https://github.com/Louissilver/automacao-e2e-cypress-cucumber
   cd automacao-e2e-cypress-cucumber
   ```
2. Instale as dependências:

   ```powershell
   npm install
   ```

3. Prepare o ambiente:
   ```powershell
   npm run preinstall
   npm run prepare
   ```

## Como Executar os Testes

Para garantir que os testes utilizem as variáveis corretas de ambiente (como `VIEWPORT`), utilize sempre os comandos definidos no `package.json`:

- Para executar os testes em modo desktop:
  ```powershell
  npm run open:desktop
  # ou
  npm run run:desktop
  ```
- Para executar os testes em modo mobile:
  ```powershell
  npm run open:mobile
  # ou
  npm run run:mobile
  ```

> **Atenção:**
> Se você executar comandos simples como `npx cypress open` ou `npx cypress run`, o Cypress não irá carregar as variáveis dos arquivos `.env`.
> Nesse caso, a configuração será definida pelo valor padrão do `cypress.config.js` e pode não ser a configuração correta da aplicação.

## Como Usar

1. Escreva seus cenários em arquivos `.feature` dentro de `cypress/e2e/`.
2. Implemente os passos em arquivos dentro de `cypress/support/step_definitions/`.
3. Utilize Page Objects em `cypress/support/pages/` para organizar interações com a interface.
4. Execute os testes conforme instruções acima.

## Adaptação

Este modelo pode ser facilmente adaptado para diferentes aplicações web, bastando criar novos cenários, passos e page objects conforme a necessidade do projeto.

---

Para dúvidas ou sugestões, contribua via issues ou pull requests.
