import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from "@material-ui/core";
import { getWeatherDetails } from "./actions/weatherActions";
import Weather from "./components/Weather";
class App extends Component {
  state = {  cityName: "Lagos", countryCode: "ng", unit: "metric" };

  componentDidMount() {
    const { cityName, countryCode, unit } = this.state;
    this.props.getWeatherDetails(cityName, countryCode, unit);
  }
  handleChange = (e) => {
    const { value } = e.target;
    const { cityName, countryCode } = this.state;
    this.setState({ unit: value });
    this.props.getWeatherDetails(cityName, countryCode, value);
  };
  handleLocation = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { cityName, countryCode, unit } = this.state;
    this.props.getWeatherDetails(cityName, countryCode, unit);
  }

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
            stateObject={this.state}
            handleChange={(e) => this.handleChange(e)}
            handleLocation={(e) => this.handleLocation(e)}
            handleSubmit={(e) => this.handleSubmit(e)}
          />
        )}
        <ToastContainer />
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
