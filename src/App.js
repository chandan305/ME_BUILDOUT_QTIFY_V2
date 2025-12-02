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
    <div className="App" style={{ backgroundColor: "#000", padding: "20px" }}>
      <Navbar />
      <Hero />

      {/* Top Albums Section */}
      <Section title="Top Albums" fetchData={fetchTopAlbums} />

      {/* New Albums Section */}
      <Section title="New Albums" fetchData={fetchNewAlbums} />

      {/* Songs Section (Milestone-4) */}
      {/* isSongs = true → Show All button hide, Tabs enable, Likes enable */}
      <Section title="Songs" fetchData={fetchSongs} isSongs={true} />
    </div>
  );
}

export default App;
