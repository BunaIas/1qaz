
const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            "width": 764,
            "height": 568
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
        await scrollIntoViewIfNeeded([["aria/Accept", "aria/[role=\"generic\"]"], ["body > div > div > div.window.svelte-1927787.draggable > div > div.body.svelte-1927787 > div > div.button.svelte-yxtt66 > button > div"], ["xpath//html/body/div/div/div[2]/div/div[2]/div/div[3]/button/div"], ["text/Accept"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Accept", "aria/[role=\"generic\"]"], ["body > div > div > div.window.svelte-1927787.draggable > div > div.body.svelte-1927787 > div > div.button.svelte-yxtt66 > button > div"], ["xpath//html/body/div/div/div[2]/div/div[2]/div/div[3]/button/div"], ["text/Accept"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 14.6875,
                y: 4,
            },
        });
    
    }    
        
        
        
        
    {    
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Enter Login"], ["body > div > div > div.window.svelte-1927787.draggable > div > div.body.svelte-1927787 > div > div.content.svelte-1hrkl1v > form > span > input"], ["xpath//html/body/div/div/div[2]/div/div[2]/div/div[3]/form/span/input"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Enter Login"], ["body > div > div > div.window.svelte-1927787.draggable > div > div.body.svelte-1927787 > div > div.content.svelte-1hrkl1v > form > span > input"], ["xpath//html/body/div/div/div[2]/div/div[2]/div/div[3]/form/span/input"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "1051396799")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "1051396799");
        } else {
            await changeElementValue(element, "1051396799");
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Enter Password"], ["body > div > div > div.window.svelte-1927787.draggable > div > div.body.svelte-1927787 > div > div.content.svelte-1hrkl1v > form > div.layout.svelte-1bpvxjz > div:nth-child(1) > span > input"], ["xpath//html/body/div/div/div[2]/div/div[2]/div/div[3]/form/div[4]/div[1]/span/input"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Enter Password"], ["body > div > div > div.window.svelte-1927787.draggable > div > div.body.svelte-1927787 > div > div.content.svelte-1hrkl1v > form > div.layout.svelte-1bpvxjz > div:nth-child(1) > span > input"], ["xpath//html/body/div/div/div[2]/div/div[2]/div/div[3]/form/div[4]/div[1]/span/input"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "3Q5E3VJS1W")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "3Q5E3VJS1W");
        } else {
            await changeElementValue(element, "3Q5E3VJS1W");
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
                x: 47.84368896484375,
                y: 19.43402099609375,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["body > div > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div/div[4]/div/label/input"]], targetPage, timeout);
        const element = await waitForSelectors([["body > div > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div/div[4]/div/label/input"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 123.673583984375,
                y: 21.059024810791016,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["body > div > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div/div[4]/div/label/input"]], targetPage, timeout);
        const element = await waitForSelectors([["body > div > div.right-panel.svelte-moa9ns > div > label > input"], ["xpath//html/body/div/div[4]/div/label/input"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "ETH")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "ETH");
        } else {
            await changeElementValue(element, "ETH");
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["body > div > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-9tvg7q > div > div > div > div > button > span > span.description.svelte-6nbdup"], ["xpath//html/body/div/div[4]/div/div[2]/div/div/div/div/button/span/span[2]"]], targetPage, timeout);
        const element = await waitForSelectors([["body > div > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-9tvg7q > div > div > div > div > button > span > span.description.svelte-6nbdup"], ["xpath//html/body/div/div[4]/div/div[2]/div/div/div/div/button/span/span[2]"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 69.673583984375,
                y: 4.041664123535156,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["body > div > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-9tvg7q > div > div > div > div > button > span > span.description.svelte-6nbdup"], ["xpath//html/body/div/div[4]/div/div[2]/div/div/div/div/button/span/span[2]"]], targetPage, timeout);
        const element = await waitForSelectors([["body > div > div.right-panel.svelte-moa9ns > div > div.wrapper.svelte-9tvg7q > div > div > div > div > button > span > span.description.svelte-6nbdup"], ["xpath//html/body/div/div[4]/div/div[2]/div/div/div/div/button/span/span[2]"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 76.673583984375,
                y: 1.0416641235351562,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div"], ["xpath//html/body/div/div[5]/div/div[2]/div/div/div[3]/div"], ["text/You don’t have any positions "]], targetPage, timeout);
        const element = await waitForSelectors([["body > div > div.bot-panel.svelte-1l3uzb9 > div > div.wrapper.svelte-14lspcp > div > div > div:nth-child(3) > div"], ["xpath//html/body/div/div[5]/div/div[2]/div/div/div[3]/div"], ["text/You don’t have any positions "]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            button: 'right',
            offset: {
                x: 579.0069427490234,
                y: 53.55206298828125,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/New Order"], ["body > div:nth-child(4) > div > div > button"], ["xpath//html/body/div[2]/div/div/button"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/New Order"], ["body > div:nth-child(4) > div > div > button"], ["xpath//html/body/div[2]/div/div/button"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 16.01385498046875,
                y: 26.0103759765625,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div"], ["xpath//html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div"]], targetPage, timeout);
        const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div"], ["xpath//html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 140.01041412353516,
                y: 17.909713745117188,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, timeout);
        const element = await waitForSelectors([["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.form.svelte-1y3frqs > div.market.svelte-1v7oo56 > div.volume.svelte-1v7oo56 > div > label > input[type=text]"], ["xpath//html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[1]/div[1]/div[1]/div/label/input"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 140.99999618530273,
                y: 4.9270782470703125,
            },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([["aria/Buy by Market"], ["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.footer-row.svelte-o8v493 > button:nth-child(2)"], ["xpath//html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[3]/button[2]"], ["text/Buy by Market"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Buy by Market"], ["body > div.layout.svelte-ezbv2f > div.left-panel.svelte-1du3hrq > div > div.wrap.svelte-1du3hrq > div > div.content.svelte-1y3frqs > div.footer-row.svelte-o8v493 > button:nth-child(2)"], ["xpath//html/body/div[1]/div[3]/div/div[2]/div/div[2]/div[3]/button[2]"], ["text/Buy by Market"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 70.17707824707031,
                y: 9.9930419921875,
            },
        });
    }

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
