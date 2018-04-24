import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 1000
})

export default http