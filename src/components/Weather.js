import React, { Component } from "react";
import { Typography, AppBar, CssBaseline, Toolbar } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

class Weather extends Component {
  state = {};
  render() {
    return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">Weather App</Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Weather;
