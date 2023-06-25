const g = process.argv[2];
console.log(`My constant is: ${g.substring(0, 3)}`+"liot");

const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch({  headless: 'new', });
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
            x: 57.30206298828125,
            y: 5.0867919921875,
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
        await changeSelectElement(element, "1051691335")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1051691335");
    } else {
        await changeElementValue(element, "1051691335");
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
        await changeSelectElement(element, "Y12DYDDZP2")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "Y12DYDDZP2");
    } else {
        await changeElementValue(element, "Y12DYDDZP2");
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

    {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div[2]/div[4]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div[2]/div[4]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "XAUU")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "XAUU");
    } else {
        await changeElementValue(element, "XAUU");
    }
}

    
    {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-1l0j9v8 > div > div > div > div > button > span > span.symbol.svelte-6nbdup"], ["xpath//html/body/div[2]/div[4]/div/div[2]/div/div/div/div/button/span/span[1]"], ["text/XAUUSD"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-1l0j9v8 > div > div > div > div > button > span > span.symbol.svelte-6nbdup"], ["xpath//html/body/div[2]/div[4]/div/div[2]/div/div/div/div/button/span/span[1]"], ["text/XAUUSD"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 16,
            y: 11,
        },
    });
}


    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Create New Order"], ["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div > div.buttons.svelte-4x7axh > button"], ["xpath//html/body/div/div[5]/div/div[2]/div/div/div[3]/div/div[3]/button"], ["text/Create New Order"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Create New Order"], ["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div > div.buttons.svelte-4x7axh > button"], ["xpath//html/body/div/div[5]/div/div[2]/div/div/div[3]/div/div[3]/button"], ["text/Create New Order"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            delay: 4000,
            offset: {
                x: 63.635406494140625,
                y: 15.34027099609375,
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
        offset: {
            x: 99,
            y: 19,
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


    {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.tp.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.tp.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 46,
            y: 21,
        },
    });
}


    {
    const targetPage = page;
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.tp.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-4kbk6d > div.form.svelte-4kbk6d > div.market.svelte-1v7oo56 > div.tp.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[2]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[3]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    const inputType = await element.evaluate(el=>el.type);
    if (inputType === 'select-one') {
        await changeSelectElement(element, "1")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1");
    } else {
        await changeElementValue(element, "1");
    }
}



let singularity = "2023-06-25 | 08:00 | 02:50 | 3  JPY x 08:00 x Leading Index x 97.6 x 97.7 nor inv, JPY x 08:00 x Leading Index (MoM) x 50.1 x 52.1 nor inv";

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
    value: '2023-06-19|2023-06-19',
    domain: 'tradingeconomics.com/calendar',
    path: '/calendar',
   
  });

await page2.setCookie({
    name: 'cal-timezone-offset',
    value: '180',
    domain: 'tradingeconomics.com/calendar',
    path: '/calendar',
   
  });

await page2.setRequestInterception(true);
  page2.on('request', (request) => {
    if ( request.resourceType() === 'script' || request.resourceType() === 'document'  || request.resourceType() === 'websocket'  || request.resourceType() === 'stylesheet') {
    
      request.continue();
    } else {
      request.abort();
    }
  });

await page2.goto("https://tradingeconomics.com/calendar")



const page3 = await browser.newPage();

await page3.setCookie({
    name: '__cflb',
    value: '02DiuGRugds2TUWHMkkPGro65dgYiP188Y2cwPksrSqKz',
    domain: 'www.investing.com/economic-calendar/',
    path: '/economic-calendar/',
   
  });

await page3.setCookie({
    name: 'ses_id',
    value: 'Yy0yczU6Nj5jJ2FnN2ZkYmc3PmYzMWFkZmZubzI8YHYxJT4wM2Q1czY5PXMzMGN%2FYGAwNGZlMWtnYzM9NTg3amNgMmg1ZjY4Y2FhOzcwZGRnMz40MzNhYmYxbmkyZ2BtMT8%2BYDM1NTY2aD1kMz9jP2ByMCxmIjEgZzUzYzV0N3BjbDJzNWU2bmM9YWs3YGRkZ2U%2BZTM1YWtmZm5lMjRgeDF6',
    domain: 'www.investing.com/economic-calendar/',
    path: '/economic-calendar/',
   
  });


 await page3.setRequestInterception(true);
  page3.on('request', (request) => {
    if ( request.resourceType() === 'script' || request.resourceType() === 'document'  || request.resourceType() === 'websocket' || request.resourceType() === 'stylesheet' ) {
    
      request.continue();
    } else {
      request.abort();
    }
  });

await page3.goto('https://www.investing.com/economic-calendar/' )
/*for request interception
 "script" | "image" | "document" | "stylesheet" | "media" | "font" | "texttrack" | "xhr" | "fetch" | "prefetch" | "eventsource" | "websocket" | "manifest" | "signedexchange" | "ping" | "cspviolationreport" | "preflight" | "other"
*/


function dupliquer3(z,zorro){
let tornado;
if (!zorro){ tornado = z.filter((sword, index) => z.indexOf(sword) !== index); }
else { tornado = z.filter((mask) => zorro.includes(mask)); }
//console.log(tornado)
return tornado; 
}


let forecast = [];
let hour_array = singularity.slice(13,18);


let array2 = [];
let econ_prev = []

let array3 = [];
let inv_prev =  [];

let creation = singularity.slice(32);
let universe = creation.split(', ');
for(let cooling = 0; cooling < universe.length; cooling++){
    if (universe[cooling].includes('eco')){
     let dark_energy = universe[cooling].split(' x ');
      array2.push(dark_energy[2]);
      forecast.push(dark_energy[3]);
      econ_prev.push(dark_energy[4].slice(0,-8))
    }
    else if(universe[cooling].includes('inv')){
      let dark_energy = universe[cooling].split(' x ');
      array3.push(dark_energy[2]);
      forecast.push(dark_energy[3]);
      inv_prev.push(dark_energy[4].slice(0,-8))
    }
}
//console.log(hour_array, array2 , econ_prev , array3, inv_prev, forecast)


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
//console.log(drink)


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
     let tbody = document.querySelectorAll('tbody')[2];
  
     let hour_inv = [...tbody.querySelectorAll('tr')].slice(1).map( tr => { let td =tr.querySelectorAll('td')[0]; if(td !== undefined ) {return td.textContent}  })

     let  name_inv = [...tbody.querySelectorAll('tr')].slice(1).map( tr => { let td =tr.querySelectorAll('td')[3]; if(td !== undefined ) {return td.textContent.trim()}  })
  
     let true_inv = [];
     hour_inv.map((e,index) => true_inv.push(e+' '+name_inv[index]));
     let prev_inv = [...tbody.querySelectorAll('tr')].slice(1).map( tr => { let td =tr.querySelectorAll('td')[6]; if(td !== undefined ) {return td.textContent}  });
  
     let inv_whith_prev = [];
     true_inv.map((e,index) => inv_whith_prev.push(e+' '+extrage(prev_inv[index])) );
  
      let td = [...tbody.querySelectorAll('tr')].slice(1).map(tr => tr.querySelectorAll('td').length);
      let cowboy = 1;
      let td_inv = td.map((e,index) => {cowboy = cowboy + td[index]; return cowboy  })
  
     return [true_inv , inv_whith_prev, td_inv]
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

    
   const targetTime = new Date(g.slice(0, 10)+'T'+g.slice(13, 18)+':00.000+0'+g.slice(29,30)+':00');
   const a = new Date(g.slice(0, 10)+'T'+g.slice(13, 18)+':00.000Z');
   while (new Date(new Date().getTime() + 3 * 60 * 60 * 1000) < a ){} 
    
console.log(new Date(new Date().getTime() + 3 * 60 * 60 * 1000));
    
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
   
 const targetTimee = new Date(g.slice(0, 10)+'T'+g.substring(21, 26)+':00.000+0'+g.slice(29,30)+':00');
 while (new Date() < targetTimee){} 


  await page.click("body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.buttons.svelte-1y3frqs > button.trade-button.svelte-n76poj.orange.withText")

  
   
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
