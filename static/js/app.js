// from data.js
var tableData = data;
var thisdata = [];
var inputlist = [];
//console.log(data)

var button = d3.select("#filter-btn");
var inputt = d3.select(".form-control");



d3.select("tbody>tr").text(data);
//return(inputv,inputlist);
var tbody = d3.select("tbody");

data.forEach(function(ufo_data) {
    //console.log(ufo_data);
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(function([key, value]) {
     //console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
     });
  });









// Complete the click handler for the form
button.on("click", function() {



  d3.select("tbody").html("")
var inputv = d3.select(".form-control").property("value");

inputlist.push(inputv);
console.log(inputv);
var wanteddata = tableData.filter(data => data["datetime"] == inputv);
//console.log(wanteddata);

d3.select("tbody>tr").text(wanteddata);
//return(inputv,inputlist);
var tbody = d3.select("tbody");

wanteddata.forEach(function(ufo_data) {
    //console.log(ufo_data);
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(function([key, value]) {
     //console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
     });
  });

if(inputv === ""){
  d3.select("tbody>tr").text(data);
//return(inputv,inputlist);
var tbody = d3.select("tbody");

data.forEach(function(ufo_data) {
    //console.log(ufo_data);
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(function([key, value]) {
     //console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
     });
  });

}




});
