import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../pages/registerPage";
import { registerInformation } from "../factories/registerInformation";

Given("I access the application", () => {
  RegisterPage.openBase();
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
