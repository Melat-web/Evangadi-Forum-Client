import axios from "axios";
const axiosBase = axios.create({
  // baseURL: "https://latest-evangadi-forum-server.vercel.app/api",

  baseURL: "http://localhost:5500/api",
});

export default axiosBase;