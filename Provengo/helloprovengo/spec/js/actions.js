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
  session.click(xpaths.couponListPage.editClick);
  session.runCode(scrolling.down);
  session.waitForVisibility(xpaths.couponPage.statusButtonClick, 5000);
  session.click(xpaths.couponPage.statusButtonClick);
  session.runCode(scrolling.up);
  session.runCode(scrolling.up);
  session.waitForVisibility(xpaths.couponPage.saveButtonClick, 5000);
  session.click(xpaths.couponPage.saveButtonClick);
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
  session.runCode(scrolling.down);
  session.click(xpaths.addProduct.addToCart);
  session.runCode(scrolling.up);
  session.runCode(scrolling.up);
  session.click(xpaths.backHome.homeLogo);
  session.click(xpaths.addProduct.goToCheckOut);

}


function applyCoupon(session) {
  session.runCode(scrolling.down);
  session.waitForVisibility(xpaths.checkOutPage.addCoupon, 5000);
  session.click(xpaths.checkOutPage.addCoupon);
  session.writeText(xpaths.checkOutPage.couponTestBox, customerDetails.couponCode);
  session.click(xpaths.checkOutPage.couponApplyButton);
}
