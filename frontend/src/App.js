import React from "react";
import Header from "./components/header/Header";
import Map from "./components/map/Map";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Map />
    </div>
  );
}

export default App;
