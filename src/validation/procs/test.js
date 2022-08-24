const Validator = require('validator');
const { isEmpty } = require('../../utils')

module.exports = ({ name }) => {
    let errors = {};

    name = !isEmpty(name) ? name : '';

    if(Validator.isEmpty(name)) {
        errors.name = 'Name is required';
    }
    
    return {
        errors,
        isValid : isEmpty(errors)
    };
};