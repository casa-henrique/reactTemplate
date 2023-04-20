import axios from "axios";

export const api = axios.create({
  baseURL: "https://codificaserver-production.up.railway.app/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  },
});
