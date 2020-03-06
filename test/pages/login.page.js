class LoginPage{
    get userNameElem(){
        return $('#user-name');
    }

    get passwordElem(){
        return $('#password');
    }

    get loginButtonElem(){
        return $('input[type=submit]');
    }

    get errorMessageElem() {
        return $('h3[data-test=error']);
    }
}

module.exports = new LoginPage();