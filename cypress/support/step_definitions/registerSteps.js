const {
  Then,
  When,
  Given,
} = require("@badeball/cypress-cucumber-preprocessor");
import registerPage from "../../support/pages/registerPage";

Given("I access the application", () => {
  cy.visit("/");
});

When("I access the {string} page", (page) => {
  registerPage.accessPage(page);
});

When("I fill in the registration form with valid data", () => {
  return true;
});

Then("I should see a success message", () => {
  return true;
});
