import * as axios from 'axios'

const instance = axios.create({
    baseURL : 'https://foodsaver-api.lightswitch.digital/index.php/api/' 
})

export const API = {
    getWards(){
        // return instance.get(`wards/get`)
    }
}