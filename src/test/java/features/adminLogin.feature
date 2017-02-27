@adminlogin
Feature: Administrator login and access to administrator pages

  Scenario: Login page opens correctly
    Given User navigates to "http://demo.testfire.net/default.aspx"
    When User presses Sign in link with id "_ctl0__ctl0_LoginLink"
    Then Page with URL "http://demo.testfire.net/bank/login.aspx" opens

  Scenario: Admin could login successfully
    Given User navigates to the login page "http://demo.testfire.net/bank/login.aspx"
    When User enters following credentials:
      | uid   | passw |
      | admin | admin |
    And User presses button with name "btnSubmit"
    Then Page with URL "http://demo.testfire.net/bank/main.aspx" opens

  Scenario: "View Application Values" page is accessible and correct
    Given Administrator is on the "main" page logged in from "http://demo.testfire.net/bank/login.aspx" using "btnSubmit" with:
      | uid   | passw |
      | admin | admin |
    When User presses "View Application Values" link
    Then Page with URL "http://demo.testfire.net/admin/application.aspx" opens
    And Page contains correct userName "admin"
    And page contains correct firstName "admin"
    And page contains correct lastName "User"