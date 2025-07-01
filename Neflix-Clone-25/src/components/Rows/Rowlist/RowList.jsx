

import Row from '../Row/Row';
import Requests from '../../../Utils/requests'; 

function RowList() {
  return (
    <>
      <Row title="NETFLIX ORIGINALS" fetchUrl={Requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} isLargeRow/>
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies}isLargeRow />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies}isLargeRow />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} isLargeRow/>
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} isLargeRow/>
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} isLargeRow/>
      <Row title="Popular TV Shows" fetchUrl={Requests.fetchTVShow} isLargeRow/>

    </>
  );
}

export default RowList;











