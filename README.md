[![Build Status](https://travis-ci.org/JohannC/Travis-CI-Selenium-Xvfb-E2E-Testing.svg?branch=master)](https://travis-ci.org/JohannC/Travis-CI-Selenium-Xvfb-E2E-Testing)

## End-to-end test your Node.JS app with Travis-CI - using Xvfb & Docker

This repo aims to give a very simple example of end-to-end tests performed on a Node.JS webapp, with a continuous integration service like Travis-CI.

End-to-end test a webapp means to perform automatic tests of your app in a web browser, with the exact same conditions as a real user.

This version uses Xvfb & Docker to run your end-to-end tests during your Travis-CI builds. You can clone and run it easily without any special customizations. Its only flaw is that the test suit is only executed on the Chrome web browser. To have the possibility to launch your end-to-end tests on multiple browsers during the Travis-CI builds, you should use a service like [Sauce Labs](https://saucelabs.com). Check my other [tutorial](https://github.com/JohannC/Travis-CI-Selenium-Sauce-Labs-E2E-Testing) where I demonstrate how to use it.

## How does it work ?
The strategy used here to perform the end-to-end tests of your app either in your local environment or with Travis-CI, is based on the following technologies :
* Jest: the JS test framework 
* Selenium: the JS Library to perform web browser actions
* Travis-CI: the continuous integration tool
* Docker: to deploy the app locally on the Travis-CI virtual machine
* Xvfb : Mocking a graphical environment on the Travis-CI virtual machine

In your local environment:
* You will launch your web app locally
* In another terminal, you will execute the Jest test suit
* Jest will execute Selenium to perform the end-to-end tests
* Selenium will open your Chrome web browser to perform the tests

In your Travis-CI builds:
* Travis will first deploy your app locally with Docker
* Then it will launch your test suit with Jest
* Jest will execute Selenium to perform the end-to-end tests
* Selenium will open the Chrome web browser installed on the Travis-CI virtual machine
* Xvfb will interpret the graphical commands made by Selenium on Chrome to test the webapp

## Installation

### Install and run the end-to-end test suit on your local environment  
```bash
#Clone repo
git clone https://github.com/JohannC/Travis-CI-Selenium-Sauce-Labs-E2E-Testing.git
cd Travis-CI-Selenium-Sauce-Labs-E2E-Testing
git remote add origin https://github.com/$YOUR_USERNAME/$YOUR_REMOTE_REPO.git
#Install dependencies
npm install
#Run this minimalist app on you local environment
npm run start
```
Open another terminal and type the following:
```bash
#Launch the end-to-end test suit
npm run test
```

### Run the end-to-end test suit on Travis-CI
Well... Simply enable Travis-CI on your GitHub repo, your end-to-end tests will be executed during the builds.
