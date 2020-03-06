const assert = require('assert');

describe('Sauce Demo home page - Seth Guimont', () => {
    it('should hve the right title', () =>{
        browser.url('https://www.saucedemo.com');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Swap Labs');
    });
});