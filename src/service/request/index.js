import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config';
class HYRequest {

    constructor(baseURL, timeout = 10000) {
        //返回不一样的实例,可以创建很多个实例
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config) {
        // return axios.request(config)
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({...config, method: "get" })
    }

    post(config) {
        return this.request({...config, method: "post" })
    }

}

export default new HYRequest(BASE_URL, TIME_OUT)