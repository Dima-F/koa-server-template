const { cors, helmet, koaBody, httpLogger, errors } = require('./middlewares');
const { test, public } = require('./routes');


module.exports = async app => {
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(cors());
    app.use(errors());
    app.use(httpLogger());
    app.use(koaBody());

    //routes
    public(app);
    test(app);

    // error handling
    // app.use(HandleErrors);
}