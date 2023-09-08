

const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch({  headless: 'new',   });

    
///////////////////////////////////////////////////////////////////////////////////////////////
//this where econ and inv part start and gather the information where to what to look and where 
    
let singularity = "2023-08-02 | 11:00 | 11:01 | 3  normal x EUR x 11:00 x HCOB Manufacturing PMI Flash JUL x 43.5 x 43.4 nor eco |, normal x EUR x 11:00 x HCOB Composite PMI Flash JUL x 49.7 x 49.9 nor eco |, normal x EUR x 11:00 x HCOB Services PMI Flash JUL x 51.5 x 52 nor eco |"

 const page4 = await browser.newPage();


async function econ() {
 
  const page2 = await browser.newPage();

  await page2.setCookie({
    name: 'calendar-countries',
    value: 'aus,can,emu,eun,fra,deu,ita,jpn,esp,gbr,usa,wld,opc,aut,bel,fin,grc,irl,nld,nzl,prt,swe,che,isl',
    domain: 'tradingeconomics.com/calendar',
    path: '/calendar',
  });


  let quqaracha = singularity.slice(29, 30);
  if (quqaracha == '3') {
    quqaracha = '180';
  } else if (quqaracha == '2') {
    quqaracha = '120';
  }

  await page2.setCookie({
    name: 'cal-timezone-offset',
    value: quqaracha,
    domain: 'tradingeconomics.com/calendar',
    path: '/calendar',
  });

let count = 0;
let count2 = 0;
let url = [];

  // Create a Promise that resolves with the sid value
return new Promise(async (resolve, reject) => {
await page2.setRequestInterception(true);

page2.on('request', async (request) => {
  if (count == 0) {
        
    if (request.url().includes('https://live.tradingeconomics.com/socket.io/') && request.url().includes('sid'))
      { request.continue();
        url.push(request.url());
        count++;
      } 
      else {request.continue();}
        
  } 
  else {request.abort();}

 if (url[0] !== undefined && count2 == 0) {
  count2++;
  let sid = url[0].split('sid=')[1];
  //console.log(sid)
  resolve(sid); 
}
  
});//this is for page2.on

    await page2.goto('https://tradingeconomics.com/calendar');
  });//this is for the promise 
}

    
let sid = await econ();
await page4.goto("https://live.tradingeconomics.com/socket.io/?key=20220413&url=%2Fcalendar&EIO=4&transport=polling&t=OcoSn9l&sid="+sid)


console.log(sid)
let t = new Date(new Date().getTime() + 10800000+3000);
while(new Date(new Date().getTime() + 10800000) <t){}

//await browser.close();



let connectWebSocket = () => {
  let ws = new  WebSocket('wss://live.tradingeconomics.com/socket.io/?key=20220413&url=%2Fcalendar&EIO=4&transport=websocket&sid='+sid);

  ws.on('open', () => {
    console.log('Econ webSocket connected');
    ws.send('2probe')
    ws.send('5')
  });

  ws.on('message', (data) => {
    data = data.toString('utf-8');
    console.log(data)
    console.log(new Date(new Date().getTime() + 10800000)) 
    if(data == '2')
    {ws.send('3')}
  });

  ws.on('error', (error) => {});

  ws.on('close', (code, reason) => {
    setTimeout(() => {
      console.log('Attempting to reconnect...');
      connectWebSocket();
    }, 1000);
  });
  
};

connectWebSocket()


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
