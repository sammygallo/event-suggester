import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
//import Flexbox from "@mui/material/Flexbox";
import SkeletonText from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

//default center for google maps = eifel tower
const center = { lat: 48.8584, lng: 2.2945 };

function Map() {
  // imports from cdn to be used in app
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //libraries to be used
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();
  //makes it look like its loading with skeletontext from chakra
  if (!isLoaded) {
    return <SkeletonText />;
  }
  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      //value - input
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }
  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }
  return (
    <div>
      <Box
        className="map-container"
        sx={{
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          bgPos: "bottom",
          h: "100vh",
          w: "100vw",
          margin: "auto",
          padding: 8,
          bgColor: "#669bbc",
        }}
      >
        <Box
          className="destination-container"
          sx={{
            p: 2,
            borderRadius: "lg",
            mt: 4,
            bgColor: "white",
            shadow: "base",
            minW: "container.md",
            zIndex: "1",
            m: 12,
            border: "solid 1.5px",
            position: "relative",
            right: 80,
            top: 5,
          }}
        >
          <Stack spacing={4}>
            {/*  autocomplete = automatic tries to complete origin location or destination when starting to type */}
            <Autocomplete>
              <Input type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>

            <Autocomplete>
              <Input
                type="text"
                placeholder="Destination"
                ref={destiantionRef}
              />
            </Autocomplete>

            <ButtonGroup>
              <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
                Calculate Route
              </Button>
              <IconButton
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
          </Stack>
          <Stack spacing={4} mt={4} justifyContent="space-between">
            <TextField>Distance: {distance} </TextField>
            <TextField>Duration: {duration} </TextField>
            <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                map.panTo(center);
              }}
            />
          </Stack>
        </Box>
        <Box position="absolute" left={0} top={0} h="100%" w="100%" m={2}></Box>
        {/* google map box */}
        {/* doesnt load without map container style */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          {/* display markers, directions */}
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
    </div>
  );
}

export default Map;
