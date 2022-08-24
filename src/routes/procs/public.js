const UsersService = require('../../services/UsersService');
const Router = require('@koa/router');
const { loginValidate, registerValidate } = require('../../validation');


module.exports = app => {
    const usersService = new UsersService();
    const router = new Router({ prefix: '/public' });

    // ctx, next працюють тільки в межах даних обробників, в сервіси не передаються
    router.post('/login', async ctx => {
        const { email, password } = ctx.request.body;
        const { errors, isValid } = loginValidate({ email, password });
        if(!isValid) ctx.throw(400, JSON.stringify(errors));
        ctx.body = await usersService.login({ email, password });
    });

    router.post('/register', async ctx => {
        const { email, password, password2 } = ctx.request.body;
        const { errors, isValid } = registerValidate({ email, password, password2 });
        if(!isValid) ctx.throw(400, JSON.stringify(errors));
        ctx.body = await usersService.register({ email, password });
    })

    app.use(router.routes());
}