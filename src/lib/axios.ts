import axios from 'axios';
import {API_URL, DEV_URL} from '@env';

console.log(DEV_URL);
export const api = axios.create({
    baseURL: DEV_URL,
});
