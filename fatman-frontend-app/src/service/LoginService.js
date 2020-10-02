import api from '../shared/api'
import { Cookies } from 'react-cookie';

class LoginService {

    login() {
        return api.get('/shows').then((response) =>{
            const responseObj = response.data;
            console.log(responseObj);
            return responseObj.map(movie => new Movie(movie)).splice(0, 50);
        })
    }
}

export default LoginService = new LoginService();