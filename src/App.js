import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
} from "./api/api";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#000"}}>
      <Navbar />
      <Hero />

      {/* Top Albums Section */}
      <Section title="Top Albums" fetchData={fetchTopAlbums} />

      {/* New Albums Section */}
      <Section title="New Albums" fetchData={fetchNewAlbums} />

      {/* Songs Section */}
      <Section title="Songs" fetchData={fetchSongs} isSongs={true} />
    </div>
  );
}

export default App;