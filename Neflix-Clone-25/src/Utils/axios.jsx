import axios from 'axios';

const API_KEY = "VITE_TMDB_API_KEY";
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    VITE_TMDB_API_KEY: API_KEY,
    language: 'en-US',
  },
});

export default axiosInstance;




