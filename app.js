import Koa from 'koa';
import render from 'koa-swig';
import co from 'co';
import log4js from "log4js";
import initController from './controllers'
import StaticServer from 'koa-static';
import config from './config';
import errorHandler from './middlewares/ErrorHandler';
import { historyApiFallback } from 'koa2-connect-history-api-fallback';
const app = new Koa();

app.use(StaticServer(config.staticDir));
app.context.render = co.wrap(render({
    root: config.viewDir,
    cache: config.cache,
    tagControls:config.tagControls
}));

app.use(historyApiFallback({
    index: '/',
    whiteList: ['/api','/users','repos']
}));

log4js.configure({
    appenders: { errorLog: { type: "file", filename: "./logs/error.log" } },
    categories: { default: { appenders: ["errorLog"], level: "error" } },
});

const logger = log4js.getLogger("errorLog");
errorHandler.error(app, logger)

initController(app)

app.listen(config.port);

