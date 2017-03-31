@homelinks
Feature: Homepage links function correctly

  Scenario: Personal information page opens correctly
    Given User navigates to "http://demo.testfire.net/default.aspx"
    When User presses "PERSONAL" link having id "_ctl0__ctl0_Content_CatLink1" on the on the left menu bar
    Then Page with URL "http://demo.testfire.net/default.aspx?content=personal.htm" opens

  Scenario: Deposit Products page opens correctly
    Given User navigates to "http://demo.testfire.net/default.aspx"
    When User presses "Deposit Product" link having id "_ctl0__ctl0_Content_MenuHyperLink1" on the on the left menu bar
    Then Page with URL "http://demo.testfire.net/default.aspx?content=personal_deposit.htm" opens

  Scenario: Checking page opens correctly
    Given User navigates to "http://demo.testfire.net/default.aspx"
    When User presses "Checking" link having id "_ctl0__ctl0_Content_MenuHyperLink2" on the on the left menu bar
    Then Page with URL "http://demo.testfire.net/default.aspx?content=personal_checking.htm" opens

