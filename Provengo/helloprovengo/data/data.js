/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URLADMIN = 'http://localhost/opencart/adminman';

adminDetails = {
  username: "admin",
  password: "1234"
}
const xpaths = {
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
  }

}

const searchTerm = 'pizza'

const scrolling = {
  down: "window.scrollTo(0, document.body.scrollHeight);",
  up: "window.scrollTo(0, 0);"
}