export const parseApiData = (data) => {
  const charts = [];

  for (let year of data) {
    for (let [yearKey, months] of Object.entries(year)) {
      for (let month of months) {
        const labels = [];
        const values = []; //values for barchart
        for (let [monthKey, dates] of Object.entries(month)) {
          for (let dateEntry of dates) {
            const [date, value] = Object.entries(dateEntry)[0];
            labels.push(date);
            values.push(value);
          }

          charts.push({
            year: yearKey, // Set the year
            labels,
            datasets: [
              {
                label: `Values for ${yearKey}-${monthKey}`,
                data: values,
                backgroundColor: "rgba(205, 193, 255, 1)",
                borderColor: "rgba(165, 148, 249, 1)",
                borderWidth: 1,
              },
            ],
          });
        }
      }
    }
  }

  return charts;
};
