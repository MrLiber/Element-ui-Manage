import axios from 'axios';

export default {
    get:function(url,data) {
        return axios.get(url,{
            params:data
        })
    },
    post:function(url,data) {
        console.log(data)
        return axios.post(url,data)
    }
}