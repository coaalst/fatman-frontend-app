import {BASE_URL} from './apiUrls.js'
import axios from "axios";

export default axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});