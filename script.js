const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const { buildPath } = require('selenium-webdriver/http')

async function testRun(){
    let driver = await new Builder().forBrowser("chrome").build();
    //await driver.manage().window().fullscreen();
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    await driver.sleep(3000);
    //await driver.findElement(By.className("search-icon")).click();
    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('Nike');
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    await driver.findElement(By.xpath("//span[contains(text(),'Nike revolution 5')]")).click();
    await driver.sleep(3000);
    //a[@class='search-icon']
    //input[@placeholder='Search']
    //span[contains(text(),'Nike react phantom run flyknit 2')][1]
    await driver.quit();
}
testRun();