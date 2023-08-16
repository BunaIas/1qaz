
let singularityy = process.argv[2];
//console.log(`My constant is: ${g.substring(0, 3)}`+"liotv");

const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch({  headless: 'new' , slowMo: 10, });

    
let singularity = singularityy+'2023-08-16 | 15:30 | 12:01 | 3  12:00 x USD x Industrial Production (MoM) (Jun) x 479915';


let time_space = singularity.split(' x ');
let space = time_space[1];

 
let quqaracha = singularity.slice(29,30);
if(quqaracha == '3')
{quqaracha = 17}
else {quqaracha = 65}
  
const page3 = await browser.newPage();
await page3.goto('https://sslecal2.investing.com/?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_credit,_centralBanks,_confidenceIndex,_balance,_Bonds&importance=1,2,3&features=datepicker,timezone,timeselector,filters&countries=25,54,34,6,72,71,22,17,51,33,10,35,43,38,26,9,12,4,5&calType=day&timeZone='+quqaracha+'&lang=1%22%20width=%22650%22%20height=%22467%22%20frameborder=%220%22%20allowtransparency=%22true%22%20marginwidth=%220%22%20marginheight=%220%22%3E%3C/iframe%3E%3Cdiv%20class=%22poweredBy%22%20style=%22font-family:%20Arial,%20Helvetica,%20sans-serif;%22%3E%3Cspan%20style=%22font-size:%2011px;color:%20#333333;text-decoration:%20none;%22%3EReal%20Time%20Economic%20Calendar%20provided%20by%20%3Ca%20href=%22https://www.investing.com/%22%20rel=%22nofollow%22%20target=%22_blank%22%20style=%22font-size:%2011px;color:%20#06529D;%20font-weight:%20bold;%22%20class=%22underline_link%22%3EInvesting.com%3C/a%3E.%3C/span%3E%3C/div%3E');


let toxic = [];
for(let i = 2; i < time_space.length; i++){
  if(i % 2 == 1)
   {toxic.push(time_space[i])}
}
//console.log(toxic)
  
let arsenic = await page3.content();  
let breath = [];
for(let drink = 0; drink < toxic.length; drink++){
  if(arsenic.includes(toxic[drink]))
   {breath.push("mercury"); }
}
//console.log(breath)


function dupliquer3(z,zorro){
let tornado;
if (!zorro){ tornado = z.filter((sword, index) => z.indexOf(sword) !== index); }
else { tornado = z.filter((mask) => zorro.includes(mask)); }
//console.log(tornado)
return tornado; 
}


if(dupliquer3(toxic).length > 0)
{console.log('same names'); process.exit(-2)}
  
if(breath.length !== toxic.length)
{console.log('missing'); process.exit(-1)}
  
await page3.close()


  
let come_down = singularity.slice(32);
let achilles = come_down.split(' x ');
let steel = achilles[1];
if(steel == 'EUR' || steel == 'GPB' || steel == 'AUD' || steel == 'NZD' || steel == 'ETH')
{steel = steel + "USD"}
else if(steel == 'JPY' || steel == 'CHF' || steel == 'SEK' )
{steel = 'USD'+ steel }
else if(steel == 'CAD')
{steel = 'AUD'+ steel }
else if (steel == 'USD')
{steel = "XAU" + steel}
//steel = 'XAUUSD'; 


  
/////////////////////////////////////////////////////////////////
//the start of the buy pending order whithout price and stop loos
const page = await browser.newPage();
const timeout = 6000;
    page.setDefaultTimeout(timeout);

   {
        const targetPage = page;
        await targetPage.setViewport({
            "width": 613,
            "height": 527
        })
    }
  
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://mt5wademo.fftrader.cz/terminal");
        await Promise.all(promises);
    }

    
    {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/Accept", "aria/[role=\"generic\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.button.svelte-1wr2l3c > button > div"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[3]/button/div"], ["text/Accept"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Accept", "aria/[role=\"generic\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.button.svelte-1wr2l3c > button > div"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[3]/button/div"], ["text/Accept"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 61.1875,
            y: 7,
        },
    });
}


    {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/Enter Login[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1oicbsl > div.content.svelte-1oicbsl > div > div > form > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/span/input"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Enter Login[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1oicbsl > div.content.svelte-1oicbsl > div > div > form > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/span/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "1051808177")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1051808177");
    } else {
        await changeElementValue(element, "1051808177");
    }
}

    
{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/Enter Password[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1oicbsl > div.content.svelte-1oicbsl > div > div > form > div.layout.svelte-1bpvxjz > div:nth-child(1) > div > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[4]/div[1]/div/span/input"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Enter Password[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1oicbsl > div.content.svelte-1oicbsl > div > div > form > div.layout.svelte-1bpvxjz > div:nth-child(1) > div > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[4]/div[1]/div/span/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "7WAVMK4Y77")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "7WAVMK4Y77");
    } else {
        await changeElementValue(element, "7WAVMK4Y77");
    }
}

    
   {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/Connect to account[role=\"button\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1xzq6fm > div.content.svelte-1xzq6fm > div > div > form > div.footer.svelte-1yec9gl > div > button"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[7]/div/button"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Connect to account[role=\"button\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1xzq6fm > div.content.svelte-1xzq6fm > div > div > form > div.footer.svelte-1yec9gl > div > button"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[7]/div/button"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 75.640625,
            y: 15,
        },
    });
}


  
{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > div.icon.left.svelte-1nc9ygh > div > div > svg"], ["xpath//html/body/div[2]/div[5]/div/label/div[1]/div/div/svg"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > div.icon.left.svelte-1nc9ygh > div > div > svg"], ["xpath//html/body/div[2]/div[5]/div/label/div[1]/div/div/svg"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 4.12152099609375,
            y: 12.065967559814453,
        },
    });
}


 {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div[2]/div[4]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div[2]/div[4]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, steel)
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, steel);
    } else {
        await changeElementValue(element, steel);
    }
}
    
    {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-1l0j9v8 > div > div > div > div > button > span > span.symbol.svelte-6nbdup"], ["xpath//html/body/div[2]/div[4]/div/div[2]/div/div/div/div/button/span/span[1]"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-1l0j9v8 > div > div > div > div > button > span > span.symbol.svelte-6nbdup"], ["xpath//html/body/div[2]/div[4]/div/div[2]/div/div/div/div/button/span/span[1]"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 24,
            y: 10,
        },
    });
}


    {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/Create New Order"], ["body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div > div.buttons.svelte-4x7axh > button"], ["xpath//html/body/div[2]/div[5]/div/div[2]/div/div/div[3]/div/div[3]/button"], ["text/Create New Order"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Create New Order"], ["body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div > div.buttons.svelte-4x7axh > button"], ["xpath//html/body/div[2]/div[5]/div/div[2]/div/div/div[3]/div/div[3]/button"], ["text/Create New Order"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 59.09375,
            y: 15,
        },
    });
}



//this is for the panel quck trade to appear 
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.top-bar.svelte-s163km > div.icons.svelte-lzk3i4 > div.group.clear.svelte-lzk3i4 > div > div > svg"], ["xpath//html/body/div[2]/div[1]/div[2]/div[4]/div/div/svg"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.top-bar.svelte-s163km > div.icons.svelte-lzk3i4 > div.group.clear.svelte-lzk3i4 > div > div > svg"], ["xpath//html/body/div[2]/div[1]/div[2]/div[4]/div/div/svg"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 11,
            y: 23,
        },
    });
}
  

{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.header.svelte-4kbk6d > div.main-select.svelte-4kbk6d > div > select"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[1]/div[1]/div/select"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.header.svelte-4kbk6d > div.main-select.svelte-4kbk6d > div > select"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[1]/div[1]/div/select"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 88.00694274902344,
            y: 25.006942749023438,
        },
    });
}


{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.header.svelte-4kbk6d > div.main-select.svelte-4kbk6d > div > select"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[1]/div[1]/div/select"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.header.svelte-4kbk6d > div.main-select.svelte-4kbk6d > div > select"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[1]/div[1]/div/select"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "4")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "4");
    } else {
        await changeElementValue(element, "4");
    }
}


// the first click is for to appear 0.1 than by deleting 0.1 you make a second click and than tha change part 
{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 55,
            y: 18,
        },
    });
}


{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        delay: 1213.3999999999069,
        offset: {
            x: 46,
            y: 18,
        },
    });
}


{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "1.5")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1.5");
    } else {
        await changeElementValue(element, "1.5");
    }
}


//this is finding and waiting whhere to whrite the price for the buy
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.price.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"], ["text/1.09601"]], page, timeout);
    const time = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.price.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"], ["text/1.09601"]], page, {
        timeout,
        visible: true
    });


//this is for finding and waiting for when to write the stop loss for the buy
  await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.sl.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], page, timeout);
    const machine = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.sl.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], page, {
        timeout,
        visible: true
    });

//this is for changing the price buy to nothing to write later the actual price
await typeIntoElement(time, "");
    
///////////////////////////////////
//the end of the first pending order 

    
//////////////////////////////////////////////////////////////////////////////////////////////////
//the start for the second pending order whitout login and quick trade because cookie of the first
const page2 = await browser.newPage();
    page.setDefaultTimeout(timeout);

   {
        const targetPage = page2;
        await targetPage.setViewport({
            "width": 613,
            "height": 527
        })
    }
  
    {
        const targetPage = page2;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://mt5wademo.fftrader.cz/terminal");
        await Promise.all(promises);
    }

  
{
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > div.icon.left.svelte-1nc9ygh > div > div > svg"], ["xpath//html/body/div[2]/div[5]/div/label/div[1]/div/div/svg"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > div.icon.left.svelte-1nc9ygh > div > div > svg"], ["xpath//html/body/div[2]/div[5]/div/label/div[1]/div/div/svg"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 4.12152099609375,
            y: 12.065967559814453,
        },
    });
}


 {
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div[2]/div[4]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div[2]/div[4]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, steel)
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, steel);
    } else {
        await changeElementValue(element, steel);
    }
}
    
    {
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-1l0j9v8 > div > div > div > div > button > span > span.symbol.svelte-6nbdup"], ["xpath//html/body/div[2]/div[4]/div/div[2]/div/div/div/div/button/span/span[1]"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-1l0j9v8 > div > div > div > div > button > span > span.symbol.svelte-6nbdup"], ["xpath//html/body/div[2]/div[4]/div/div[2]/div/div/div/div/button/span/span[1]"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 24,
            y: 10,
        },
    });
}


  
    {
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["aria/Create New Order"], ["body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div > div.buttons.svelte-4x7axh > button"], ["xpath//html/body/div[2]/div[5]/div/div[2]/div/div/div[3]/div/div[3]/button"], ["text/Create New Order"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Create New Order"], ["body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div > div.buttons.svelte-4x7axh > button"], ["xpath//html/body/div[2]/div[5]/div/div[2]/div/div/div[3]/div/div[3]/button"], ["text/Create New Order"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 59.09375,
            y: 15,
        },
    });
}



{
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.header.svelte-4kbk6d > div.main-select.svelte-4kbk6d > div > select"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[1]/div[1]/div/select"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.header.svelte-4kbk6d > div.main-select.svelte-4kbk6d > div > select"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[1]/div[1]/div/select"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 88.00694274902344,
            y: 25.006942749023438,
        },
    });
}


{
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.header.svelte-4kbk6d > div.main-select.svelte-4kbk6d > div > select"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[1]/div[1]/div/select"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.header.svelte-4kbk6d > div.main-select.svelte-4kbk6d > div > select"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[1]/div[1]/div/select"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "5")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "5");
    } else {
        await changeElementValue(element, "5");
    }
}

// the first click is for to appear 0.1 than by deleting 0.1 you make a second click and than tha change part 

{
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 55,
            y: 18,
        },
    });
}


{
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        delay: 1213.3999999999069,
        offset: {
            x: 46,
            y: 18,
        },
    });
}


{
    const targetPage = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.volume.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "1.5")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1.5");
    } else {
        await changeElementValue(element, "1.5");
    }
}


//this is finding and waiting whhere to whrite the price for the sell 
await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.price.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"], ["text/1.09601"]], page2, timeout);
    const cruel = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.price.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"], ["text/1.09601"]], page2, {
        timeout,
        visible: true
    });


//this is for finding and waiting for when to write the stop loss for the sell
await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.sl.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], page2, timeout);
    const nature = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.sl.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], page2, {
        timeout,
        visible: true
    });


//this is for changing the price sell to nothing to write later the actual price  
await typeIntoElement(cruel, "");
    
//////////////////////////////////////
//then end of the second pending order


    
//////////////////////////////////////////
//the second browser start 
const roger = await puppeteer.launch({  headless: 'new' , });
const page4 = await roger.newPage();
  page4.setDefaultTimeout(timeout);

   {
        const targetPage = page4;
        await targetPage.setViewport({
            "width": 613,
            "height": 527
        })
    }
  
    {
        const targetPage = page4;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://mt5wademo.fftrader.cz/terminal");
        await Promise.all(promises);
    }

 {
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["aria/Accept", "aria/[role=\"generic\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.button.svelte-1wr2l3c > button > div"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[3]/button/div"], ["text/Accept"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Accept", "aria/[role=\"generic\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.button.svelte-1wr2l3c > button > div"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[3]/button/div"], ["text/Accept"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 61.1875,
            y: 7,
        },
    });
}


    {
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["aria/Enter Login[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1oicbsl > div.content.svelte-1oicbsl > div > div > form > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/span/input"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Enter Login[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1oicbsl > div.content.svelte-1oicbsl > div > div > form > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/span/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "1051808177")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1051808177");
    } else {
        await changeElementValue(element, "1051808177");
    }
}

    
{
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["aria/Enter Password[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1oicbsl > div.content.svelte-1oicbsl > div > div > form > div.layout.svelte-1bpvxjz > div:nth-child(1) > div > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[4]/div[1]/div/span/input"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Enter Password[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1oicbsl > div.content.svelte-1oicbsl > div > div > form > div.layout.svelte-1bpvxjz > div:nth-child(1) > div > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[4]/div[1]/div/span/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "7WAVMK4Y77")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "7WAVMK4Y77");
    } else {
        await changeElementValue(element, "7WAVMK4Y77");
    }
}

    
   {
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["aria/Connect to account[role=\"button\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1xzq6fm > div.content.svelte-1xzq6fm > div > div > form > div.footer.svelte-1yec9gl > div > button"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[7]/div/button"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Connect to account[role=\"button\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1xzq6fm > div.content.svelte-1xzq6fm > div > div > form > div.footer.svelte-1yec9gl > div > button"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[7]/div/button"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 75.640625,
            y: 15,
        },
    });
}

{
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.top-bar.svelte-s163km > div.menu.svelte-lzk3i4 > div > div > div > div > svg"], ["xpath//html/body/div[2]/div[1]/div[1]/div/div/div/div/svg"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.top-bar.svelte-s163km > div.menu.svelte-lzk3i4 > div > div > div > div > svg"], ["xpath//html/body/div[2]/div[1]/div[1]/div/div/div/div/svg"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 10.96875,
            y: 9.471590995788574,
        },
    });
}


{
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["aria/One Click Trading"], ["body > div:nth-child(3) > div:nth-child(2) > div > div > button.item.svelte-sdx7kc.bottom.icon"], ["xpath//html/body/div[1]/div[2]/div/div/button[1]"], ["text/One Click Trading"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/One Click Trading"], ["body > div:nth-child(3) > div:nth-child(2) > div > div > button.item.svelte-sdx7kc.bottom.icon"], ["xpath//html/body/div[1]/div[2]/div/div/button[1]"], ["text/One Click Trading"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 93.96591186523438,
            y: 20.403411865234375,
        },
    });
}


{
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.controls.svelte-nmm6ji > label > span"], ["xpath//html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/label/span"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.controls.svelte-nmm6ji > label > span"], ["xpath//html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/label/span"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: -17.4801025390625,
            y: 7.55682373046875,
        },
    });
}

{
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["aria/Accept"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.controls.svelte-nmm6ji > div > button.button.svelte-aawtpb.active"], ["xpath//html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/div/button[2]"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Accept"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.controls.svelte-nmm6ji > div > button.button.svelte-aawtpb.active"], ["xpath//html/body/div[3]/div/div[2]/div/div[2]/div/div[2]/div/button[2]"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 35.49151611328125,
            y: 14.042633056640625,
        },
    });
}

//the end of the second browser 
//////////////////////////////////////////////////

    

const d =  new Date(new Date().getTime() + 10800000)
  
let sell =  await page.evaluate(() => {
let omega = document.querySelector('div.content.svelte-1g4hfzg').innerText;
return parseFloat(omega.slice(0,7)) 
})
//console.log(sell)

await cruel.type( (sell-0.50)+"" )

await nature.type( (sell+1)+"" )
  
await page2.evaluate(() => {document.querySelector('button.trade-button.svelte-16m7zpq').click()})  
console.log(sell-0.40,sell+1)



let buy =  await page.evaluate(() => {
let alpha = document.querySelector('div.content.svelte-1g4hfzg').innerText;
return parseFloat(alpha.slice(-7))
})
//console.log(buy)

await time.type( (buy+0.50)+""  )

await machine.type( (buy-1)+""   )

await page.evaluate(() => {document.querySelector('button.trade-button.svelte-16m7zpq').click()})    
console.log(buy+0.40,buy-1)


console.log(new Date(new Date().getTime() + 10800000))
    
let hour_array = singularity.slice(13,18);
let gravity = new Date(singularity.slice(0,10)+'T'+hour_array+':07.000Z');
let  black_hole = new Date(singularity.slice(0,10)+'T'+hour_array+':59.000Z')

  
//gravity = new Date('2023-09-13T18:07:07.000Z');
//black_hole = new Date('2023-08-15T01:29:59.000Z');
  

const e  =  new Date(new Date().getTime() + 10800000)
await browser.close();
console.log(e-d)


let to_be_or_not_to_be = false;
  
while(  new Date(new Date().getTime() + 10800000) < gravity){

const stars = await page4.evaluate(() => {
const pleiades = document.querySelectorAll('div.svelte-7c7doc')[0];
if(pleiades !== undefined)
  {return pleiades.innerText}
else {return pleiades}  })
//console.log(i)
  
  if(stars == 'buy' || stars == 'sell'){
    to_be_or_not_to_be = true; 
    await page4.evaluate(() => {document.querySelectorAll('button.close.svelte-rg7vr1')[1].click()});
    
  { const targetPage = page4;
    await scrollIntoViewIfNeeded([["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(2) > div:nth-child(7)"], ["xpath//html/body/div/div[6]/div/div[2]/div/div/div[2]/div[7]"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(2) > div:nth-child(7)"], ["xpath//html/body/div/div[6]/div/div[2]/div/div/div[2]/div[7]"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        clickCount: 2,
        offset: {
             x: 24.09375,
             y: 15,
         },
    });
  }
    while(  new Date(new Date().getTime() + 10800000) < black_hole){}
    await page4.evaluate(() => {document.querySelector("body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.buttons.svelte-4kbk6d > button.trade-button.svelte-16m7zpq.orange").click()});
    break
  
  }

}

  
if(to_be_or_not_to_be == false){

{
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["aria/buy stop"], ["body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div:nth-child(4)"], ["xpath//html/body/div[2]/div[5]/div/div[2]/div/div/div[3]/div[4]"], ["text/buy stop"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/buy stop"], ["body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div:nth-child(4)"], ["xpath//html/body/div[2]/div[5]/div/div[2]/div/div/div[3]/div[4]"], ["text/buy stop"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        clickCount: 2,
        offset: {
            x: 27.14581298828125,
            y: 9.5555419921875,
        },
    });
}

{
    const targetPage = page4;
    await scrollIntoViewIfNeeded([["aria/Delete"], ["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.buttons.svelte-4kbk6d > button.trade-button.svelte-16m7zpq.orange"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[2]/button[2]"], ["text/Delete"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Delete"], ["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.buttons.svelte-4kbk6d > button.trade-button.svelte-16m7zpq.orange"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[2]/button[2]"], ["text/Delete"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 110.01041412353516,
            y: 14.95831298828125,
        },
    });
}
    
await page4.evaluate(() => {document.querySelectorAll('button.close.svelte-rg7vr1')[1].click()})
}

await roger.close();


    
    async function waitForSelectors(selectors, frame, options) {
        for (const selector of selectors) {
            try {
                return await waitForSelector(selector, frame, options);
            } catch (err) {
                console.error(err);
            }
        }
        throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
        const element = await waitForSelectors(selectors, frame, {
            visible: false,
            timeout
        });
        if (!element) {
            throw new Error('The element could not be found.');
        }
        await waitForConnected(element, timeout);
        const isInViewport = await element.isIntersectingViewport({
            threshold: 0
        });
        if (isInViewport) {
            return;
        }
        await element.evaluate(element=>{
            element.scrollIntoView({
                block: 'center',
                inline: 'center',
                behavior: 'auto',
            });
        }
        );
        await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
        await waitForFunction(async()=>{
            return await element.getProperty('isConnected');
        }
        , timeout);
    }

    async function waitForInViewport(element, timeout) {
        await waitForFunction(async()=>{
            return await element.isIntersectingViewport({
                threshold: 0
            });
        }
        , timeout);
    }

    async function waitForSelector(selector, frame, options) {
        if (!Array.isArray(selector)) {
            selector = [selector];
        }
        if (!selector.length) {
            throw new Error('Empty selector provided to waitForSelector');
        }
        let element = null;
        for (let i = 0; i < selector.length; i++) {
            const part = selector[i];
            if (element) {
                element = await element.waitForSelector(part, options);
            } else {
                element = await frame.waitForSelector(part, options);
            }
            if (!element) {
                throw new Error('Could not find element: ' + selector.join('>>'));
            }
            if (i < selector.length - 1) {
                element = (await element.evaluateHandle(el=>el.shadowRoot ? el.shadowRoot : el)).asElement();
            }
        }
        if (!element) {
            throw new Error('Could not find element: ' + selector.join('|'));
        }
        return element;
    }

    async function waitForElement(step, frame, timeout) {
        const count = step.count || 1;
        const operator = step.operator || '>=';
        const comp = {
            '==': (a,b)=>a === b,
            '>=': (a,b)=>a >= b,
            '<=': (a,b)=>a <= b,
        };
        const compFn = comp[operator];
        await waitForFunction(async()=>{
            const elements = await querySelectorsAll(step.selectors, frame);
            return compFn(elements.length, count);
        }
        , timeout);
    }

    async function querySelectorsAll(selectors, frame) {
        for (const selector of selectors) {
            const result = await querySelectorAll(selector, frame);
            if (result.length) {
                return result;
            }
        }
        return [];
    }

    async function querySelectorAll(selector, frame) {
        if (!Array.isArray(selector)) {
            selector = [selector];
        }
        if (!selector.length) {
            throw new Error('Empty selector provided to querySelectorAll');
        }
        let elements = [];
        for (let i = 0; i < selector.length; i++) {
            const part = selector[i];
            if (i === 0) {
                elements = await frame.$$(part);
            } else {
                const tmpElements = elements;
                elements = [];
                for (const el of tmpElements) {
                    elements.push(...(await el.$$(part)));
                }
            }
            if (elements.length === 0) {
                return [];
            }
            if (i < selector.length - 1) {
                const tmpElements = [];
                for (const el of elements) {
                    const newEl = (await el.evaluateHandle(el=>el.shadowRoot ? el.shadowRoot : el)).asElement();
                    if (newEl) {
                        tmpElements.push(newEl);
                    }
                }
                elements = tmpElements;
            }
        }
        return elements;
    }

    async function waitForFunction(fn, timeout) {
        let isActive = true;
        const timeoutId = setTimeout(()=>{
            isActive = false;
        }
        , timeout);
        while (isActive) {
            const result = await fn();
            if (result) {
                clearTimeout(timeoutId);
                return;
            }
            await new Promise(resolve=>setTimeout(resolve, 100));
        }
        throw new Error('Timed out');
    }

    async function changeSelectElement(element, value) {
        await element.select(value);
        await element.evaluateHandle((e)=>{
            e.blur();
            e.focus();
        }
        );
    }

    async function changeElementValue(element, value) {
        await element.focus();
        await element.evaluate((input,value)=>{
            input.value = value;
            input.dispatchEvent(new Event('input',{
                bubbles: true
            }));
            input.dispatchEvent(new Event('change',{
                bubbles: true
            }));
        }
        , value);
    }

    async function typeIntoElement(element, value) {
        const textToType = await element.evaluate((input,newValue)=>{
            if (newValue.length <= input.value.length || !newValue.startsWith(input.value)) {
                input.value = '';
                return newValue;
            }
            const originalValue = input.value;
            input.value = '';
            input.value = originalValue;
            return newValue.substring(originalValue.length);
        }
        , value);
        await element.type(textToType);
    }
}
)().catch(err=>{
    console.error(err);
    process.exit(1);
}
);
