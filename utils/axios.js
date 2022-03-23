import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.cloudticians.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  },
});

export default instance;
