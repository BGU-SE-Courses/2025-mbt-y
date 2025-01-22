/* @provengo summon selenium */

bthread('Admin Cancels Coupon', function () {
  let session = new SeleniumSession('admin');
  session.start(URLADMIN);
  loginAsAdmin(session);
  navigateToCoupons(session);
  disableCoupon(session);
});

bthread('Customer apply Coupon', function () {
  let session = new SeleniumSession('customer');
  session.start(URLCUSTOMER);
  loginAsCustomer(session);
  addToCart(session);
  applyCoupon(session);
});

bthread('coupon is active when applied', function () {
  sync({
    waitFor: Event("End(applying_coupon)"),
    block: Event("Start(disable_coupon)")
  })
})