import logo from './logo.svg';
import './App.css';
import Row from "./Row"
import requests from "./request"
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      {/* nav bar */}
      <Nav />
      {/* banner */}
      <Banner /> 
      {/* row */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     {/* <Row title="Trending Now" fetchUrl ={requests.fetchTrending}/> */}
    </div>
  );
}

export default App;
