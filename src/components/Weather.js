import React, { Component } from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import CarouselComp from "./Carousel";
import Temperature from "./Temperature";

class Weather extends Component {
  state = {
    ngCities: ['Lagos', 'Katsina', 'Anambra'],
    mdCities: ['Chișinău', 'Bălți', 'Tiraspol'],
    ukCities: ['London', 'Birmingham', 'Glasgow'],
  };
  
  ngCities = this.state.ngCities.map(ngCity => <MenuItem value={ngCity}>{ngCity}</MenuItem>) 
  mdCities = this.state.mdCities.map(mdCity => <MenuItem value={mdCity}>{mdCity}</MenuItem>) 
  ukCities = this.state.ukCities.map(ukCity => <MenuItem value={ukCity}>{ukCity}</MenuItem>) 
  
  render() {
    const { classes, city, lists, degree, handleChange, stateObject, handleLocation, handleSubmit } = this.props;
    const { cityName, countryCode, unit } = stateObject;
    const { body, paddingTop10, paddingTop30, blueColor, cityText, selectDiv, marginTop20, textWhite } = classes;
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
              <div className={paddingTop10}>
                <FormControl variant="outlined">
                  <InputLabel id="countryCode" className={textWhite}>Country</InputLabel>
                  <Select
                    labelId="countryCode"
                    name="countryCode"
                    value={countryCode}
                    className={selectDiv}
                    onChange={handleLocation}
                  >
                    <MenuItem value="ng">Nigeria</MenuItem>
                    <MenuItem value="md">Moldova</MenuItem>
                    <MenuItem value="uk">United Kingdom</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel id="cityName" className={textWhite}>City</InputLabel>
                  <Select
                    labelId="cityName"
                    name="cityName"
                    value={cityName}
                    className={selectDiv}
                    onChange={handleLocation}
                  >
                    {countryCode === 'md' ? this.mdCities : countryCode === 'uk' ? this.ukCities : this.ngCities }
                  </Select>
                </FormControl>
                <Button variant="contained" color="white"  className={marginTop20} onClick={handleSubmit}>
                  Search
                </Button>
              </div>
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
