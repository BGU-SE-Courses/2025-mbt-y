/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URLADMIN = 'http://localhost/opencart/adminman';
const URLCUSTOMER = 'http://localhost/opencart/';

adminDetails = {
  username: "admin",
  password: "1234"
}

customerDetails = {
  username: "fun@gmail.com",
  password: "1234",
  couponCode: "itsfree"
}

const xpaths = {
  //Admin
  searchWindow: {
    searchInput: '//textarea[@aria-label="Search"]',
    searchButton: '//input[@aria-label="Google Search"]',
    feelingLuckyButton: '//input[@aria-label="I\'m Feeling Lucky"]'
  },
  loginPageAdmin:{
    usernameInput : "//*[@id='input-username']",
    passwordInput : "//*[@id='input-password']",
    submitButton : "//button[1]"
  },
  dashboardPageAdmin:{
    marketingClick: "//nav[1]/ul[1]/li[7]/a[1]",
    couponsButton: "//nav[1]/ul[1]/li[7]/ul[1]/li[3]/a[1]"
  },
  couponListPage:{
    editClick : "//tr[1]/td[8]/a[1]"
  },
  couponPage:{
    saveButtonClick : "//div[1]/div[1]/button[1]",
    statusButtonClick: "//*[@id='input-status']"
  },
  //Customer
  homePage:{
    userClick : "//*[@id='top']/div[1]/div[2]/ul[1]/li[2]/div[1]/a[1]/span[1]",
    loginClick : "//*[@id='top']/div[1]/div[2]/ul[1]/li[2]/div[1]/ul[1]/li[2]/a[1]"
  },
  loginPageCustomer:{
    usernameInput : "//*[@id='input-email']",
    passwordInput : "//*[@id='input-password']",
    submitButton : "//div[3]/button[1]"
  },
  backHome:{
    homeLogo : "//img[1]"
  },
  addProduct:{
    addToCart : "//div[1]/div[1]/div[2]/form[1]/div[1]/button[1]",
    goToCheckOut : "//*[@id='top']/div[1]/div[2]/ul[1]/li[4]/a[1]/span[1]",
    goToCheckOutBlack: "//*[@id='header-cart']/div/button[1]",
    viewCart: "//*[@id='header-cart']/div[1]/ul[1]/li[1]/div[1]/p[1]/a[1]/strong[1]"
  },
  checkOutPage:{
    addCoupon : "//div[1]/h2[1]/button[1]",
    couponTestBox : "//*[@id='input-coupon']",
    couponApplyButton : "//div[1]/div[1]/div[1]/form[1]/div[2]/button[1]"
  }

}

const scrolling = {
  down: function(){window.scrollTo(0, document.body.scrollHeight); pvg.success('yes');},
  up: function() {window.scrollTo(0, 0);pvg.success('yes');}
}