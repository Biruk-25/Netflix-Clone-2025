let api_key = process.env.REACT_APP_api_key;



import axiosInstance from './axios'; // Adjust the import path as needed

const requests = {
  fetchTrending: () => axiosInstance.get('/trending/all/week'),
  fetchNetflixOriginals: () => axiosInstance.get('/discover/tv', { params: { with_networks: 213 } }),
  fetchTopRatedMovies: () => axiosInstance.get('/movie/top_rated'),
  fetchActionMovies: () => axiosInstance.get('/discover/movie', { params: { with_genres: 28 } }),
  fetchComedyMovies: () => axiosInstance.get('/discover/movie', { params: { with_genres: 35 } }),
  fetchHorrorMovies: () => axiosInstance.get('/discover/movie', { params: { with_genres: 27 } }),
  fetchRomanceMovies: () => axiosInstance.get('/discover/movie', { params: { with_genres: 10749 } }),
  fetchDocumentaries: () => axiosInstance.get('/discover/movie', { params: { with_genres: 99 } }),
  fetchTvShow: () => axiosInstance.get('/tv/popular', { params: { page: 1 } }),
};

export default requests;







// // Define the API key and requests (as shown in your snippet)

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchTVShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
// };

// // Base URL for the API (e.g., TMDb API base URL)
// const BASE_URL = 'https://api.themoviedb.org/3';

// // Function to fetch trending content
// async function getTrending() {
//   try {
//     // Make the HTTP request using fetch
//     const response = await fetch(`${BASE_URL}${requests.fetchTrending}`);
    
//     // Check if the response is OK (status 200)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Parse the JSON response
//     const data = await response.json();
    
//     // Log or process the data
//     console.log('Trending Data:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching trending data:', error);
//   }
// }

// // Call the function to fetch trending content
// getTrending();



// // mediaService.js
// import tmdb from './tmdb';

// const genreMap = {
//   action: 28,
//   comedy: 35,
//   drama: 18,
//   thriller: 53,
//   horror: 27,
//   romance: 10749,
//   animation: 16,
// };

// export async function fetchMedia({ type = 'movie', category = 'popular', genre = null }) {
//   try {
//     let endpoint = '';
//     let params = {};

//     if (genre) {
//       const genreId = genreMap[genre.toLowerCase()];
//       if (!genreId) throw new Error(`Unknown genre: ${genre}`);
//       endpoint = `/discover/${type}`;
//       params = {
//         with_genres: genreId,
//         sort_by: 'vote_average.desc',
//         vote_count_gte: 100,
//       };
//     } else {
//       endpoint = `/${type}/${category}`;
//     }

//     const response = await tmdb.get(endpoint, { params });
//     return response.data.results;
//   } catch (error) {
//     console.error('Fetch error:', error.message);
//     return [];
//   }
// }



// // Define the API key and base URL
// const API_KEY = 'your_api_key_here'; // Replace with your actual API key
// const BASE_URL = 'https://api.themoviedb.org/3';

// // Define the requests object
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchTVShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
// };

// // Reusable function to fetch data from any endpoint
// async function fetchData(requestKey) {
//   try {
//     const response = await fetch(`${BASE_URL}${requests[requestKey]}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(`${requestKey} Data:`, data);
//     return data;
//   } catch (error) {
//     console.error(`Error fetching ${requestKey}:`, error);
//     return null; // Return null or handle the error as needed
//   }
// }

// // Example: Fetch data for different endpoints
// fetchData('fetchTrending');
// fetchData('fetchActionMovies');
// fetchData('fetchComedyMovies');













//1f3e5aea59a2f8e7063dacad5ff5d824