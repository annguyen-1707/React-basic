import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
    }
});

// Add a response interceptor
//Gắn interceptor cho đúng instance
instance.interceptors.response.use(
    function (response) {
        // Any status code that lies within the range of 2xx causes this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status code that falls outside the range of 2xx causes this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);


export default instance