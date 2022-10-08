import React from "react";
//import Header from "./components/header/Header";
import Map from "./components/map/Map";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import List from "./components/List/List";
//import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import {CssBaseline, Grid } from '@material-ui/core';
function App() {
  return (
    <div className="App">
       <CssBaseline />
       <Header />
       <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}> 
{/* for diffferennt device spacing */}
<List />
        </Grid>
        <Grid item xs={12} md={8}> 
{/* for diffferennt device spacing */}
<Map />
        </Grid>
        </Grid> 
      {/* <Navbar />
      <Map /> */}
   
    </div>
  );
}

export default App;