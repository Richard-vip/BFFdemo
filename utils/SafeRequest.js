import axios from "axios";

class SafeRequest {
    static fetch(url) {
        let result = {
            code: 0,
            message: '',
            data: null
        }
        return new Promise(resolve => {
            axios.get(url).then(res => {
                result.data = res
                resolve(result);
            }).catch(error => {
                result.code = -1;
                result.message = error.message;
                resolve(result)
            })
        })
    }
}

export default SafeRequest;