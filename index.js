const puppeteer = require("puppeteer");

async function start() {
  async function login(zid, password) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://webcms3.cse.unsw.edu.au/login");
    await page.screenshot({ path: "amazing1.png" });
    await page.type("#zid", `${zid}`);
    await page.type("#password", `${password}`);
    await page.click(".well button");
    await page.waitForNavigation();
    await page.screenshot({ path: "amazing2.png" });
    const url = await page.url();
    await browser.close();
    if (url === "https://webcms3.cse.unsw.edu.au/login") {
      return false;
    } else {
      return true;
    }
  }

  const ans = await login("", "");
  console.log(ans);
}
start();
