import Controller from "./Controller";

class IndexController extends Controller {
    constructor() {
        super()
    }

    async actionIndex(ctx, next) {
        ctx.body = await ctx.render('index', { message: 'hello world' });
    }

    async actionRepoList(ctx) {
        ctx.body = await ctx.render('repos')
    }
}


export default IndexController;