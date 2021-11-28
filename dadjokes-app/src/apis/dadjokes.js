import axios from "axios";

const BASE_URL = "https://icanhazdadjoke.com/";

const dadJokes = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
  },
});

export default dadJokes;
