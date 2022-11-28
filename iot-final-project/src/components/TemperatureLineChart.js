import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const [chart, setChart] = useState({
    labels: "",
    datasets: [],
  });
  const baseUrl = "http://localhost:9000/api";

  useEffect(() => {
    const fetchReading = async () => {
      await fetch(baseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {
          response.json().then((json) => {
            console.log(json);
            setChart(json);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchReading();
  }, [baseUrl]);

  const data = {
    labels: chart?.feeds?.map((x) => x.created_at),
    datasets: [
      {
        label: "Temperature Reading",
        data: chart?.feeds?.map((x) => x.field1),
        backgroundColor: "transparent",
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        lineTension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        ticks: {
          autoSkip: false,
        },
      },
    },
  };

  //for labels chart?.map(x=>x.created_at)
  //for data chart?.map(x=>x.field1)
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
