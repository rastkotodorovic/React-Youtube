import axios from 'axios';

const KEY = 'AIzaSyCSBN7IjEuklzKzqkOljkPo2o4qYwB3pKs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})