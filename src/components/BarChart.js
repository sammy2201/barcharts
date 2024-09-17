import React, { useState, useEffect } from "react";
import axios from "axios";
import ChartDisplay from "./ChartDisplay";
import Loading from "./Loading";
import { parseApiData } from "./ChartDataParser";

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
      <h2>Bar Charts from API Data</h2>
      {chartData ? (
        chartData.map((data, index) => (
          <ChartDisplay key={index} chartData={data} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BarChart;
