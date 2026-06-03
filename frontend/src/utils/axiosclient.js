import axios from "axios"

const axiosClient =  axios.create({
    baseURL: "https://taskmanager-y94l.onrender.com",
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

