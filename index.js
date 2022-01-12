const puppeteer = require('puppeteer');

console.log("Bem vindo ao Bot conversor\n");

async function robo() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const moedaBase = 'dolar';
    const moedaFinal = 'real';
    const url = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&source=hp&ei=IaneYZKwAsLY5OUP2MqewAQ&iflsig=ALs-wAMAAAAAYd63MQ3t4zhIvPEzoB9cF3SkXifb4qCO&ved=0ahUKEwjSxNHB_Kv1AhVCLLkGHVilB0gQ4dUDCAc&uact=5&oq=${moedaBase}+para+${moedaFinal}&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOg4ILhCABBCxAxDHARDRAzoLCAAQgAQQsQMQgwE6CggAEIAEELEDEAo6BQguEIAESgUIOxIBMVCcBVjZGWCEHWgAcAB4AIABlQGIAawRkgEEMC4xNpgBAKABAbABAA&sclient=gws-wiz`;
    await page.goto(url);
    //await page.screenshot({ path: 'example.png' });
  
    // Pegando o valor do resultado que dará no navegador
    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log("================ CONVERSOR (DOLAR -> REAL) ================\n");
    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);

    await browser.close();
}

robo();
