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

  // filter the table
  function handleClick() {
    // 1. tell D3 library to look for where date values are sored on webpage m grab info, and hold it in date varible
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // 2. Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // 3. Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);