import axios from "axios";

const api = axios.create({
  baseURL: "https://coinflow-server.onrender.com/api",
});

export default api;
