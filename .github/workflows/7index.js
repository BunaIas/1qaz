let singularity = process.argv[2];
//console.log(`My constant is: ${g.substring(0, 3)}`+"liotv");

const WebSocket = require('ws');
const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch({  headless: 'new', });

    
//let singularity = '2023-09-06 | 11:30 | 11:31 | 3  10:30 x GBP x Industrial Production (MoM) (Jun) x 50.5 x 327055 x 480814 x normal ||'

let drink = [];
let breath = [];
let the_way = [];
let forecast = [];
let actual = [];
  
singularity = singularity.slice(0, singularity.length - 3);
let chlorine = singularity.split(' || ');
chlorine.map(e => actual.push('xxx') )
  
for(let dead = 0; dead < chlorine.length; dead++){
  let mercury = chlorine[dead].split(' x ');
  forecast.push(mercury[3]);
  drink.push(mercury[4]);
  breath.push(mercury[5]);
  the_way.push(mercury[6]);
}
console.log(drink,breath,the_way,forecast,actual)

let hit_and_run = '';
for(let i = 0; i < breath.length; i++){
  hit_and_run = hit_and_run + 'event-'+breath[i]+':%%'
}
hit_and_run = hit_and_run.slice(0, hit_and_run.length - 2);
console.log(hit_and_run)

let hour_array = singularity.slice(13,18);

  
 const page = await browser.newPage();
    const timeout = 30000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            "width": 613,
            "height": 527
        })
    }
/*
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://mt5wademo.fftrader.cz/terminal");
        await Promise.all(promises);
    }
*/
await page.goto("https://mt5wademo.fftrader.cz/terminal")
    
{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/Accept", "aria/[role=\"generic\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.button.svelte-1wr2l3c > button > div"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[3]/button/div"], ["text/Accept"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Accept", "aria/[role=\"generic\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.button.svelte-1wr2l3c > button > div"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[3]/button/div"], ["text/Accept"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 59.6875,
            y: 7,
        },
    });
}


{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/Enter Login[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1xzq6fm > div.content.svelte-1xzq6fm > div > div > form > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/span/input"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Enter Login[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1xzq6fm > div.content.svelte-1xzq6fm > div > div > form > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/span/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "1051816055")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1051816055");
    } else {
        await changeElementValue(element, "1051816055");
    }
}


{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["aria/Enter Password[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1xzq6fm > div.content.svelte-1xzq6fm > div > div > form > div.layout.svelte-1bpvxjz > div:nth-child(1) > div > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[4]/div[1]/div/span/input"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Enter Password[role=\"textbox\"]"], ["body > div._portal > div > div.window.svelte-evog0x.draggable > div > div.body.svelte-evog0x > div > div.login-content.svelte-1xzq6fm > div.content.svelte-1xzq6fm > div > div > form > div.layout.svelte-1bpvxjz > div:nth-child(1) > div > span > input"], ["xpath//html/body/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/div/form/div[4]/div[1]/div/span/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "Y64YH64B9Z")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "Y64YH64B9Z");
    } else {
        await changeElementValue(element, "Y64YH64B9Z");
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
            x: 76.640625,
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

let come_down = singularity.slice(32);
let achilles = come_down.split(' x ');
let steel = achilles[1];
if(steel == 'EUR' || steel == 'GPB' || steel == 'AUD' || steel == 'NZD')
{steel = steel + "USD"}
else if(steel == 'JPY' || steel == 'CHF' || steel == 'SEK' )
{steel = 'USD'+ steel }
else if(steel == 'CAD')
{steel = 'AUD'+ steel }
else if (steel == 'USD')
{steel = "XAU" + steel}
//steel = 'XAUUSD';    
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
            x: 60.59375,
            y: 14,
        },
    });
}


// the first click is for to appear 0.1 than by deleting 0.1 you make a second click and than tha change part  
{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 119,
            y: 20,
        },
    });
}


{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        delay: 851.1000000000931,
        offset: {
            x: 113,
            y: 20,
        },
    });
}


{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "1.60")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1.60");
    } else {
        await changeElementValue(element, "1.60");
    }
}


   
/////////////////////////////////////////////////////////
// here starts the part where actual inv and econ is find   

if (steel.slice(0,3) == achilles[1])
{steel = 0}
else {steel = 1}

let rainbow;
    
//forecast = [2];
    
const forecastLength = forecast.length;
let y = 0;
let castron;


let gravity = new Date(singularity.slice(0,10)+'T'+hour_array+':25.000Z');
let  black_hole = new Date(singularity.slice(0,10)+'T'+hour_array+':59.000Z')


//gravity = new Date('2023-09-24T21:41:07.000Z');
//black_hole = new Date('2023-04-28T21:42:00.000Z');
//breath = [];
//drink = [];
//console.log(forecast)

console.log(new Date(new Date().getTime() + 3 * 60 * 60 * 1000));

//let g = 0;
    

for(let i = 0; i < 6; i++){
const wss = new WebSocket('wss://streaming.forexpros.com/echo/575/6tvwzssq/websocket' );


wss.on('open', () => {
  if(i == 5){ console.log('Inv webSocket connected'); }
  wss.send('{"_event":"bulk-subscribe","tzID":8,"message":"'+hit_and_run+'"}')
  wss.send('{"_event":"UID","UID":241357129}')  
});


const heartbeat = setInterval(() => {
    const message = '{"_event":"heartbeat","data":"h"}';
    wss.send(message);
  }, 6000);


wss.on('message', (data) => {
  /*
//console.log(data)
if(g==0){
  data = 'a["{\"message\":\"event-481287::{\\\"event_ID\\\":\\\"481287\\\",\\\"actual_color\\\":\\\"redFont\\\",\\\"rev_from_col\\\":\\\"blackFont\\\",\\\"previous\\\":\\\"1.7%\\\",\\\"forecast\\\":\\\"1.4%\\\",\\\"actual\\\":\\\"1.3%\\\",\\\"rev_from\\\":\\\"\\\"}\"}"]'
}
if(g==1){
  data = 'a["{\"message\":\"event-480214::{\\\"event_ID\\\":\\\"480214\\\",\\\"actual_color\\\":\\\"redFont\\\",\\\"rev_from_col\\\":\\\"blackFont\\\",\\\"previous\\\":\\\"3.0%\\\",\\\"forecast\\\":\\\"2.5%\\\",\\\"actual\\\":\\\"2.2%\\\",\\\"rev_from\\\":\\\"\\\"}\"}"]'
}
if(g==2){data = 'a["{\"message\":\"event-480213::{\\\"event_ID\\\":\\\"480213\\\",\\\"actual_color\\\":\\\"greenFont\\\",\\\"rev_from_col\\\":\\\"blackFont\\\",\\\"previous\\\":\\\"0.6%\\\",\\\"forecast\\\":\\\"0.0%\\\",\\\"actual\\\":\\\"0.4%\\\",\\\"rev_from\\\":\\\"\\\"}\"}"]'
}
  g++;
*/
data = data.toString();
if(data.includes('event-')){ 
  let event = data.split('event-');
  event = event[1].slice(0,6);
  if(breath.includes(event)){
    let index = breath.indexOf(event);
    if(actual[index] == 'xxx'){
      let f = '';
      for(let i = 0; i < data.length; i++){
        if(data[i] !== "\\" )
          { f = f + data[i]; }
      }
      let inv = f.split('"actual":"');
      actual[index] = parseFloat(inv[1]);
      if(!actual.includes('xxx')){
       // console.log(actual)
       //console.log(new Date(new Date().getTime() + 10800000));
       //console.log('inv');
        hope_2(actual);
     }
   }
 } 
}
});

}  


const pandora_box = setInterval(async () => {
if(new Date(new Date().getTime() + 10800000) > gravity)
  {process.exit()}
  }, 1000);


for(let i = 0; i < 5; i++){
    
const page5 = await browser.newPage();
const page2 = await browser.newPage();
async function econ(){
let quasar; 
let count = 0;
let count2 = 0;
return new Promise(async (resolve, reject) => {

 await page2.setCookie({
    name: 'calendar-countries',
    value: 'aus,can,emu,eun,fra,deu,ita,jpn,esp,gbr,usa,wld,opc,aut,bel,fin,grc,irl,nld,nzl,prt,swe,che,isl',
  domain: 'tradingeconomics.com/calendar', 
  path: '/calendar',
  });

await page2.setCookie({
    name: 'calendar-importance',
    value: '1',
    domain: 'tradingeconomics.com/calendar',
    path: '/calendar',
   
  });

await page2.setCookie({
    name: 'cal-custom-range',
    value: singularity.slice(0,10)+'|'+singularity.slice(0,10),
    domain: 'tradingeconomics.com/calendar',
    path: '/calendar',
   
  });
    
let quqaracha = singularity.slice(29,30);
if(quqaracha == '3'){quqaracha = '180'}
else if(quqaracha == '2'){quqaracha = '120'}
await page2.setCookie({
    name: 'cal-timezone-offset',
    value: quqaracha,
    domain: 'tradingeconomics.com/calendar',
    path: '/calendar',
   
  });
  
await page2.setRequestInterception(true);
page2.on('request',  (request) =>{
if(count == 0){
  if(request.url().includes('https://live.tradingeconomics.com/socket.io/?key=20220413&url=%2Fcalendar&EIO=4&transport=polling&t=') && request.url().includes('sid')){
    request.continue();
    quasar = request.url();
    count++;
  }
  else {request.continue()}
}
else{request.abort()}

if(quasar !== undefined && count2 == 0){
//console.log(quasar);
//page2.close();
resolve(quasar);
count2++;
}
  
  }); //this is for the page2.on

await page2.goto('https://tradingeconomics.com/calendar');

       });//this is for the promise          
}

let north_star = await econ();
await page5.goto(north_star);
//let f = await page5.content(); console.log(f);
let ursa_minor = north_star.split('sid=');
let cassiopeia = ursa_minor[1].slice(0,20);
//console.log(cassiopeia)


   
let connectWebSocket = async () => {

let ws = new  WebSocket('wss://live.tradingeconomics.com/socket.io/?key=20220413&url=%2Fcalendar&EIO=4&transport=websocket&sid='+cassiopeia);

 ws.on('open', () => {
    if(i == 4){ console.log('Econ webSocket connected'); }
    ws.send('2probe')
    ws.send('5');
    async function andromeda(){ await page2.close(); await page5.close();}
    andromeda();
});

 ws.on('message', (data) => {
/*
console.log(data)
if(g==0){
   data = '42["calendar",{"CalendarId":326475,"Date":"2023-08-31T22:00:00","Country":"New Zealand","Category":"ANZ Roy Morgan Consumer Confidence Index","Event":"ANZ Roy Morgan Consumer Confidence","Reference":"Aug","ReferenceDate":"2023-08-31T00:00:00","Source":null,"Actual":"85","Forecast":null,"TEForecast":"82","TEModel":null,"Previous":"83.7","Revised":null,"Currency":null,"Unit":null,"Ticker":"NZLARMCCI","Symbol":"NZLARMCCI","URL":"/new-zealand/anz-roy-morgan-consumer-confidence-index","Importance":1,"LastUpdate":"2023-08-31T22:04:31.91","Analyst":"Mojdeh Kazemi","DateSpan":0,"author":"mojdeh.kazemi                                     ","scrapper":1,"scrapped":0}]'
}
if(g==1){
  data = '42["calendar",{"CalendarId":"326396","Date":"2023-08-28T08:00:00","Country":"Euro Area","Category":"Loans to Private Sector","Event":"Loans to Companies YoY","Reference":"Jul","ReferenceDate":"2023-07-31T00:00:00","Source":null,"Actual":"2.2%","Forecast":"2.5%","TEForecast":"2.5%","TEModel":"joana.ferreira@TE","Previous":"3%","Revised":null,"Currency":null,"Unit":"%","Ticker":"EMUEVOLVLOATOPRISEC","Symbol":null,"URL":"/euro-area/loans-to-private-sector","Importance":1,"LastUpdate":"8/28/2023, 8:00:00 AM","Analyst":"Joana F","DateSpan":0,"author":"@E","scrapper":2,"db_source":"European Central Bank","appName":"scrapper-listener"}]'
}
if(g==2){data = '42["calendar",{"CalendarId":"326400","Date":2023-08-28T08:00:00","Country":"Euro Area","Category":"Money Supply M3","Event":"M3 Money Supply YoY","Reference":"Jul","ReferenceDate":"2023-07-31T00:00:00","Source":null,"Actual":"0.4%","Forecast":"0%","TEForecast":"0.1%","TEModel":"joana.ferreira@TE","Previous":"0.6%","Revised":null,"Currency":null,"Unit":"%","Ticker":"EMUEVOLVMONSUPM3","Symbol":null,"URL":"/euro-area/money-supply-m3","Importance":1,"LastUpdate":"8/28/2023, 8:00:02 AM","Analyst":"Yuliia","DateSpan":0,"author":"@E","scrapper":2,"db_source":"European Central Bank","appName":"scrapper-listener"}]'
}
  g++;
*/
data = data.toString();
let sailor = '';
for (let i = 0; i < data.length; i++) {
  if (data[i] !== '"') 
   { sailor = sailor + data[i]; }
}
if(sailor.includes('CalendarId:')){                
  let event = sailor.split('CalendarId:');
  event = event[1].slice(0,6);
  if(drink.includes(event)){
    let index = drink.indexOf(event);
    if(actual[index] == 'xxx'){
      let econ = sailor.split('Actual:');
      actual[index] = parseFloat(econ[1]);
      if(!actual.includes('xxx')){
        //console.log(actual)
        //console.log(new Date(new Date().getTime() + 10800000));
        //console.log('econ');
        hope_2(actual);
     }
   }
 } 
}
ws.send('3');
});

ws.on('error', (error) => { connectWebSocket(); }); 
  
}
connectWebSocket()

}


    
//actual = [ 0.4, 2.2, 1.3 ];
// hope(actual)  
async function hope_2(actual){
    while(y < forecastLength){

if(the_way[y] == 'normal'){
    
  if(actual[y] > forecast[y]){
    if(castron !== 'aspirator'){castron = 'televizor';} else {console.log('green and red'); process.exit(1)}
  }
  if(actual[y] < forecast[y]){
    if(castron !== 'televizor'){castron = 'aspirator';} else {console.log('green and red'); process.exit(2)} 
  }
}
else if(the_way[y] == 'backwards'){

  if(actual[y] < forecast[y]){
    if(castron !== 'aspirator'){castron = 'televizor';} else {console.log('green and red'); process.exit(1)}
  }
  if(actual[y] > forecast[y]){
    if(castron !== 'televizor'){castron = 'aspirator';} else {console.log('green and red'); process.exit(2)} 
  } 
}
    y++;
                      }

//console.log(castron)
if (castron == 'televizor' && steel == 0)
{await page.evaluate(() => {document.querySelectorAll('button.trade-button.svelte-16m7zpq')[1].click()}); 
rainbow = 'green'; }
else if (castron == 'televizor' && steel == 1)
{await page.evaluate(() => {document.querySelectorAll('button.trade-button.svelte-16m7zpq')[0].click()}); 
rainbow = 'red'; }
    
if (castron == 'aspirator' && steel == 0)
{ await page.evaluate(() => {document.querySelectorAll('button.trade-button.svelte-16m7zpq')[0].click()}); 
rainbow = 'red'; }
else if(castron == 'aspirator' && steel == 1)
{await page.evaluate(() => {document.querySelectorAll('button.trade-button.svelte-16m7zpq')[1].click()}); 
rainbow = 'green'; }

if(castron == undefined)
{console.log("everything's the same");  process.exit();}

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

clearInterval(pandora_box);
while(new Date(new Date().getTime() + 10800000) < black_hole){
  //trailing stop code 
}

await page.click("body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.buttons.svelte-4kbk6d > button.trade-button.svelte-16m7zpq.orange");
console.log(actual);
console.log(castron);
await browser.close();
process.exit();
}


    
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
