const Router = require('@koa/router');
const router = new Router();

const IndexController = require("./IndexController");
const indexController = new IndexController();

const initController = (app) => {

    router.get('/', indexController.actionIndex);
    
    app
        .use(router.routes())
        .use(router.allowedMethods());
}

module.exports = initController