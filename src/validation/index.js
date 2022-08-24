const login = require('./procs/login');
const test = require('./procs/test');
const register = require('./procs/register');

module.exports = {
    loginValidate: login,
    testValidate: test,
    registerValidate: register
}