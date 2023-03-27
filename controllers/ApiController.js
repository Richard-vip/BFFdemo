import RepoModel from "../models/RepoModel";
import Controller from "./Controller";


const repo = new RepoModel();

class ApiController extends Controller {
    async getRepoList(ctx) {
        const result = await repo.getList();
        ctx.body = result.data;
    }
}

export default ApiController;