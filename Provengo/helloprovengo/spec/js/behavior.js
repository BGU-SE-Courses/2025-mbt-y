/* @provengo summon selenium */

/**
 * This story opens a new browser window, goes to google.com, and searches for "Pizza".
 */
bthread('Admin Cancels Coupon', function () {
  const session = new SeleniumSession('admin').start('http://localhost/opencartsite/admin');
  loginAsAdmin(session);
  navigateToCoupons(session);
  disableCoupon(session);}