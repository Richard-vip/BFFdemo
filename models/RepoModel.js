import SafeRequest from "../utils/SafeRequest";

class RepoModel {
    getList(){
        return SafeRequest.fetch("https://api.github.com/users/Richard-vip/repos");
    }
}

export default RepoModel