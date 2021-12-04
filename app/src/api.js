import * as axios from 'axios'

const instance = axios.create({
    baseURL : 'https://rtk.lightswitch.digital' 
})

export const API = {
    getRecords(){
        return instance.get(`/gateway/get-records`)
    }
}