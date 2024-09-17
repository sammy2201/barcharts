import React, { useState, useEffect } from "react";
import axios from "axios";
import ChartDisplay from "./ChartDisplay";
import Loading from "./Loading";
import { parseApiData } from "./ChartDataParser";
import "../styles/Barchart.css";

const BarChart = () => {
  const [chartData, setChartData] = useState([]);

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
      {chartData.length > 0 ? (
        <div className="chart-wrapper">
          {chartData.map((item, index) => {
            console.log(item.labels);
            return (
              <ChartDisplay key={index} chartData={item} year={item.year} />
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BarChart;
