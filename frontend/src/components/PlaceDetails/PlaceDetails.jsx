import React from "react";


const PlaceDetails = ({place}) => {
  console.log(place);
  return(
    <h1>{place.name}</h1>
  )
}

export default PlaceDetails;