import React from 'react';
import './App.css';
import Row from '../src/components/Row';
import requests from '../src/requests';
import Banner from '../src/components/Banner';
import Nav from '../src/components/Nav';
function App() {
  return (
    <div className="App">

      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fatchNetflixOriginals}
       isLargeRow={true}
      />
      <Row title="Tranding Now" fetchUrl={requests.fatchTranding}/>
      <Row title="Top Rated" fetchUrl={requests.fatchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fatchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fatchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fatchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fatchRomanceMovies}/>
      <Row title="Documentaties" fetchUrl={requests.fatchDocumentaries}/>
    </div>
  );
}

export default App;
