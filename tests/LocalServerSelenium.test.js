const webdriver = require('selenium-webdriver');
require('selenium-webdriver/chrome');
require('chromedriver')
const port = process.env.PORT || 80
const rootURL = 'http://localhost:'+port;
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 30;

beforeAll(async () => {
  driver = await new webdriver.Builder().forBrowser('chrome').build();
});

it('Test Foo Bar Research Engine', async () => {
    await driver.get(rootURL);
    const element = await driver.findElement(webdriver.By.name('search'));
    await element.sendKeys('cross browser testing');
    const searchButton = await driver.findElement(webdriver.By.id('search_button'));
    await searchButton.click();
    await driver.findElement(webdriver.By.id('result'));
});

afterAll(async () => driver.quit());