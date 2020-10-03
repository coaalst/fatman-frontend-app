import api from '../shared/api'
import  Cookies from 'js-cookie';

class LoginService {

    login(values) {
        const token = Buffer.from(`${values.username}:${values.password}`, 'utf8').toString('base64')
        api.defaults.headers.common["Access-Control-Allow-Origin"] = '*'
        api.defaults.headers.common["Authorization"] = 'Basic ' + token
        return api.get('/login').then((response) =>{
            console.log(response);
            Cookies.set('x-access-token', response.data['token'], { sameSite: 'strict' })
        })
    }
}

export default LoginService = new LoginService();