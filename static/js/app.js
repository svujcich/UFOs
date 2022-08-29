// import the data from data.js (declare varible)
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//build a table to display all of the UFO sightings
function buildTable(data) {
    // 1. clear out any existing data
    tbody.html("");
  
    // 2a. loop through each object in the data
    // 2b. append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // 3a. Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }