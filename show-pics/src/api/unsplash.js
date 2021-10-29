import axios from 'axios'

const BASE_URL = 'https://api.unsplash.com'
const headers = {
    Authorization: `Client-ID ${process.env.REACT_APP_KEY}`
}

export default axios.create({
    baseURL: BASE_URL,
    headers: headers
})