import {BASE_URL} from './apiUrls.js'
import axios from "axios";

var instance = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-type': 'application/json'
  }
});

export default instance;