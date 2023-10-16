import React from "react";
import { Chart } from "react-google-charts";

function BookingChart() {
  const data = [
    ["Month", "Bookings"],
    ["Jan", 3],
    ["Feb", 5],
    ["Mar", 4],
    ["Apr", 0],
    ["May", 6],
    ["Jun", 2],
    ["Jul", 1],
    ["Aug", 0],
    ["Oct", 4],
    ["Nov", 5],
    ["Dec", 0],
  ];
  const options = {
    title: "2023 Train Booking Statistics",
    curveType: "function",
    legend: { position: "bottom" },
    series: {
      0: { color: "red" },
    },
  };
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="450px"
      data={data}
      options={options}
    />
  );
}

export default BookingChart;
