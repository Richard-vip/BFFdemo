import Controller from "./Controller";

class RepoController extends Controller {
    constructor() {
        super()
    }

    async actionRepoList(ctx) {
        ctx.body = await ctx.render('repos', {
            data: [{ id: 1 }, { id: 2 }]
        })
    }
}


export default RepoController;