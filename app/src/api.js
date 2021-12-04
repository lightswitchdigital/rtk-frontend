import * as axios from 'axios'

const instance = axios.create({
    baseURL : 'http://10.106.3.89:8000' 
})

export const API = {
    getRecords(){
        return instance.get(`/gateway/get-records`)
    }
}