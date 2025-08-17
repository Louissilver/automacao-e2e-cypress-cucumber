import registerElements from "../elements/registerElements";

class RegisterPage {
  accessPage(page) {
    cy.get(registerElements.registerButton()).should("be.visible");
    cy.get(registerElements.registerButton()).click();
    cy.url().should("include", page);
    cy.get(registerElements.registerPageHeader()).should("contain.text", page);
  }
}

export default new RegisterPage();
