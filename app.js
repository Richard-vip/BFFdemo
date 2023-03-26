const Koa = require('koa');
const render = require('koa-swig');
const co = require('co');
const initController = require('./controllers')
const StaticServer = require('koa-static');
const config = require('./config');
const errorHandler = require('./middlewares/ErrorHandler');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const app = new Koa();

app.use(StaticServer(config.staticDir));
app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache,
    // tagControls
}));

app.use(historyApiFallback({
    index: '/',
    whiteList: ['/api']
}));

errorHandler.error(app)

initController(app)

app.listen(config.port);