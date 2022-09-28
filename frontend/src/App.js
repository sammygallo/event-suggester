import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
  SkeletonText,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
import { useState, useRef } from 'react'
//default center for google maps = eifel tower
const center = { lat: 48.8584, lng: 2.2945 }

function App() {
  // imports from cdn to be used in app
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //libraries to be used
    libraries:['places'],
  })
  
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
   /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
   /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()
  //makes it look like its loading with skeletontext from chakra
  if (!isLoaded) {
    return <SkeletonText />
  }


  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      bgPos='bottom'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={0} top={0} h='100%' w='100%'></Box>
      {/* google map box */}
      {/* doesnt load without map container style */}
      <GoogleMap center={center} zoom={15} mapContainerStyle={{ width: '100%', height: '100%' }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      onLoad={map => setMap(map)}
      >
        {/* zoom option */}
        
        {/* display markers, directions */}
        <Marker position={center} />
      </GoogleMap>
      <Box
        p={4}
        borderRadius='lg'
        mt={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack spacing={4}>
  {/*  autocomplete = automatic tries to complete origin location or destination when starting to type */}
          <Autocomplete>
          <Input type='text' placeholder='Origin'  ref={originRef} />
          </Autocomplete>

          <Autocomplete>
          <Input type='text' placeholder='Destination' ref={destiantionRef}/>
          </Autocomplete>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit'>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={() => alert(123)}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: </Text>
          <Text>Duration: </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              
            }}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default App