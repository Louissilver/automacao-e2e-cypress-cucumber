# Automação E2E com Cypress

Este projeto é um modelo padrão para automação de testes end-to-end (E2E) utilizando o Cypress, com suporte ao Cucumber para escrita de cenários em Gherkin. Ele pode ser adaptado para qualquer tipo de aplicação web.

## Configuração de Ambiente (.env)

Este projeto utiliza o pacote `dotenv` para carregar variáveis de ambiente dos arquivos `.env`, `.env.desktop` e `.env.mobile`.
**Antes de executar os testes, é necessário rodar os comandos abaixo para garantir que o ambiente esteja configurado corretamente:**

```powershell
npm run preinstall
npm run prepare
```

### Quais arquivos .env criar e exemplos de valores

Crie os seguintes arquivos na raiz do projeto:

- `.env`
- `.env.desktop`
- `.env.mobile`

Cada arquivo pode conter variáveis específicas para o ambiente de execução. Exemplos:

#### .env

```env
BASE_URL=https://demo.automationtesting.in
```

#### .env.desktop

```env
VIEWPORT=macbook-15
VIEWPORT_WIDTH=1440
VIEWPORT_HEIGHT=900
```

#### .env.mobile

```env
VIEWPORT=iphone-6+
VIEWPORT_WIDTH=410
VIEWPORT_HEIGHT=900
```

Adicione outras variáveis conforme a necessidade do seu projeto, como tokens, credenciais de teste, etc.

## Principais Pacotes

- **Cypress**: Framework principal para automação de testes E2E.
- **@badeball/cypress-cucumber-preprocessor**: Permite escrever cenários de teste em Gherkin e integrá-los ao Cypress.
- **eslint**: Ferramenta para padronização e análise de código JavaScript.

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

Para garantir que os testes utilizem as variáveis corretas de ambiente (como `BASE_URL`), utilize sempre os comandos definidos no `package.json`:

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
> Nesse caso, a configuração de `baseUrl` será definida pelo valor padrão do `cypress.config.js`, que aponta para `http://localhost:3000` e pode não ser o endereço correto da aplicação.

## Como Usar

1. Escreva seus cenários em arquivos `.feature` dentro de `cypress/e2e/`.
2. Implemente os passos em arquivos dentro de `cypress/support/step_definitions/`.
3. Utilize Page Objects em `cypress/support/pages/` para organizar interações com a interface.
4. Execute os testes conforme instruções acima.

## Adaptação

Este modelo pode ser facilmente adaptado para diferentes aplicações web, bastando criar novos cenários, passos e page objects conforme a necessidade do projeto.

---

Para dúvidas ou sugestões, contribua via issues ou pull requests.
