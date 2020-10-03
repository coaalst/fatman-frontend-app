import api from '../shared/api'
import Entry from '../models/Entry'

class DataFetchService {

    fetchAll() {
        return api.get('/fetch').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return responseObj.map(entry => new Entry(entry));
        })
    }

    fetchMonth() {
        return api.get('/fetch_month').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return responseObj.map(entry => new Entry(entry));
        })
    }
}

export default DataFetchService = new DataFetchService();