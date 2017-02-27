package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import org.openqa.selenium.By;

import java.util.List;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selectors.byId;
import static com.codeborne.selenide.Selectors.byName;
import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.url;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;

public class MyStepdefs {
    @Given("^User navigates to \"([^\"]*)\"$")
    public void userNavigatesTo(String url) throws Throwable {
        open(url);
    }

    @When("^User presses Sign in link with id \"([^\"]*)\"$")
    public void userPressesSignInLink(String signIn) throws Throwable {
        $(byId(signIn)).click();
    }

//    @Then("^Login page url \"([^\"]*)\" opens$")
//    public void loginPageUrlOpens(String url) throws Throwable {
//        assertThat(url(), containsString(url));
//    }

    @Given("^User navigates to the login page \"([^\"]*)\"$")
    public void userNavigatesToTheLoginPage(String url) throws Throwable {
        open(url);
    }

    @When("^User enters following credentials:$")
    public void userEntersFollowingCredentials(DataTable table) throws Throwable {
        List<List<String>> data = table.raw();

        $(By.id(data.get(0).get(0))).setValue(data.get(1).get(0));
        $(By.id(data.get(0).get(1))).setValue(data.get(1).get(1));
    }

    @And("^User presses button with name \"([^\"]*)\"$")
    public void userPressesButton(String submit) throws Throwable {
        $(byName(submit)).shouldBe(visible).click();
    }

//    @Then("^Page with url \"([^\"]*)\" opens$")
//    public void pageWithUrlOpens(String url) throws Throwable {
//        assertThat(url(), containsString(url));
//    }

    @Given("^Administrator is on the \"([^\"]*)\" page logged in from \"([^\"]*)\" using \"([^\"]*)\" with:$")
    public void administratorIsLoggedInFromPageUsingWith(String main, String url, String submit, DataTable table) throws Throwable {
        open(url);

        List<List<String>> data = table.raw();
        $(By.id(data.get(0).get(0))).setValue(data.get(1).get(0));
        $(By.id(data.get(0).get(1))).setValue(data.get(1).get(1));

        $(byName(submit)).shouldBe(visible).click();
    }

    @When("^User presses \"([^\"]*)\" link$")
    public void userPressesLink(String link) throws Throwable {
        $(byText(link)).click();
    }
//
//    @Then("^Appropriate page \"([^\"]*)\" opens$")
//    public void appropriatePageOpensContainingUserId(String url) throws Throwable {
//        assertThat(url(), containsString(url));
//    }

    @And("^Page contains correct userName \"([^\"]*)\"$")
    public void pageContainsCorrectUserName(String userName) throws Throwable {
        assertThat($(byText(userName)).toString(), containsString(userName));
    }

    @And("^page contains correct firstName \"([^\"]*)\"$")
    public void pageContainsCorrectFirstName(String firstName) throws Throwable {
        assertThat($(byText(firstName)).toString(), containsString(firstName));
    }

    @And("^page contains correct lastName \"([^\"]*)\"$")
    public void pageContainsCorrectLastName(String lastName) throws Throwable {
        assertThat($(byText(lastName)).toString(), containsString(lastName));
    }

    @When("^User presses \"([^\"]*)\" link having id \"([^\"]*)\" on the on the left menu bar$")
    public void userPressesLinkHavingIdOnTheOnTheLeftMenuBar(String title, String id) throws Throwable {
        $(byId(id)).click();
    }

    @Then("^Page with URL \"([^\"]*)\" opens$")
    public void pageWithURLOpens(String url) throws Throwable {
        assertThat(url(), containsString(url));
    }
}