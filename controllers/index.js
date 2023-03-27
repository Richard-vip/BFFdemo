import Router from '@koa/router';
import ApiController from './ApiController';
import IndexController from "./IndexController";
import RepoController from "./RepoController";

const router = new Router();
const indexController = new IndexController();
const repoController = new RepoController();
const apiController = new ApiController();

const initController = (app) => {
    /**页面路由 */
    router.get('/', indexController.actionIndex);
    router.get('/repos', repoController.actionRepoList);

    /**接口路由 */
    router.get('/api/repos',apiController.getRepoList)

    app
        .use(router.routes())
        .use(router.allowedMethods());
}

export default initController;