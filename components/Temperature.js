import { connect } from "react-redux";
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { Component } from "react";
import { getWeatherDetails } from "../actions/weatherActions";

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, unit, handleChange } = this.props;
    return (
      <div>
        <RadioGroup
          aria-label="temperature"
          name="temperature"
          value={unit}
          onChange={handleChange}
          className={classes.dflex}
        >
          <FormControlLabel
            value="metric"
            control={<Radio />}
            label="Celsius"
          />
          <FormControlLabel
            value="imperial"
            control={<Radio />}
            label="Fahrenheit"
          />
        </RadioGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.weatherReducer.city,
  lists: state.weatherReducer.lists,
  isFetching: state.weatherReducer.isFetching,
});

export default connect(mapStateToProps, { getWeatherDetails })(Temperature);
