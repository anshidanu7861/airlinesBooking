import axios from 'axios'

 const axiosConfig = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials: true
});

export default axiosConfig;