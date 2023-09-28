let singularity = process.argv[2];
//console.log(`My constant is: ${g.substring(0, 3)}`+"liotv");

const WebSocket = require('ws');
const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch({  headless: 'new', });

    
let singularity = '2023-09-29 | 01:30 | 17:01 | 3   x normal x USD x 12:11 x Existing Home Sales (Aug) x 327789 new eco x 481859 nor inv x 4.1 ||,  x normal x USD x 17:00 x US Leading Index (MoM) (Aug) x 327906 new eco x 481861 nor inv x -0.5 ||';


let come_down = singularity.slice(32);
let achilles = come_down.split(' x ');
let steel = achilles[2];
if(steel == 'EUR' || steel == 'GPB' || steel == 'AUD' || steel == 'NZD' || steel == 'ETH')
{steel = steel + "USD"}
else if(steel == 'JPY' || steel == 'CHF' || steel == 'SEK' )
{steel = 'USD'+ steel }
else if(steel == 'CAD')
{steel = 'AUD'+ steel }
else if (steel == 'USD')
{steel = "EUR" + steel}
//steel = 'XAUUSD';  

let hour_array = singularity.slice(13,18);
let light = new Date(singularity.slice(0,10)+'T'+hour_array+':07.000Z');
let gravity = new Date(singularity.slice(0,10)+'T'+hour_array+':07.000Z');
let  black_hole = new Date(singularity.slice(0,10)+'T'+hour_array+':59.000Z');


let event_horizon;
if(steel == 'XAUUSD'){event_horizon = 0.40}
else if(steel == 'USDJPY'){event_horizon = 0.035}
else if(steel == 'ETHUSD'){event_horizon = 0.30}
else {event_horizon = 0.00030}


    
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
        await changeSelectElement(element, "1051906371")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1051906371");
    } else {
        await changeElementValue(element, "1051906371");
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
        await changeSelectElement(element, "8STEGFBGZS")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "8STEGFBGZS");
    } else {
        await changeElementValue(element, "8STEGFBGZS");
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


//this makes the trading form
await page.evaluate(() => {document.querySelectorAll('div.icon-button.svelte-kvspc.withText')[0].click()})


//this is for the buy stop to appear 
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
        await changeSelectElement(element, "1.8")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1.8");
    } else {
        await changeElementValue(element, "1.8");
    }
}



//this is finding and waiting whhere to whrite the price for the buy

    const targetPage1 = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.price.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"], ["text/1.06601"]], targetPage1, timeout);
    const price_buy = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.price.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"], ["text/1.06601"]], targetPage1, {
        timeout,
        visible: true
    });



//this is for finding and waiting for when to write the stop loss for the buy

    const targetPage2 = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.sl.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage2, timeout);
    const sl_buy = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.sl.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage2, {
        timeout,
        visible: true
    });



//this opens the trade quick panel to thake the prices 
{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.top-bar.svelte-s163km > div.icons.svelte-lzk3i4 > div.group.clear.svelte-lzk3i4 > div > div > svg"], ["xpath//html/body/div[2]/div[1]/div[2]/div[4]/div/div/svg"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.top-bar.svelte-s163km > div.icons.svelte-lzk3i4 > div.group.clear.svelte-lzk3i4 > div > div > svg"], ["xpath//html/body/div[2]/div[1]/div[2]/div[4]/div/div/svg"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 9.09027099609375,
            y: 14.05555534362793,
        },
    });
}


//for the sell stop 
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


//this makes the trading form
await page2.evaluate(() => {document.querySelectorAll('div.icon-button.svelte-kvspc.withText')[0].click()})


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
        await changeSelectElement(element, "1.8")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1.8");
    } else {
        await changeElementValue(element, "1.8");
    }
}


//this is finding and waiting whhere to whrite the price for the sell
    const targetPage3 = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.price.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"]], targetPage3, timeout);
    const price_sell = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.price.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"]], targetPage3, {
        timeout,
        visible: true
    });


  
//this is finding and waiting whhere to whrite the price for the stop loss sell
    const targetPage4 = page2;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.sl.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage4, timeout);
    const sl_sell = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.limit.svelte-2euq27 > div.sl.svelte-2euq27 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage4, {
        timeout,
        visible: true
    });


    
while((new Date(new Date().getTime() + 10800000)+'').slice(22,24) !== '55'){}

    
//whriting and executing the orders for sell
let sell =  await page.evaluate(() => {
let omega = document.querySelector('div.content.svelte-1g4hfzg').innerText;
return parseFloat(omega.slice(0,7)) 
})
console.log(sell,sell - event_horizon)

sell = sell - event_horizon;
await typeIntoElement(sl_sell, (sell + event_horizon)+'');
    
await typeIntoElement(price_sell, sell+"");

await page2.evaluate(() => {document.querySelector('button.trade-button.svelte-16m7zpq').click()})  

await page2.close()

//whriting and executing the orders for buy
let buy =  await page.evaluate(() => {
let alpha = document.querySelector('div.content.svelte-1g4hfzg').innerText;
return parseFloat(alpha.slice(-7))
})
console.log(buy,buy + event_horizon)

buy = buy + event_horizon;
    
await typeIntoElement(sl_buy, (buy - event_horizon)+'');

await typeIntoElement(price_buy, buy+"");


await page.evaluate(() => {document.querySelector('button.trade-button.svelte-16m7zpq').click()}) 

{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/OK"], ["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.footer.svelte-1bmjno3 > button"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[3]/button"], ["text/OK"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/OK"], ["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.footer.svelte-1bmjno3 > button"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[3]/button"], ["text/OK"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 135.00694274902344,
            y: 18.041656494140625,
        },
    });
}



async function de(j,k){

 {   const special_timeout = 10000;   
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(2) > div:nth-child(7)"], ["xpath//html/body/div/div[6]/div/div[2]/div/div/div[2]/div[7]"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(2) > div:nth-child(7)"], ["xpath//html/body/div/div[6]/div/div[2]/div/div/div[2]/div[7]"]], targetPage, {
        special_timeout,
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
  

let tp;
if(j == 'sell'){ tp = k //- (event_horizon/2)
               }
else {tp = k //+ (event_horizon/2)  
     }
    
{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d.modify-form > div.limit.svelte-1anmsja > div.tp.svelte-1anmsja > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[4]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d.modify-form > div.limit.svelte-1anmsja > div.tp.svelte-1anmsja > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[4]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, tp+'')
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, tp+'');
    } else {
        await changeElementValue(element, tp+'');
    }
}

await page.evaluate(() => {document.querySelector('button.trade-button.svelte-16m7zpq').click()})
  
}
//await page.exposeFunction('de', de);


let how_many = '';
let processedValues = new Set();

async function processPage() {
  const result = await page.evaluate(() => {
    const blue = document.querySelector('div.svelte-7c7doc.blue');
    const red = document.querySelector('div.svelte-7c7doc.red');
    if (blue !== null || red !== null) {
      let what_is = document.querySelectorAll('div.svelte-7c7doc')[0].innerText;
      let price = document.querySelectorAll('div.td.svelte-1gisemh.right')[1].innerText;
      price = parseFloat(price.replace(/ /g, ''));
      return { whatIs: what_is, price: price };
    }
    return null;
  });

  if (result !== null) {//console.log(processedValues)
    if(!processedValues.has(result.whatIs)){
      await de(result.whatIs, result.price);
      processedValues.add(result.whatIs);
    }
  }
}

async function runLoop() {
  while(new Date(new Date().getTime() + 10800000) < black_hole) {
    await processPage();
  }
//await a();
await browser.close();
}

runLoop();


async function a(){

const s = await page.evaluate(() => {const d = document.querySelector('div.svelte-7c7doc.red');
if(d !== null){return d.innerText} else {return null}  })
//console.log(s)

if( s !== null){
await x();
}


const f = new Date(new Date().getTime() + 10800000+2000);
while(new Date(new Date().getTime() + 10800000) < f){}
const v = await page.evaluate(() => {const d = document.querySelector('div.table.svelte-1y5t23d');
if(d !== null){return d.innerText} else {return null}  })
console.log(v)
  
if( v.includes('buy')){
await x();
}


await browser.close();


async function x(){
   {   const special_timeout = 10000;   
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(2) > div:nth-child(7)"], ["xpath//html/body/div/div[6]/div/div[2]/div/div/div[2]/div[7]"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(2) > div:nth-child(7)"], ["xpath//html/body/div/div[6]/div/div[2]/div/div/div[2]/div[7]"]], targetPage, {
        special_timeout,
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
await page.click("body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.buttons.svelte-4kbk6d > button.trade-button.svelte-16m7zpq.orange");

{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/OK"], ["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.footer.svelte-1bmjno3 > button"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[3]/button"], ["text/OK"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/OK"], ["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.footer.svelte-1bmjno3 > button"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[3]/button"], ["text/OK"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 125.00694274902344,
            y: 16.041656494140625,
        },
    });
}
}
  
}

//await browser.close()


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
