import axios from "axios";
import apiConfig from "./apiConfig";
import queryString from "query-string";

const authAxios = axios.create({
    baseURL: __API__, //  "http://localhost:8000",
    headers: {
        authorization: localStorage.getItem("user") || "",
    },
});

const tmdbAxios = axios.create({
    baseURL: apiConfig.baseUrl,//  'https://api.themoviedb.org/3/'
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

export { authAxios, tmdbAxios };

