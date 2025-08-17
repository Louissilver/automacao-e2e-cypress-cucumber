import js from "@eslint/js";
import globals from "globals";
import cypress from "eslint-plugin-cypress";

export default [
  {
    // Regras gerais JS
    ...js.configs.recommended,
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
  },
  {
    // Regras Cypress
    ...cypress.configs.recommended,
    files: ["cypress/**/*.{js,mjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        cy: "readonly",
        Cypress: "readonly",
        expect: "readonly",
        assert: "readonly",
      },
    },
  },
];
