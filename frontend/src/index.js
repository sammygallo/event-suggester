import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
<<<<<<< Updated upstream
import { ChakraProvider, theme } from "@chakra-ui/react";
=======
//import { ThemeProvider } from "@mui/system";
//import theme from "@mui/material/theme";
>>>>>>> Stashed changes

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
