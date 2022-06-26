const { firefox } = require('playwright');

const userFile = require("./user");
let email = "123";
let pass = userFile.pass;

(async () => {
  const browser = await firefox.launch({
    headless: false,
    slowMo: 5000,
  });

  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', pass);
  await page.click('text=Войти');

  const check = await page.waitForSelector("text=Мои курсы и профессии");
  await browser.close();
})();

(async () => {
  const browser = await firefox.launch({
    headless: false,
    slowMo: 5000,
  });

  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', '12345@gmail.ru');
  await page.fill('[placeholder="Пароль"]', '12345');
  await page.click('text=Войти');
  
  const check = await page.waitForSelector("text=Вы ввели неправильно логин или пароль");
  await browser.close();
})();
