// var dataset = "index.js"

// var svgWidth = 500, svgHeight = 300, barPadding = 5;
// var barWidth = (svgWidth / dataset.length);


// var svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);
    
// var barChart = svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("y", function(d) {
//          return svgHeight - d 
//     })
//     .attr("height", function(d) { 
//         return d; 
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", function (d, i) {
//         var translate = [barWidth * i, 0]; 
//         return "translate("+ translate +")";
//     });
