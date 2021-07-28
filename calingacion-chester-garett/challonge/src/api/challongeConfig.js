import axios from 'axios';

const instance = 
        axios.create({
            baseURL: 'https://api.challonge.com/v2/',
            headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/json',
                'Authorization-Type': 'v1',
                'Authorization': 'bpe7fofPHWdHH0IszXI55gAFGjdext1SjAQxkeYN',
            }
        })
    


export default instance;