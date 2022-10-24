import axios from "axios";

const instance = axios.create({
    baseURL: process.env.APP_URL,
    params: {},
});

export default instance;