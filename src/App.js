import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeatherDetails } from "./actions/weatherActions";
import Weather from "./components/Weather";
import { CircularProgress } from "@material-ui/core";

class App extends Component {
  state = { unit: "metric" };

  componentDidMount() {
    this.props.getWeatherDetails(this.state.unit);
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ unit: value });
    this.props.getWeatherDetails(value);
  };

  render() {
    const { city, lists, degree, isFetching } = this.props;
    return (
      <div className="App">
        {isFetching ? (
          <header className="App-header">
            <CircularProgress color="secondary" size="200px" />
            loading...
          </header>
        ) : (
          <Weather
            city={city}
            lists={lists}
            degree={degree}
            unit={this.state.unit}
            handleChange={(e) => this.handleChange(e)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  city: state.weatherReducer.city,
  lists: state.weatherReducer.lists,
  degree: state.weatherReducer.degree,
  isFetching: state.weatherReducer.isFetching,
});

export default connect(mapStateToProps, { getWeatherDetails })(App);
