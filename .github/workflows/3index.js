let singularity = process.argv[2];
//console.log(`My constant is: ${g.substring(0, 3)}`+"liotv");

const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch({  headless: 'new', });

    
///////////////////////////////////////////////////////////////////////////////////////////////
//this where econ and inv part start and gather the information where to what to look and where 
    
singularity = '2023-07-18 | 13:00 | 01:46 | 3  NZD x 01:45 x Resi Prop Prices (MoM) (May) x 1 x -1.7 nor inv |, USD x 15:30 x Residential Property Prices YoY MAY x 0.5 x 0.3 nor eco |';

const page2 = await browser.newPage()

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

await page2.goto("https://tradingeconomics.com/calendar")


    
const page3 = await browser.newPage();

await page3.goto('https://sslecal2.investing.com/?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_credit,_centralBanks,_confidenceIndex,_balance,_Bonds&importance=1,2,3&features=datepicker,timezone,timeselector,filters&countries=25,54,34,6,72,71,22,17,51,33,10,35,43,38,26,9,12,4,5&calType=day&timeZone=17&lang=1%22%20width=%22650%22%20height=%22467%22%20frameborder=%220%22%20allowtransparency=%22true%22%20marginwidth=%220%22%20marginheight=%220%22%3E%3C/iframe%3E%3Cdiv%20class=%22poweredBy%22%20style=%22font-family:%20Arial,%20Helvetica,%20sans-serif;%22%3E%3Cspan%20style=%22font-size:%2011px;color:%20#333333;text-decoration:%20none;%22%3EReal%20Time%20Economic%20Calendar%20provided%20by%20%3Ca%20href=%22https://www.investing.com/%22%20rel=%22nofollow%22%20target=%22_blank%22%20style=%22font-size:%2011px;color:%20#06529D;%20font-weight:%20bold;%22%20class=%22underline_link%22%3EInvesting.com%3C/a%3E.%3C/span%3E%3C/div%3E')


function dupliquer3(z,zorro){
let tornado;
if (!zorro){ tornado = z.filter((sword, index) => z.indexOf(sword) !== index); }
else { tornado = z.filter((mask) => zorro.includes(mask)); }
//console.log(tornado)
return tornado; 
}


let hour_array = singularity.slice(13,18);


let array2 = [];
let econ_prev = []
let econ_forecast = [];
    
let array3 = [];
let inv_prev =  [];
let inv_forecast = [];
    
let creation = singularity.slice(32);
creation = creation.slice(0,-2);
let universe = creation.split(' |, ');
    
for(let cooling = 0; cooling < universe.length; cooling++){
    if (universe[cooling].includes('eco')){
     let dark_energy = universe[cooling].split(' x ');
      array2.push(dark_energy[2]);
      econ_forecast.push(parseFloat(dark_energy[3]));
      econ_prev.push(dark_energy[4].slice(0,-8))
    }
    else if(universe[cooling].includes('inv')){
      let dark_energy = universe[cooling].split(' x ');
      array3.push(dark_energy[2]);
      inv_forecast.push(parseFloat(dark_energy[3]));
      inv_prev.push(dark_energy[4].slice(0,-8))
    }
}
let forecast = [...econ_forecast,...inv_forecast];
console.log(hour_array, array2 , econ_prev , array3, inv_prev, forecast)


let econ =  await page2.evaluate(() => {
  
const the_first_string = ['0','1', '2', '3','4','5','6','7','8','9','A','P','M',':'];
const uii = ['0','1', '2', '3','4','5','6','7','8','9','.','-'];
function extrage(x,y){
let garling = 0;
let m = '';
while (garling <= x.length){
  
if( y == 0 ){
  if (the_first_string.includes(x[garling])) {
     m = m + x[garling];                     }
            } 
else {
  if (uii.includes(x[garling])) {
     m = m + x[garling];        }
     }
  
     garling++;
                         }
    return m 
  } 
    
function change_the_hour_format_because_god_forbid_to_have_normal_hours_but_still_tanks_for_the_data(x){
  if(x.slice(5) == 'AM' && x.slice(0,2) == '12' ){ x = '00' + x.slice(2,5); return x }
  else {
if(x.slice(5) == 'PM' && x.slice(0,2) !== '12'){
  x = 12 + parseFloat(x.slice(0,2))  + x.slice(2)
    return x.slice(0,5)
}
else {return x.slice(0,5) }  
  }
 }   
    const tbody = document.querySelectorAll('tbody')[1]; 
    const tr = [...tbody.querySelectorAll('tr')];
    let hour = [];
    tr.map(tr => { let r = tr.querySelectorAll('td')[0]; return hour.push(r.innerText)  })
    let hour_econ = [];
    hour.filter((e,index) => { if(index % 2 == 0){ return hour_econ.push( change_the_hour_format_because_god_forbid_to_have_normal_hours_but_still_tanks_for_the_data(extrage(e,0)) )  }  })

    let name_econ = [];
    tr.map(tr => { let r = tr.querySelectorAll('td')[4]; if(r !== undefined ){return name_econ.push(r.innerText)}  });

   let true_econ = hour_econ.map((e,index) => {return e+' '+name_econ[index]})

   let prev_econ = [];
   tr.map(tr => { let r = tr.querySelectorAll('td')[6]; if(r !== undefined ){return prev_econ.push(extrage(r.innerText)) }  });
  
  let econ_whith_prev = true_econ.map((e,index) => {return e+' '+prev_econ[index]})
  
  let td_econ = [...document.querySelectorAll('span#actual')].map((actual,index) => {return index });

  return [true_econ , econ_whith_prev,td_econ]
});


let [name_econ , econ_whith_prev ,td_econ] = econ;
let drink = [];
  for (let arsen = 0; arsen < array2.length; arsen++){
   let plumb = [ hour_array+' '+array2[arsen] ];
    
if(dupliquer3(name_econ,plumb).length == 1){

     if(name_econ.includes(hour_array+' '+array2[arsen]))
     {let mercury = td_econ[ name_econ.indexOf(hour_array+' '+array2[arsen]) ];
      drink.push(mercury)
     }
                                          }
else {let plumb = [ hour_array+' '+array2[arsen]+' '+econ_prev[arsen] ];
       if(dupliquer3(econ_whith_prev,plumb).length == 1){
        
         if(econ_whith_prev.includes(plumb[0]));
          {let mercury = td_econ[ econ_whith_prev.indexOf(plumb[0]) ];
           drink.push(mercury)
          } 
                                                        }
     }    
  }
console.log(drink)


let inv = await page3.evaluate(() => {
  
const uii = ['0','1', '2', '3','4','5','6','7','8','9','.','-'];
function extrage(x){
let garling = 0;
let m = '';
if(x !== undefined){
  while (garling <= x.length){
  
    if (uii.includes(x[garling])) 
      {m = m + x[garling]; }       
      garling++;
                           }
      return m 
                             }
else {return 'undefined'}
  } 
  let tbody = document.querySelectorAll('tbody')[4];

  let hour_inv = [...tbody.querySelectorAll('tr')].slice(1).map( tr => { 
    if(tr.querySelectorAll('td')[6])
     {return tr.querySelectorAll('td')[0].textContent;}  })
  hour_inv = hour_inv.filter((e) => {if(e !== null){return e} })

  let  name_inv = [...tbody.querySelectorAll('tr')].slice(1).map( tr => { 
    if(tr.querySelectorAll('td')[6])
     {let td =tr.querySelectorAll('td')[3]; if(td !== undefined ) {return td.textContent.trim()}} })
  name_inv = name_inv.filter((e) => {if(e !== null){return e} });

  let true_inv = [];
  hour_inv.map((e,index) => true_inv.push(e+' '+name_inv[index]));

  let prev_inv = [...tbody.querySelectorAll('tr')].slice(1).map( tr => {  
    if(tr.querySelectorAll('td')[6])
     {let td =tr.querySelectorAll('td')[6]; if(td !== undefined ) {return td.textContent}}  });
  prev_inv = prev_inv.filter((e,index) => {if(e !== null){return e} })

  let inv_whith_prev = [];
  true_inv.map((e,index) => inv_whith_prev.push(e+' '+extrage(prev_inv[index])) );

   let number = 59;
   let seven  = [...tbody.querySelectorAll('tr')].slice(1).map(tr => {let old = 
   tr.querySelectorAll('td').length;
   number = old + number;                                                               
   if(tr.querySelectorAll('td')[6]) 
     {return number}} );
   let td_inv = seven.filter(e => {if(e !== null){return e}})
  
  return [true_inv,inv_whith_prev,td_inv];
} );


let [name_inv , inv_whith_prev , td_inv] = inv;
let breath = [];
  for (let i = 0; i < array3.length; i++){
   let chlorine = [hour_array+' '+array3[i]]; 
    
if(dupliquer3(name_inv, chlorine).length == 1){
     
    if (name_inv.includes(hour_array+' '+array3[i]))
     { let poison = td_inv[ name_inv.indexOf(hour_array+' '+array3[i]) ];
       breath.push(poison); 
     }                 
      }
  
else{
chlorine =[chlorine[0]+' '+inv_prev[i]];
  
if(dupliquer3(inv_whith_prev,chlorine).length == 1){
  
      let poison = td_inv[ inv_whith_prev.indexOf(chlorine[0] ) ];
       breath.push(poison);
           } 
    }
}
console.log(breath)

    
if(array2.length !== drink.length || array3.length !== breath.length)
{process.exit(-1)}

//////////////////////////////////////////////////////////////////////////////////////////    
// here econ and inv stops and the result is three arays, forecast and inv and econ arrays
//which contains the number of the element which contains actual



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
        await changeSelectElement(element, "1051749370")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1051749370");
    } else {
        await changeElementValue(element, "1051749370");
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
        await changeSelectElement(element, "BF95YQMUJB")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "BF95YQMUJB");
    } else {
        await changeElementValue(element, "BF95YQMUJB");
    }
}

    
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Connect to account[role=\"button\"]"], ["body > div > div > div.window.svelte-1927787.draggable > div > div.body.svelte-1927787 > div > div.content.svelte-1hrkl1v > form > div.footer.svelte-1mvuz76 > button"], ["xpath//html/body/div/div/div[2]/div/div[2]/div/div[3]/form/div[7]/button"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Connect to account[role=\"button\"]"], ["body > div > div > div.window.svelte-1927787.draggable > div > div.body.svelte-1927787 > div > div.content.svelte-1hrkl1v > form > div.footer.svelte-1mvuz76 > button"], ["xpath//html/body/div/div/div[2]/div/div[2]/div/div[3]/form/div[7]/button"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 71.34375,
                y: 17.43402099609375,
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

let steel = singularity.slice(32,35);
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
    await scrollIntoViewIfNeeded([["aria/Create New Order"], ["body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div > div.buttons.svelte-4x7axh > button"], ["xpath//html/body/div[2]/div[6]/div/div[2]/div/div/div[3]/div/div[3]/button"], ["text/Create New Order"]], targetPage, timeout);
    const element = await waitForSelectors([["aria/Create New Order"], ["body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div > div.buttons.svelte-4x7axh > button"], ["xpath//html/body/div[2]/div[6]/div/div[2]/div/div/div[3]/div/div[3]/button"], ["text/Create New Order"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 64.59375,
            y: 15,
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
            x: 103.99999618530273,
            y: 18.927078247070312,
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
        delay: 549.9000000059605,
        offset: {
            x: 82.99999618530273,
            y: 17.927078247070312,
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
        await changeSelectElement(element, "1.50")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1.50");
    } else {
        await changeElementValue(element, "1.50");
    }
}


    
/////////////////////////////////////////////////////////
// here starts the part where actual inv and econ is find   

if (steel.slice(0,3) == singularity.slice(32,35))
{steel = 0}
else {steel = 1}

let rainbow;
    
//forecast = [2];
    
const forecastLength = forecast.length;
const r = '0123456789.-'
let y =0;
let castron;


let gravity = new Date(singularity.slice(0,10)+'T'+hour_array+':07.000Z');
let  black_hole = new Date(singularity.slice(0,10)+'T'+hour_array+':59.000Z')


//gravity = new Date('2023-09-24T21:41:07.000Z');
//black_hole = new Date('2023-04-28T21:42:00.000Z');
//breath = [];
//drink = [];
//console.log(forecast)

console.log(new Date(new Date().getTime() + 3 * 60 * 60 * 1000));
    
while ( new Date(new Date().getTime() + 10800000) < gravity ){
 
let actual = await Promise.all([
...drink.map(k => page2.evaluate((k) => document.querySelectorAll('span#actual')[k].textContent,k)),
...breath.map(k => page3.evaluate((k) => document.querySelectorAll('td')[k].textContent,k))
]);

//console.log(actual)
if (!actual.includes('') && !actual.includes('\u00A0') ){

 while(y < forecastLength){

while(!r.includes(actual[y][0])){
  actual[y] = actual[y].slice(1)
}
actual[y] = parseFloat(actual[y]);

     
  if(actual[y] > forecast[y]){
    if(castron !== 'aspirator'){castron = 'televizor';} else {console.log('green and red'); process.exit(1)}
               }
  
  if(actual[y] < forecast[y]){
    if(castron !== 'televizor'){castron = 'aspirator';} else {console.log('green and red'); process.exit(2)}
               }

    y++;
                      }
    
//console.log(castron)
if (castron == 'televizor' && steel == 0)
{ await page.click('aria/Buy by Market'); rainbow = 'green'; }
else if (castron == 'televizor' && steel == 1)
{await page.click('aria/Sell by Market'); rainbow = 'red'; }
    
if (castron == 'aspirator' && steel == 0)
{ await page.click('aria/Sell by Market'); rainbow = 'red'; }
else if(castron == 'aspirator' && steel == 1)
{await page.click('aria/Buy by Market'); rainbow = 'green'; }

if(castron == undefined)
{console.log("everything's the same");  break}
    
 console.log( new Date(new Date().getTime() + 10800000))
    
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
    
    
let stop =  await page.evaluate(() => {
let god = document.querySelector('body > div.layout.svelte-ezbv2f > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(2) > div:nth-child(5)').innerText;
let alpha = 0;
let omega = '';
while(alpha < god.length){
 if(god[alpha] !== ' ')
  {omega = omega + god[alpha]}
alpha++;
                      }
return parseFloat(omega)
})

if(singularity.slice(32,35) == 'USD'){
if(rainbow == "green")
{stop = stop - 30}
else if(rainbow == "red")
{stop = stop + 30}
//console.log(stop)         
                                     }
else {
if(rainbow == "green")
{stop = stop - 1}
else if(rainbow == "red")
{stop = stop + 1}
//console.log(stop)
     }
  
{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d.modify-form > div.limit.svelte-1anmsja > div.volume.svelte-1anmsja > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d.modify-form > div.limit.svelte-1anmsja > div.volume.svelte-1anmsja > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 49,
            y: 20,
        },
    });
}

{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d.modify-form > div.limit.svelte-1anmsja > div.sl.svelte-1anmsja > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d.modify-form > div.limit.svelte-1anmsja > div.sl.svelte-1anmsja > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 48,
            y: 20,
        },
    });
}

{
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d.modify-form > div.limit.svelte-1anmsja > div.sl.svelte-1anmsja > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d.modify-form > div.limit.svelte-1anmsja > div.sl.svelte-1anmsja > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, stop+"")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, stop+"");
    } else {
        await changeElementValue(element, stop+"");
    }
}

await page.click("aria/Modify");

    
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
    
while(new Date(new Date().getTime() + 10800000) < black_hole){
  //trailing stop code 
}

await page.click("body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.buttons.svelte-4kbk6d > button.trade-button.svelte-16m7zpq.orange");
console.log(actual);
console.log(castron);
break                                             
                                                        }


}

/*
   const a = new Date(g.slice(0, 10)+'T'+g.slice(13, 18)+':00.000Z'); 
   while (new Date(new Date().getTime() + 3 * 60 * 60 * 1000) < a ){} 
    
   await page.click('aria/Buy by Market');

    
{      
        const targetPage = page;
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
   
 const targetTimee = new Date(g.slice(0, 10)+'T'+g.substring(21, 26)+':00.000Z');
 while (new Date(new Date().getTime() + 3 * 60 * 60 * 1000) < targetTimee){} 


  await page.click("body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.buttons.svelte-4kbk6d > button.trade-button.svelte-16m7zpq.orange")
*/
  
   
await browser.close();

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
