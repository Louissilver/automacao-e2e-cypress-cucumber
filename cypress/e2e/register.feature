@regressive

Feature: Register Feature
  As a user
  I want to register on the application
  So that I can access the features of the application

  Background:
    Given I access the application

  Scenario: Validate register form labels
    When I view the registration form
    Then all required fields should be visible

  Scenario: Successful registration
    When I view the registration form
    And I fill in the registration form with valid data
    Then I should see a success message