const Controller = require("./Controller")

class IndexController extends Controller {
    constructor() {
        super()
    }

    async actionIndex(ctx, next) {
        ctx.body = await ctx.render('index', { message: 'hello world' });
    }
}

module.exports = IndexController;