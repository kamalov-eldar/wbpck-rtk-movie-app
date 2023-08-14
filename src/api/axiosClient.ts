import axios from "axios";

import apiConfig from "./apiConfig";
import queryString from "query-string";
console.log("__API__", __API__);
const axiosClient = axios.create({
    // baseURL: apiConfig.baseUrl,
    baseURL: __API__, //  "http://localhost:8000",
    /* headers: {
        "Content-Type": "application/json",
    }, */
    headers: {
        authorization: localStorage.getItem("user") || "",
    },
    // paramsSerializer: (params) => queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

/* axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
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

export default axiosClient;
