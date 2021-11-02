import axios from 'axios'

const baseURL = 'https://www.googleapis.com/youtube/v3'

export default axios.create({
    baseURL,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 6,
        key: process.env.REACT_APP_KEY
    }
})
