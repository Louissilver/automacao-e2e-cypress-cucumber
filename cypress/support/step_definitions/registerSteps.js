import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../pages/registerPage";
import { registerInformation } from "../factories/registerInformation";

const random = () => Math.floor(Math.random() * 1e6);
const validEmail = () => `user_${Date.now()}_${random()}@example.com`;

Given("I access the application", () => {
  RegisterPage.openBase();
});

Given("I access the {string} page", (pageName) => {
  if (pageName.toLowerCase() === "register") {
    RegisterPage.goToRegister();
  } else {
    throw new Error(`Unknown page: ${pageName}`);
  }
});

When("I view the registration form", () => {
  RegisterPage.goToRegister();
});

Then("all required fields should be visible", () => {
  RegisterPage.checkFieldsVisible();
});

When("I fill in the registration form with valid data", () => {
  RegisterPage.fillForm(registerInformation);
  RegisterPage.submit();
});

Then("I should see a success message", () => {
  RegisterPage.assertSuccess();
});
