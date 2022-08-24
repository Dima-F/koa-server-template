const config = require('../config');

module.exports = () => async (ctx, next) => {
    try {
        return await next();
    } catch (e) {
        if (e.status) {
            if(e.status === 500) {
                ctx.body = e.expose ? e.message : config.errors.defaultMessage
            } else {
                ctx.body = e.message;
            }
            ctx.status = e.status;
            console.error(e.message || e);
        } else {
            ctx.body = config.errors.defaultMessage
            ctx.status = 500;
            console.error(e.message || e);
            if (e.stack) {
                console.error(e.stack);
            }
        }
    }
};
