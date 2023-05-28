
const g = process.argv[2];
console.log(`My constant is: ${g.substring(0, 3)}`+"liot");

const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch();
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
        await changeSelectElement(element, "1051660671")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "1051660671");
    } else {
        await changeElementValue(element, "1051660671");
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
        await changeSelectElement(element, "2TJUMJUR9P")
    } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
        await typeIntoElement(element, "2TJUMJUR9P");
    } else {
        await changeElementValue(element, "2TJUMJUR9P");
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
    await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-9tvg7q > div > div > div > div > button > span > span.description.svelte-6nbdup"], ["xpath//html/body/div[2]/div[4]/div/div[2]/div/div/div/div/button/span/span[2]"], ["text/Gold Spot US"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-9tvg7q > div > div > div > div > button > span > span.description.svelte-6nbdup"], ["xpath//html/body/div[2]/div[4]/div/div[2]/div/div/div/div/button/span/span[2]"], ["text/Gold Spot US"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 40.1180419921875,
            y: 0.04166412353515625,
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
    await scrollIntoViewIfNeeded([["body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
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
        await scrollIntoViewIfNeeded([["body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
        const element = await waitForSelectors([["body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
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
    await scrollIntoViewIfNeeded([["body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.sl.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"]], targetPage, timeout);
    const element = await waitForSelectors([["body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.sl.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[2]/div/label/input"]], targetPage, {
        timeout,
        visible: true
    });
    await element.click({
        offset: {
            x: 49.999996185302734,
            y: 20.954849243164062,
        },
    });
}

    
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.sl.svelte-1v7oo56 > div > label > input[type=text]"], [".cls"]], targetPage, timeout);
        const element = await waitForSelectors([["body > div > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.sl.svelte-1v7oo56 > div > label > input[type=text]"], [".cls"]], targetPage, {
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

   const targetTime = new Date(g.slice(0, 10)+'T'+g.slice(13, 18)+':00.000+0'+g.slice(29,30)+':00');
   while (new Date() < targetTime){} 

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
