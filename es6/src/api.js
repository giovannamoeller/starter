import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/'
}) // cria uma configuração do axios - define uma base URL

export default api;