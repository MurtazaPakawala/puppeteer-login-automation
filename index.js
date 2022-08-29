const puppeteer = require("puppeteer");

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://webcms3.cse.unsw.edu.au/login");
  await page.screenshot({ path: "amazing1.png" });
  await page.type("#zid", "z540571");
  await page.type("#password", "bond@2003");
  await page.click(".well button");
  await page.waitForNavigation();
  await page.screenshot({ path: "amazing2.png" });
  console.log(browser.pages());
  await browser.close();
}

start();
