import axios from 'axios';
import { API } from '../config';

export function getPropertyData(){
    const config = {
        url:`${API.API_LINK}?limit=10`,
        method:'GET',
        headers:{
            'Authorization':'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz',
            'Content-Type':'application/json'
        }
    };

    var output = axios.request(config)
        .then((response) =>{
            return response.data
        });
    return output;
}   