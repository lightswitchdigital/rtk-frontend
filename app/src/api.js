import * as axios from 'axios'

const instance = axios.create({
    baseURL : 'https://foodsaver-api.lightswitch.digital/index.php/api/' 
})

export const API = {
    getPhotos(page, from, to){
        return instance.get(`photos?page=${page}&date-from=${from}&date-to=${to}`)
    }
}