import React from "react";
import Section from "./components/Section/Section";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#000", padding: "20px" }}>
      <Navbar />
      <Hero />

      <Section title="Top Albums" fetchData={fetchTopAlbums} />
      <Section title="New Albums" fetchData={fetchNewAlbums} />
    </div>
  );
}

export default App;
