package steps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.openqa.selenium.By;

import java.util.List;

import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selectors.*;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.url;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;

public class MyStepdefs {
    String loginUrl="http://demo.testfire.net/bank/login.aspx";
    String btnSubmit="btnSubmit";

    String personal = "_ctl0__ctl0_Content_CatLink1";
    String depositProduct = "_ctl0__ctl0_Content_MenuHyperLink1";
    String checking = "_ctl0__ctl0_Content_MenuHyperLink2";

    @Given("^User navigates to \"([^\"]*)\"$")
    public void userNavigatesTo(String url) throws Throwable {
        open(url);
    }

    @When("^User presses Sign in link with id \"([^\"]*)\"$")
    public void userPressesSignInLink(String signIn) throws Throwable {
        $(byId(signIn)).click();
    }

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

    @Given("^Administrator is logged in with credentials:$")
    public void administratorIsLoggedInFromPageUsingWith(DataTable table) throws Throwable {
        open(loginUrl);

        List<List<String>> data = table.raw();
        $(By.id(data.get(0).get(0))).setValue(data.get(1).get(0));
        $(By.id(data.get(0).get(1))).setValue(data.get(1).get(1));

        $(byName(btnSubmit)).shouldBe(visible).click();
    }

    @When("^User presses \"([^\"]*)\" link$")
    public void userPressesLink(String link) throws Throwable {
        $(byText(link)).click();
    }

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

    @When("^User presses 'PERSONAL' link on the on the left menu bar$")
    public void userPressesLinkWithIdOnTheOnTheLeftMenuBar() throws Throwable {
        $(byId(personal)).click();
    }

    @Then("^Page with URL \"([^\"]*)\" opens$")
    public void pageWithURLOpens(String url) throws Throwable {
        assertThat(url(), containsString(url));
    }

    @When("^User presses 'Deposit Product' link on the on the left menu bar$")
    public void userPressesDepositProductLinkOnTheOnTheLeftMenuBar() throws Throwable {
        $(byId(depositProduct)).click();
    }

    @When("^User presses 'Checking' link on the on the left menu bar$")
    public void userPressesCheckingLinkOnTheOnTheLeftMenuBar() throws Throwable {
        $(byId(checking)).click();
    }
}
