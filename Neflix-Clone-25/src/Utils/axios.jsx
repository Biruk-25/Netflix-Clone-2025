// import axios from "axios";

// // Create a custom instance of axios for TMDb
// let tmdb = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//     api_key: "api_key", // Replace with your actual TMDb API key
//   },
// });

// export default tmdb;

import axios from 'axios';

const API_KEY = "VITE_TMDB_API_KEY"; // Ideally, use environment variables
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    VITE_TMDB_API_KEY: API_KEY,
    language: 'en-US',
  },
});

export default axiosInstance;

