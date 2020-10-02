import api from '../shared/api'

class DataFetchService {

    fetchAll() {
        return api.get('/fetch').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return responseObj.map(movie => new Movie(movie)).splice(0, 50);
        })
    }

    fetchMonth() {
        return api.get('/fetch_month').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return new Movie(responseObj);
        })
    }
}

export default DataFetchService = new DataFetchService();