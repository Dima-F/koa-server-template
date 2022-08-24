const TestService = require('../../services/TestService');
const Router = require('@koa/router');
const { testValidate } = require('../../validation');


module.exports = app => {
    const testService = new TestService();
    const router = new Router({ prefix: '/test' });

    // ctx, next працюють тільки в межах даних обробників, в сервіси не передаються
    router.get('/', async ctx => {
        const res = await testService.getAll();
        ctx.body = res;
    });

    router.post('/create', async ctx => {
        const { name } = ctx.request.body;
        const { errors, isValid } = testValidate({ name });
        if(!isValid) ctx.throw(400, JSON.stringify(errors));
        ctx.body = await testService.createOne({ name });
    })

    app.use(router.routes());
}