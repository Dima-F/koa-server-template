require('dotenv').config();
const config = require('./config');
const Koa = require('koa');
const { databaseConnection } = require('./database');
const koaApp = require('./koa-app');

const startServer = async() => {
    const app = new Koa();
    await databaseConnection();
    await koaApp(app);

    app.listen(config.port, () => {
        console.log(`listening to port ${config.port}`);
    });
}

startServer();