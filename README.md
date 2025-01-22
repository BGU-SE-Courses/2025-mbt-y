# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called OPENCART (https://github.com/opencart/opencart).

OpenCart is an open-source e-commerce platform that enables businesses to create and manage online stores.

## Installation
Need to install the OPENCART site locally, install Provengo, install Selenium and install XAMPP. Run the local site using XAMPP and run
a local selenium server.

## What we tested
We tested the coupon use in the software. We chose to test the following user stories: 

*User story:* A customer uses a coupon that lowers the cost in the cart.

*Preconditions:* A coupon is enabled

*Expected outcome:* The total cost in the checkout is reduced.

*User story:* The admin cancels the coupon.

*Preconditions:* A coupon is enabled.

*Expected outcome:* The coupon is disabled.


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory.
