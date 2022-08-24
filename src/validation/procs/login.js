const Validator = require('validator');
const { isEmpty } = require('../../utils')

module.exports = ({ email, password }) => {
    let errors = {};
    email = !isEmpty(email) ? email : '';
    password = !isEmpty(password) ? password : '';

    if(!Validator.isEmail(email)) {
        errors.email = 'Wrong email';
    }
    if(Validator.isEmpty(password)) {
        errors.password = 'Password is required';
    }
    if(Validator.isEmpty(email)) {
        errors.email = 'Email is required';
    }
    return {
        errors,
        isValid : isEmpty(errors)
    };
};