import axios from "axios";

const authAxios = axios.create({
    baseURL: __API__, //  "http://localhost:8001",
    headers: {
        authorization: localStorage.getItem("user") || "",
        "Content-Type": "application/json",
    },
});

authAxios.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem("user") || "";
    }
    return config;
});

export default authAxios;
