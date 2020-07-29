import axios from 'axios';

class API {
    static async getUserInfo(username) {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
    }
}

API.getUserInfo('giovannamoeller');