const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config')

const generateSalt = async () => {
    return await bcrypt.genSalt()    
};

const getRandomHex = ({ bytes = 16 } = {}) => {
    return crypto.randomBytes(bytes).toString('hex');
};

const generatePassword = async ({ password, salt }) => {
    return await bcrypt.hash(password, salt);
};

const validatePassword = async ({ enteredPassword, savedPassword, salt }) => {
    const generated = await generatePassword({
        password: enteredPassword,
        salt
    });
    return generated === savedPassword;
};

const generateToken = async ({ user }) => {
    return await jwt.sign({
        id: user.id,
        email: user.email
    }, config.jwt.secret, { expiresIn: config.jwt.expiresIn } )
}


module.exports = {
    generateSalt,
    generatePassword,
    validatePassword,
    getRandomHex,
    generateToken
}