const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const { buildPath } = require('selenium-webdriver/http')

const productName = "Nike react phantom run flyknit 2";
async function testRun(){
    let driver = await new Builder().forBrowser("chrome").build();
    //await driver.manage().window().fullscreen();
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    await driver.sleep(1000);
    //await driver.findElement(By.className("search-icon")).click();
    await driver.findElement(By.xpath("//a[@class='search-icon']")).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys('Nike');
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    //await driver.findElement(By.xpath("//span[contains(text(),'Nike react phantom run flyknit 2')][2]")).click();
    //await driver.findElement(By.xpath("//a[contains(@href,'182')]/span[contains(text(),'Nike react phantom run flyknit 2')]")).click();
   // await driver.findElement(By.xpath("//a[contains(@href,'179')]/span[contains(text(),'Nike react phantom run flyknit 2')]")).click();
   // await driver.findElement(By.xpath(`//a[contains(@href,'179')]/span[contains(text(), `${productName}` )]`)).click();
    await driver.findElement(By.xpath(`//a[contains(@href, '182')]/span[contains(text(), '${productName}')]`)).click();
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(), 'S')]")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//a[@href='#' and contains(text(), 'Black')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@name='qty']")).clear();
    await driver.findElement(By.xpath("//input[@name='qty']")).sendKeys(2);
    await driver.sleep(2000);
    // await driver.findElement(By.xpath("//span[contains(text(),'ADD TO CART')]")).click();
    await driver.findElement(By.xpath("//button[contains(.., 'ADD TO CART Detais')]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[@href='/cart' and contains(text(),'VIEW CART')]")).click();
    await driver.sleep(2000);

    await driver.sleep(1000);

    await driver.quit();
    // Test repo file
}
testRun();