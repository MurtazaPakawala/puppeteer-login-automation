const puppeteer = require("puppeteer");
const fetch = require("node-fetch");
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
    await page.goto(
      "https://webcms3.cse.unsw.edu.au/COMP1531/22T2/users/grades"
    );
    await page.waitForResponse(
      "https://webcms3.cse.unsw.edu.au/COMP1531/22T2/users/api/sturec/z5405719"
    );

    await page.setRequestInterception(true);
    let headers = {};
    page.on("request", (request) => {
      headers = request.headers();
    });

    await page.screenshot({ path: "amazing3.png" });
    fetch(
      "https://webcms3.cse.unsw.edu.au/COMP1531/22T2/users/api/sturec/z5405719",
      { headers: headers }
    )
      .then((res) => res.text())
      .then((text) => console.log(text));
    //going to course

    await browser.close();
    if (url === "https://webcms3.cse.unsw.edu.au/login") {
      return false;
    } else {
      return true;
    }
  }

  const password = "";
  const zid = "";
  const ans = await login(zid, password);
  console.log(ans);
  if (!ans) {
    return;
  }
  //lets try getting marks from grade page
}
start();
