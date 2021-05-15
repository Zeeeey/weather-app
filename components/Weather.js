import React, { Component } from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
} from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import CarouselComp from "./Carousel";
import Temperature from "./Temperature";

class Weather extends Component {
  state = {};

  render() {
    const { classes, city, lists, degree, unit, handleChange } = this.props;
    const { body, paddingTop10, paddingTop30, blueColor, cityText } = classes;
    return (
      <div className={body}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar className={blueColor}>
            <CloudIcon />
            <Typography variant="h6">Weather App</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={paddingTop10}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                gutterBottom
                className={cityText}
              >
                {city.name}, {city.country}
              </Typography>
              <Temperature
                classes={classes}
                unit={unit}
                handleChange={handleChange}
              />
            </Container>
          </div>
          <div className={paddingTop30}>
            <Container maxWidth="md">
              <CarouselComp classes={classes} lists={lists} degree={degree} />
            </Container>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Weather);
