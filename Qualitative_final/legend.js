// select the svg area
var svg2 = d3.select("#myLegend")

// create a list of keys
var keys = ["Illegal","21","20","19","18","17","16","14","None"]
var n = keys.length
var itemWidth = 100;
var itemHeight = 30;

// var color = d3.scaleOrdinal()
//   .range(["#FF544B", "#FF9454", "#FFE167", "#CD76FB", "#8BDFFC"])
 var color = d3.scaleOrdinal()
  .range(["#cddc39","#009688","#03a9f4","#3f51b5","#673ab7","#9c27b0","#e81e63","#ff7621","#ffffff"])
  
var legend = svg2.selectAll(".legend")
	.data(keys)
	.enter()
	.append("g")
	.attr("transform", function(d,i) { return "translate(" + i%n * itemWidth + "," + Math.floor(i/n) * itemHeight + ")"; })
	.attr("class","legend");
	
var rects = legend.append('rect')
	.attr("width",45)
	.attr("height",45)
	.attr("fill", function(d,i) { return color(i); });

	
var text = legend.append('text')
	.attr("x", 0)
	.attr("y",85)
	.text(function(d) { return d; })
	.attr("fill",function(d,i) { return color(i);})
	.attr("text-align","center")
    .attr("font-size","18px");

