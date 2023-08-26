import axios from "axios";
import apiConfig from "./apiConfig";
import queryString from "query-string";

const authAxios = axios.create({
    baseURL: __API__, //  "http://localhost:8001",
    headers: {
        authorization: localStorage.getItem("user") || "",
    },
});

export default authAxios;
