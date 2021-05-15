import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selectedDay } = this.props;
    const data = {
      labels: selectedDay.map((day) =>
        moment(day.date).format("DD-MMM-YY, h:mm A")
      ),
      datasets: [
        {
          label: "Temperature",
          data: selectedDay.map((day) => day.temp),
          borderWidth: 2,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(250, 10, 150, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
            "rgb(250, 10, 150)",
          ],
        },
      ],
    };
    return (
      <>
        <Bar
          data={data}
          options={{
            responsive: true,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "Date and Time",
                  color: "white",
                  font: {
                    family: "Comic Sans MS",
                    size: "12em",
                    weight: "bold",
                  },
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Temperature",
                  color: "white",
                  font: {
                    family: "Comic Sans MS",
                    size: "12em",
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Weather Forecast",
                color: "white",
                font: { weight: "bold", size: "15em" },
              },
            },
          }}
        />
      </>
    );
  }
}

export default BarChart;
