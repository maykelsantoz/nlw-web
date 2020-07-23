import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "production"
    ? "https://nlw01-server.herokuapp.com/"
    : "http://localhost:3333";

const api = axios.create({
  baseURL: apiURL,
});

export default api;
