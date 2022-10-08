import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getUserCoords} from '../src/components/map/Map';
import { getPlacesData } from './api';
import Header from './components/header/Header';
import List from './components/List/List';
import Map from './components/map/Map';

const App = () => {
 
  const [coords, setCoords] = useState({lat:0,lng:0});
  const [bounds, setBounds] = useState(null);
  const [places, setPlaces] = useState([]);


  useEffect(() => {
    getUserCoords().then((center)=>{
      console.log(center);
    });
  },[]);

  useEffect(() => {
   
      getPlacesData()
        .then((data) => {
          console.log(data);
        });
    
  }, []);


  return (
    <>
      <CssBaseline />
      <Header  />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Map  />
        </Grid>
      </Grid>
    </>
  );
};

export default App;