import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./map.css";

var center;


async function getUserCoords() {
  let pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  center = { lat: pos.coords.latitude, lng: pos.coords.longitude };
}
getUserCoords()

const containerStyle = {
  width: '100%',
  height: '100vh',
  zindex: '0'
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      className="map"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} />
      <></>
      <button class="get-current-location-buton" onClick={async () => {
        await getUserCoords()
        map.panTo(center)
      }}><svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_25_22)">
            <path d="M31.5011 4.32297C16.515 4.32297 4.32297 16.515 4.32297 31.5011C4.32297 46.4873 16.515 58.6782 31.5011 58.6782C46.4873 58.6782 58.6782 46.4862 58.6782 31.5011C58.6782 16.5161 46.4862 4.32297 31.5011 4.32297ZM33.2037 44.5143L30.0677 35.4095C29.7315 34.4316 28.9637 33.6626 27.9857 33.3264L18.8798 30.1904L40.7127 22.6837L33.2049 44.5155L33.2037 44.5143Z" fill="white" />
            <path d="M31.5011 0C14.1309 0 0 14.132 0 31.5011C0 48.8703 14.1309 63 31.5011 63C48.8714 63 63 48.8703 63 31.5011C63 14.132 48.8703 0 31.5011 0ZM31.5011 58.6782C16.515 58.6782 4.32297 46.4862 4.32297 31.5011C4.32297 16.5161 16.515 4.32297 31.5011 4.32297C46.4873 4.32297 58.6782 16.515 58.6782 31.5011C58.6782 46.4873 46.4862 58.6782 31.5011 58.6782V58.6782Z" fill="#A2AEBB" />
            <path d="M27.9846 33.3253C28.9626 33.6615 29.7315 34.4304 30.0666 35.4084L33.2026 44.5132L40.7105 22.6814L18.8775 30.1881L27.9835 33.3241L27.9846 33.3253Z" fill="#A2AEBB" />
          </g>
          <defs>
            <clipPath id="clip0_25_22">
              <rect width="63" height="63" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

