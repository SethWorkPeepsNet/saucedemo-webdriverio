const loginPage = require('../pages/login.page');
const expect = require('chai').expect;

describe('Login', () =>{
    beforeEach(() => {
        browser.url('/');
    });

    it('should be able to login with a standard user', ()=>{
        loginPage.loginWithStandardUser();

        // https://devhints.io/chai
        expect(browser.getUrl()).to.include('/inventory.html');
    });
});