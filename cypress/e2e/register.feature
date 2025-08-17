@regressive

Feature: Register Feature
  As a user
  I want to register on the application
  So that I can access the features of the application

  Background:
    Given I access the application
    And I access the "Register" page

  Scenario: Successful registration
    When I fill in the registration form with valid data
    Then I should see a success message