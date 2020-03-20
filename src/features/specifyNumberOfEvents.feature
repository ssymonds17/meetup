Feature: Specify number of events

Scenario: When the user hasn't specified a number, 32 is the default number
Given the user has opened the app
When the user hasn't specified a number of results
Then the number of event results is set at 32

Scenario: User can change the number of events that they want to see
Given user has opened the app
When the user sets a number of desired event results
Then the specified number of even results are displayed