Feature: Show or hide event details

Scenario: An event element is collapsed by default
Given the user has opened the app
When the user has not specified a particular event
Then the details for that (and all) events should be hidden

Scenario: User can expand an event to see its details
Given user has opened the app
When the user specifies a particular event
Then the details for that event will be displayed

Scenario: User can collapse an event to hide its details
Given the user has opened the app
And the event details are already showing
When the user chooses to collapse the information for that event
Then the details for that event will be hidden