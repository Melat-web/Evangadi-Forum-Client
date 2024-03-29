import axios from "axios";
const axiosBase = axios.create({
  baseURL: "https://regal-biscuit-6e9130.netlify.app",

  // baseURL: "http://localhost:5500/api",
});

export default axiosBase;