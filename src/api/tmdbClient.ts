import axios from "axios";
import apiConfig from "./apiConfig";
import queryString from "query-string";

const tmdbAxios = axios.create({
    baseURL: apiConfig.baseUrl, //  'https://api.themoviedb.org/3/'
    headers: {
        "Content-Type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTNmZmE4NWYzZDU2Yzk4YjY5YzUwMmUxMWRiZTJjZiIsInN1YiI6IjY0OGRmZmY5YzNjODkxMDBlYjMyOTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wnWcbWLpyTvQqPaZBO5i2mQjmFis3rK3TYs8JuAFBsI",
    },
    paramsSerializer: (params) => queryString.stringify({ ...params /* api_key: apiConfig.apiKey  */ }),
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
