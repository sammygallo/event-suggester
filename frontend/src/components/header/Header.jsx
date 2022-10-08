import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import { AppBar, Toolbar, Typography, InputBox, Box, InputBase } from "@material-ui/core";
//import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import useStyles  from './styles';
const Header = () => {
  const classes = useStyles();
  return(
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.tittle}> 
        DateNight
        </Typography>
        <Box display='flex'>
        <Typography variant="h6" className={classes.tittle}> 
        Things to do:
        </Typography>
        {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase  placeholder="search..." classes={{root:classes.inputRoot , input: classes.inputInput}}/>
          </div>
        {/* </Autocomplete> */}
        </Box>

      </Toolbar>
    </AppBar>
  )
}


export default Header;