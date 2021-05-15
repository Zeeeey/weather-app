import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Moment from "react-moment";
import { GET_WEATHER_ICON_URL } from "../urls/weatherURL";
import BarChart from "./BarChart";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
];

class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      selectedDay: [],
      showBars: false,
    };
  }

  componentDidMount() {
    this.carouselItems();
  }

  showBarChart = (item) => {
    const { lists } = this.props;
    this.setState({ showBars: true, selectedDay: [] });
    for (let i = 0; i < lists.length; i++) {
      if (item.date.slice(0, 10) === lists[i].dt_txt.slice(0, 10)) {
        let data = {
          date: lists[i].dt_txt,
          temp: lists[i].main.temp,
          time: lists[i].dt_txt.slice(11, 19),
        };
        this.setState((prevState) => ({
          selectedDay: [...prevState.selectedDay, data],
        }));
      }
    }
  };

  carouselItems = () => {
    const { lists } = this.props;
    for (let i = 0; i < lists.length; i += 8) {
      let data = {
        date: lists[i].dt_txt,
        icon: lists[i].weather[0].icon,
        desc: lists[i].weather[0].description,
        temp: lists[i].main.temp,
        feelsLike: lists[i].main.feels_like,
        humidity: lists[i].main.humidity,
      };
      this.setState((prevState) => ({
        days: [...prevState.days, data],
      }));
    }
  };

  render() {
    const { showBars, days } = this.state;
    const { classes, degree } = this.props;
    const { itemDiv, font16, itemTemp, paddingTB50, paddingTop30, itemText } =
      classes;
    return (
      <>
        <Carousel breakPoints={breakPoints}>
          {days.map((day) => {
            const { date, icon, temp, feelsLike, humidity, desc } = day;
            return (
              <div
                key={date}
                className={itemDiv}
                onClick={() => this.showBarChart(day)}
              >
                <div className={font16}>
                  <div className={paddingTop30}>
                    <img
                      src={`${GET_WEATHER_ICON_URL}/${icon}@2x.png`}
                      alt="icon"
                    />
                  </div>
                  <h2 className={itemTemp}>
                    {temp}
                    &deg;
                    {degree === "metric" ? "C" : "F"}
                  </h2>
                  <p className={itemText}>
                    <b>
                      {desc.toUpperCase()}
                      <br />
                      Feels Like: {feelsLike}
                      &deg;
                      {degree === "metric" ? "C" : "F"}
                      <br />
                      Humidity: {humidity}%
                      <br />
                      <Moment format="DD-MMM-YYYY">{date}</Moment>
                    </b>
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
        {showBars && (
          <div className={paddingTB50}>
            <BarChart selectedDay={this.state.selectedDay} />
          </div>
        )}
      </>
    );
  }
}

export default CarouselComp;
