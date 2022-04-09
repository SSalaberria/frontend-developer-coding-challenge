import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
});

export default axios;
