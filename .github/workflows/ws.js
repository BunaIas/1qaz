const puppeteer = require('puppeteer');
// v13.0.0 or later

(async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);
    
    await page.setCookie({
    name: 'cookie_name',
    value: 'cookie_value',
    domain: 'mt5.ftmo.com'
  });

    {
        const targetPage = page;
        await targetPage.setViewport({
            "width": 811,
            "height": 657
        })
    }
    
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://mt5.ftmo.com/");
        await Promise.all(promises);
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["aria/Accept"], ["#accept"], ["xpath///*[@id=\"accept\"]"], ["text/Accept"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Accept"], ["#accept"], ["xpath///*[@id=\"accept\"]"], ["text/Accept"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 34.75,
                y: 10.5,
            },
        });
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["aria/Login:"], ["#login"], ["xpath///*[@id=\"login\"]"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Login:"], ["#login"], ["xpath///*[@id=\"login\"]"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 50,
                y: 11,
            },
        });
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["aria/Login:"], ["#login"], ["xpath///*[@id=\"login\"]"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Login:"], ["#login"], ["xpath///*[@id=\"login\"]"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 49,
                y: 10,
            },
        });
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["aria/Login:"], ["#login"], ["xpath///*[@id=\"login\"]"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Login:"], ["#login"], ["xpath///*[@id=\"login\"]"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "1051388982")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "1051388982");
        } else {
            await changeElementValue(element, "1051388982");
        }
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["aria/Password:"], ["#password"], ["xpath///*[@id=\"password\"]"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Password:"], ["#password"], ["xpath///*[@id=\"password\"]"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 38,
                y: 10,
            },
        });
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["aria/Password:"], ["#password"], ["xpath///*[@id=\"password\"]"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/Password:"], ["#password"], ["xpath///*[@id=\"password\"]"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "TDQU2MJBME")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "TDQU2MJBME");
        } else {
            await changeElementValue(element, "TDQU2MJBME");
        }
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["html > body > div.page-window.modal.login-form > div > div.b > select"], ["xpath///*[@id=\"server\"]"]], targetPage, timeout);
        const element = await waitForSelectors([["html > body > div.page-window.modal.login-form > div > div.b > select"], ["xpath///*[@id=\"server\"]"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 147,
                y: 12,
            },
        });
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["html > body > div.page-window.modal.login-form > div > div.b > select"], ["xpath///*[@id=\"server\"]"]], targetPage, timeout);
        const element = await waitForSelectors([["html > body > div.page-window.modal.login-form > div > div.b > select"], ["xpath///*[@id=\"server\"]"]], targetPage, {
            timeout,
            visible: true
        });
        const inputType = await element.evaluate(el=>el.type);
        if (inputType === 'select-one') {
            await changeSelectElement(element, "FTMO-Demo")
        } else if (["textarea", "text", "url", "tel", "search", "password", "number", "email"].includes(inputType)) {
            await typeIntoElement(element, "FTMO-Demo");
        } else {
            await changeElementValue(element, "FTMO-Demo");
        }
    }
    {
        const target = await browser.waitForTarget(t=>t.url() === "https://trade.mql5.com/trade?version=5&trade_server=FTMO-Server&servers=FTMO-Server,FTMO-Demo&demo_all_servers=1&lang=en&color_scheme=black_on_white&utm_source=www.ftmo.com", {
            timeout
        });
        const targetPage = await target.page();
        targetPage.setDefaultTimeout(timeout);
        await scrollIntoViewIfNeeded([["aria/OK"], ["body > div.page-window.modal.login-form > div > div.b > button:nth-child(20)"], ["xpath//html/body/div[17]/div/div[3]/button[2]"], ["text/OK"]], targetPage, timeout);
        const element = await waitForSelectors([["aria/OK"], ["body > div.page-window.modal.login-form > div > div.b > button:nth-child(20)"], ["xpath//html/body/div[17]/div/div[3]/button[2]"], ["text/OK"]], targetPage, {
            timeout,
            visible: true
        });
        await element.click({
            offset: {
                x: 39,
                y: 11,
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
