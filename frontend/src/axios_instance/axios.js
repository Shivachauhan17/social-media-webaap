import axios from 'axios';

const instance=axios.create({
    baseURL:'https://friends-loop.onrender.com',
    headers:{
        'content-Type':'application/json'
    }
})


export default instance;