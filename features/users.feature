Feature: Users

    Scenario: Create user successfully
        Given I want to register a user
        When I submit a request to register it
        Then Should return that user was successfully created