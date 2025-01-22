//@Provengo summon selenium
//@Provengo summon ctrl


//Admin
function loginAsAdmin(session) {
  session.writeText(xpaths.loginPageAdmin.usernameInput, adminDetails.username);
  session.writeText(xpaths.loginPageAdmin.passwordInput, adminDetails.password);
  session.click(xpaths.loginPageAdmin.submitButton);
}

function navigateToCoupons(session) {
  session.click(xpaths.dashboardPageAdmin.marketingClick);
  session.click(xpaths.dashboardPageAdmin.couponsButton);
}


function disableCoupon(session) {
  sync({request: Event("Start(disable_coupon)")});
  session.click(xpaths.couponListPage.editClick);
  session.scrollToElement(xpaths.couponPage.statusButtonClick);
  session.waitForVisibility(xpaths.couponPage.statusButtonClick, 5000);
  session.click(xpaths.couponPage.statusButtonClick);
  session.scrollToElement(xpaths.couponPage.saveButtonClick);
  session.waitForVisibility(xpaths.couponPage.saveButtonClick, 5000);
  session.click(xpaths.couponPage.saveButtonClick);
  sync({request: Event("End(disable_coupon)")});
}

//Customer
function loginAsCustomer(session) {
  session.click(xpaths.homePage.userClick);
  session.click(xpaths.homePage.loginClick);
  session.writeText(xpaths.loginPageCustomer.usernameInput, customerDetails.username);
  session.writeText(xpaths.loginPageCustomer.passwordInput, customerDetails.password);
  session.click(xpaths.loginPageCustomer.submitButton);
}

function addToCart(session) {
  session.click(xpaths.backHome.homeLogo);
  session.scrollToElement(xpaths.addProduct.addToCart);
  session.click(xpaths.addProduct.addToCart);
  session.scrollToElement(xpaths.backHome.homeLogo);
  session.click(xpaths.backHome.homeLogo);
  session.click(xpaths.addProduct.goToCheckOut);

}


function applyCoupon(session) {
  sync({request: Event("Start(applying_coupon)")});
  session.scrollToElement(xpaths.checkOutPage.addCoupon);
  session.waitForVisibility(xpaths.checkOutPage.addCoupon, 5000);
  session.click(xpaths.checkOutPage.addCoupon);
  session.writeText(xpaths.checkOutPage.couponTestBox, customerDetails.couponCode);
  session.scrollToElement(xpaths.checkOutPage.couponApplyButton);
  session.click(xpaths.checkOutPage.couponApplyButton);
  sync({request: Event("End(applying_coupon)")});
}
