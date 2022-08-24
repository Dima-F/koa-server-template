const Validator = require('validator');
const { isEmpty } = require('../../utils')

module.exports = ({ email, password2, password }) => {
    let errors = {};
    email = !isEmpty(email) ? email : '';
    password = !isEmpty(password) ? password : '';
    password2 = !isEmpty(password2) ? password2 : '';

    if(!Validator.isLength(password, {min: 6, max: 30})){
        errors.password = 'Password must be at least 6 characters long';
    }

    if(Validator.isEmpty(email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isEmail(email)) {
        errors.email = 'Wrong email';
    }

    if(Validator.isEmpty(password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.equals(password, password2)){
        errors.password2 = 'Both passwords must match';
    }
    
    if(Validator.isEmpty(password2)) {
        errors.password2 = 'Confirmation of password is required';
    }

    return {
        errors,
        isValid : isEmpty(errors)
    }
}