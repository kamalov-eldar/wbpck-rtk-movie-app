import axios from "axios";
import apiConfig from "./apiConfig";
import queryString from "query-string";

const tmdbAxios = axios.create({
    baseURL: apiConfig.baseUrl, //  'https://api.themoviedb.org/3/'
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

/* tmdbAxios.interceptors.request.use(async (config) => {
    console.log("config: ", config);
    return config;
});

tmdbAxios.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        console.log("error: ", error);
        //  setError(true);
        // throw error;
    },
); */

export default tmdbAxios;
