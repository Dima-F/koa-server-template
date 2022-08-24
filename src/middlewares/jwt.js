const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = () => async (ctx, next) => {
    const authHeader = ctx.request.get('authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return ctx.throw(401);
    try {
        const decoded = jwt.verify(token, config.jwt.secret);
        ctx.decoded = decoded;
    } catch (e) {
        console.error(e);
        ctx.throw(401);
    }
    await next();
};