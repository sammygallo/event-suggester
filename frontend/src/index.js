<<<<<<< Updated upstream
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider, theme } from '@chakra-ui/react'
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
//import { ThemeProvider } from "@mui/system";
//import theme from "@mui/material/theme";
>>>>>>> Stashed changes

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider usetheme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
)
