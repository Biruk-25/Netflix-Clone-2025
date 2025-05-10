import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from '../../components/Banner/Banner';
function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Footer/>
    </>
  )
}

export default Home;


// src/pages/Home.jsx or App.jsx

// import React from 'react';
// import Row from '../components/Row/Row';
// import requests from '../Utils/requests';
// import Banner from '../components/Banner/Banner';

// function Home() {
//   return (
//     <div className="home">
//       <Banner />

//       <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
//       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
//       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
//       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
//       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
//       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
//     </div>
//   );
// }

// export default Home;
