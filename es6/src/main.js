import axios from 'axios';

class API {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na API')
        }
    }
}

API.getUserInfo('giovannamoeller');