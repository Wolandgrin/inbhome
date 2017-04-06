@homelinks
Feature: Homepage links function correctly

  Scenario: Personal information page opens correctly
    Given User navigates to "http://demo.testfire.net/default.aspx"
    When User presses 'PERSONAL' link on the on the left menu bar
    Then Page with URL "http://demo.testfire.net/default.aspx?content=personal.htm" opens

  Scenario: Deposit Products page opens correctly
    Given User navigates to "http://demo.testfire.net/default.aspx"
    When User presses 'Deposit Product' link on the on the left menu bar
    Then Page with URL "http://demo.testfire.net/default.aspx?content=personal_deposit.htm" opens

  Scenario: Checking page opens correctly
    Given User navigates to "http://demo.testfire.net/default.aspx"
    When User presses 'Checking' link on the on the left menu bar
    Then Page with URL "http://demo.testfire.net/default.aspx?content=personal_checking.htm" opens

