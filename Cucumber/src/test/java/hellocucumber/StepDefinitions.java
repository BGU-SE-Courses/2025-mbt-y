package hellocucumber;

import io.cucumber.java.en.*;

import org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

public class StepDefinitions {
    private static opencartActuator opencartUser;
    private static opencartActuatorAdmin opencartManager;
    private String webDriver = "webdriver.chrome.driver";
    private String path = "C:\\project41\\2025-mbt-y\\Selenium\\chromedriver.exe";
    public void OpenCartInitUser() {
        System.out.println("--------------- INITIALIZING OPENCART TEST - OPENING WEBPAGE ---------------");
        opencartUser = new opencartActuator();
        opencartUser.initSessionAsUser(webDriver, path);
    }
    public void OpenCartInitAdmin() {
        System.out.println("--------------- INITIALIZING OPENCART TEST - OPENING WEBPAGE ---------------");
        opencartManager = new opencartActuatorAdmin();
        opencartManager.initSessionAsAdmin(webDriver, path);
    }

     // This step starts a new Admin session in the admin login page
    @Given("User is on log in page")
    public void userIsOnHomePage() {
        OpenCartInitAdmin();
    }

    // This step starts the process of reaching the coupon page and changing it's status
    @When("Admin is logged in with {string} and {string}")
    public void user_is_logged_in_with_and(String email, String password) {
        opencartManager.enterLoginInfoAdmin(email, password);
    }

    @And("Admin click on marketing button")
    public void AdminClickMarketingButton() {
        opencartManager.clickMarketingButton();
    }

    @And("Admin navigates to Coupon button")
    public void AdminClickCouponButton() {
        opencartManager.clickCouponsButton();
    }

    @And("Admin click on edit button")
    public void AdminClickOnEditCoupon() {
        opencartManager.clickEditCouponsButton();
    }
    @And("Admin scroll down")
    public void AdminScrollDownUntilFindStatus() {
        opencartManager.scrollDownUntilFindStatus();
    }
    @And("Admin click on status button")
    public void AdminClickOnStatusButton() {
        opencartManager.ClickOnStatusButton();
    }

    @And("Admin scroll up")
    public void AdminScrollUpUntilFindSave() {
        opencartManager.scrollUpUntilFindSave();
    }

    @And("Admin click on the save button")
    public void AdminClickOnSaveButton() {
        opencartManager.ClickOnSaveButton();
    }
    // In this step we check to see that the coupon is indeed disabled
    @Then("the Coupon is disable")
    public void checkCouponDisable() {
        opencartManager.checkCouponDisable();
    }

    // Customer Scenario Steps
    // This step starts a new Customer session in the Opencart homepage
    @Given("User is on home page")
    public void CustomerIsOnHomePage() {
        OpenCartInitUser();
    }

    // This step starts the process of reaching the checkout page and applying a coupon
    @When("User logs in with {string} and {string}")
    public void userLogsInWith(String email, String password) {
        opencartUser.goToLogin();
        opencartUser.enterLoginInfoUser(email, password);
    }

    @And("User clicks on the homepage")
    public void userClicksOnHomepage() {
        opencartUser.clickHomepage();
    }

    @And("User scrolls down to see a product")
    public void userScrollsDownToSeeProduct() {
        opencartUser.scrollDownToProduct();
    }

    @And("User clicks on add to cart for the product")
    public void userClicksAddToCart() {
        opencartUser.addToCart();
    }

    @And("User scrolls up")
    public void userScrollsUp() {
        opencartUser.scrollUp();
    }

    @And("User clicks on shopping cart")
    public void userClicksOnShoppingCart() {
        opencartUser.clickShoppingCart();
    }

    @And("User scrolls down")
    public void userScrollsDown() {
        opencartUser.scrollDown();
    }

    @And("User clicks on use a coupon")
    public void userClicksOnUseCoupon() {
        opencartUser.clickUseCoupon();
    }

    @And("User enters the coupon code {string}")
    public void userEntersCouponCode(String couponCode) {
        opencartUser.enterCouponCode(couponCode);
    }

    @And("User clicks apply coupon")
    public void userClicksApplyCoupon() {
        opencartUser.clickApplyCoupon();
    }

    // In this step we check that the total sum to pay is reduced
    @Then("The discount is applied to the total price")
    public void discountAppliedToTotal() {
        opencartUser.verifyDiscountAppliedTest();
    }
}

