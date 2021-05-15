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
        moment(day.date).format("DD-MMM-YY, h:mm a")
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
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "Temperature",
              fontSize: 200,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
          // options={{
          //   maintainAspectRatio: true,
          //   responsive: true,
          //   scales: {
          //     yAxes: [
          //       {
          //         scaleLabel: {
          //           display: true,
          //           labelString: "COUNT",
          //           fontStyle: "bold",
          //           fontSize: 17,
          //         },
          //       },
          //     ],
          //     xAxes: [
          //       {
          //         ticks: { fontStyle: "bold" },
          //         scaleLabel: {
          //           display: true,
          //           labelString: "BASESTATION NAME",
          //           fontStyle: "bold",
          //           fontSize: 17,
          //         },
          //       },
          //     ],
          //   },
          // }}
        />
      </>
    );
  }
}

export default BarChart;
