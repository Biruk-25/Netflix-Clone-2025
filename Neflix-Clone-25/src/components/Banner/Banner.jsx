
import React, { useEffect, useState } from 'react';
import axios from '../../Utils/axios';
import requests from '../../Utils/requests'; 
import './Banner.css';


function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);

      const randomMovie = request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '…' : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </div>
  );
}

export default Banner;







// str?.length > n
// Checks if the string exists and is longer than n characters.
// (The ?. is optional chaining — it prevents errors if str is null or undefined.)

// str.substr(0, n - 1)
// Cuts the string down to the first n - 1 characters.

// + '…'
// Adds a Unicode ellipsis (three dots) to show the string was cut off.

// : str
// If the string is short enough, return it as-is.




