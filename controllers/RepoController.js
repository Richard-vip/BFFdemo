import Controller from "./Controller";
import RepoModel from "../models/RepoModel";

const repoModel = new RepoModel();

class RepoController extends Controller {
    constructor() {
        super()
    }

    async actionRepoList(ctx) {
        const res = await repoModel.getList();
        ctx.body = await ctx.render('repos', {
            data: res.data.data
        })
    }
}


export default RepoController;