import React, { useState, useEffect } from "react";
import axios from "axios";
import ChartDisplay from "./ChartDisplay";
import Loading from "./Loading";
import { parseApiData } from "./ChartDataParser";
import "../styles/Barchart.css";

const BarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://django-dev.aakscience.com/candidate_test/fronted?format=json"
      )
      .then((response) => {
        const data = response.data;
        const parsedData = parseApiData(data);
        setChartData(parsedData);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h2 className="Mainheading">Bar Charts from API Data</h2>
      {chartData ? (
        <div className="chart-wrapper">
          {chartData.map((data, index) => (
            <ChartDisplay key={index} chartData={data} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BarChart;
