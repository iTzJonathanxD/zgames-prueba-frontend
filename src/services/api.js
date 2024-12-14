import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/v1/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
