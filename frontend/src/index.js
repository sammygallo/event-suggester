import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
//import { ThemeProvider } from "@mui/system";
//import theme from "@mui/material/theme";

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
