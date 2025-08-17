// Import commands.js using ES2015 syntax:
import "./commands";

// === Viewport global em todo teste ===
beforeEach(() => {
  const preset = Cypress.env("VIEWPORT");
  const orientation = Cypress.env("ORIENTATION") || "portrait";
  const width = Number(Cypress.env("VIEWPORT_WIDTH")) || 1366;
  const height = Number(Cypress.env("VIEWPORT_HEIGHT")) || 768;

  if (preset) {
    cy.viewport(preset, orientation);
  } else {
    cy.viewport(width, height);
  }
});

const app = window.top;
if (!app.document.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML = ".command-name-request, .command-name-xhr {display: none}";
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
