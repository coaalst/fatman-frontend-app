import api from '../shared/api'
import Cookies from 'js-cookie';

class ConfigUpdateService {

    update_config(values) {
        const token = Cookies.get('x-access-token')
        api.defaults.headers.common["x-access-token"] = token
        return api.post('/update', values).then((response) =>{
            console.log(response)
            return response.status
        })
    }
}

export default ConfigUpdateService = new ConfigUpdateService();