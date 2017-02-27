$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adminLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Administrator login and access to administrator pages",
  "description": "",
  "id": "administrator-login-and-access-to-administrator-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@adminlogin"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login page opens correctly",
  "description": "",
  "id": "administrator-login-and-access-to-administrator-pages;login-page-opens-correctly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"http://demo.testfire.net/default.aspx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User presses Sign in link with id \"_ctl0__ctl0_LoginLink\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login page url \"http://demo.testfire.net/bank/login.aspx\" opens",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/default.aspx",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userNavigatesTo(String)"
});
formatter.result({
  "duration": 7906461691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_ctl0__ctl0_LoginLink",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.userPressesSignInLink(String)"
});
formatter.result({
  "duration": 1211784408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/bank/login.aspx",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.loginPageUrlOpens(String)"
});
formatter.result({
  "duration": 157402508,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Admin could login successfully",
  "description": "",
  "id": "administrator-login-and-access-to-administrator-pages;admin-could-login-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User navigates to the login page \"http://demo.testfire.net/bank/login.aspx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters following credentials:",
  "rows": [
    {
      "cells": [
        "uid",
        "passw"
      ],
      "line": 12
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User presses button with name \"btnSubmit\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Page with url \"http://demo.testfire.net/bank/main.aspx\" opens",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/bank/login.aspx",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.userNavigatesToTheLoginPage(String)"
});
formatter.result({
  "duration": 402132261,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersFollowingCredentials(DataTable)"
});
formatter.result({
  "duration": 1105179026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btnSubmit",
      "offset": 31
    }
  ],
  "location": "MyStepdefs.userPressesButton(String)"
});
formatter.result({
  "duration": 1283192498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/bank/main.aspx",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.pageWithUrlOpens(String)"
});
formatter.result({
  "duration": 90247103,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "\"View Application Values\" page is accessible and correct",
  "description": "",
  "id": "administrator-login-and-access-to-administrator-pages;\"view-application-values\"-page-is-accessible-and-correct",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Administrator is on the \"main\" page logged in from \"http://demo.testfire.net/bank/login.aspx\" using \"btnSubmit\" with:",
  "rows": [
    {
      "cells": [
        "uid",
        "passw"
      ],
      "line": 19
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User presses \"View Application Values\" link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Appropriate page \"http://demo.testfire.net/admin/application.aspx\" opens",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Page contains correct userName \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "page contains correct firstName \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "page contains correct lastName \"User\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "main",
      "offset": 25
    },
    {
      "val": "http://demo.testfire.net/bank/login.aspx",
      "offset": 52
    },
    {
      "val": "btnSubmit",
      "offset": 101
    }
  ],
  "location": "MyStepdefs.administratorIsLoggedInFromPageUsingWith(String,String,String,DataTable)"
});
formatter.result({
  "duration": 2342358849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View Application Values",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userPressesLink(String)"
});
formatter.result({
  "duration": 831123330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/admin/application.aspx",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.appropriatePageOpensContainingUserId(String)"
});
formatter.result({
  "duration": 70733502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.pageContainsCorrectUserName(String)"
});
formatter.result({
  "duration": 405707384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.pageContainsCorrectFirstName(String)"
});
formatter.result({
  "duration": 168337354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.pageContainsCorrectLastName(String)"
});
formatter.result({
  "duration": 449235567,
  "status": "passed"
});
formatter.uri("homePageLinks.feature");
formatter.feature({
  "line": 2,
  "name": "Homepage links function correctly",
  "description": "",
  "id": "homepage-links-function-correctly",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@homelinks"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Personal information page opens correctly",
  "description": "",
  "id": "homepage-links-function-correctly;personal-information-page-opens-correctly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigates to \"http://demo.testfire.net/default.aspx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User presses \"PERSONAL\" link having id \"_ctl0__ctl0_Content_CatLink1\" on the on the left menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Page with URL \"http://demo.testfire.net/default.aspx?content\u003dpersonal.htm\" opens",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/default.aspx",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userNavigatesTo(String)"
});
formatter.result({
  "duration": 433105542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PERSONAL",
      "offset": 14
    },
    {
      "val": "_ctl0__ctl0_Content_CatLink1",
      "offset": 40
    }
  ],
  "location": "MyStepdefs.userPressesLinkHavingIdOnTheOnTheLeftMenuBar(String,String)"
});
formatter.result({
  "duration": 895661799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/default.aspx?content\u003dpersonal.htm",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.pageWithURLOpens(String)"
});
formatter.result({
  "duration": 39367911,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Deposit Products page opens correctly",
  "description": "",
  "id": "homepage-links-function-correctly;deposit-products-page-opens-correctly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User navigates to \"http://demo.testfire.net/default.aspx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User presses \"Deposit Product\" link having id \"_ctl0__ctl0_Content_MenuHyperLink1\" on the on the left menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Page with URL \"http://demo.testfire.net/default.aspx?content\u003dpersonal_deposit.htm\" opens",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/default.aspx",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userNavigatesTo(String)"
});
formatter.result({
  "duration": 436632243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Product",
      "offset": 14
    },
    {
      "val": "_ctl0__ctl0_Content_MenuHyperLink1",
      "offset": 47
    }
  ],
  "location": "MyStepdefs.userPressesLinkHavingIdOnTheOnTheLeftMenuBar(String,String)"
});
formatter.result({
  "duration": 1128021570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/default.aspx?content\u003dpersonal_deposit.htm",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.pageWithURLOpens(String)"
});
formatter.result({
  "duration": 34304622,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Checking page opens correctly",
  "description": "",
  "id": "homepage-links-function-correctly;checking-page-opens-correctly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User navigates to \"http://demo.testfire.net/default.aspx\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User presses \"Checking\" link having id \"_ctl0__ctl0_Content_MenuHyperLink2\" on the on the left menu bar",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Page with URL \"http://demo.testfire.net/default.aspx?content\u003dpersonal_checking.htm\" opens",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/default.aspx",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.userNavigatesTo(String)"
});
formatter.result({
  "duration": 510916519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 14
    },
    {
      "val": "_ctl0__ctl0_Content_MenuHyperLink2",
      "offset": 40
    }
  ],
  "location": "MyStepdefs.userPressesLinkHavingIdOnTheOnTheLeftMenuBar(String,String)"
});
formatter.result({
  "duration": 745371165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.testfire.net/default.aspx?content\u003dpersonal_checking.htm",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.pageWithURLOpens(String)"
});
formatter.result({
  "duration": 36167645,
  "status": "passed"
});
});