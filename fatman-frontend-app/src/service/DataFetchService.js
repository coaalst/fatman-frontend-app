import api from '../shared/api'
import Entry from '../models/Entry'
import Cookies from 'js-cookie';

class DataFetchService {

    fetchAll() {
        const token = Cookies.get('x-access-token')
        api.defaults.headers.common["x-access-token"] = token
        return api.get('/fetch').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return responseObj.map(entry => new Entry(entry));
        })
    }

    fetchMonth() {
        const token = Cookies.get('x-access-token')
        api.defaults.headers.common["x-access-token"] = token
        return api.get('/fetch_month').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return responseObj.map(entry => new Entry(entry));
        })
    }
}

export default DataFetchService = new DataFetchService();