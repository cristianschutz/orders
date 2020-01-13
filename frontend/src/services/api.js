const axios = require("axios");
export const api = axios.create({
  baseURL: "http://192.168.0.110:5000"
});
