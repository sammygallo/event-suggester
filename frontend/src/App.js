import React, { useState, useEffect } from "react";
//import Header from "./components/header/Header";
import Map from "./components/map/Map";
//import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import List from "./components/List/List";
//import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';
function App() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    getPlacesData()
    .then((data)=>{
      console.log(data);
      setPlaces(data);
    })
  }, [])
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map  />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;