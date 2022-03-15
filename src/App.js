import "./App.css";
import { requests } from "./components/Data/request";
import Banner from "./components/pages/Banner";
import Row from "./components/pages/Row";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Movies" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumantaries}
      />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Commedy" fetchURL={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
