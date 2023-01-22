import axios from 'axios';
import {apiBaseUrl} from "../../utils/consts"

export const GET =  endpoint => {
    return axios.get(`${apiBaseUrl}/${endpoint}`);
}