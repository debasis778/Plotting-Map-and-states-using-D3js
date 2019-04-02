//styling the header
d3.select('h2')
    .style('color','Blue')
    .style('text-align','center');





//creating a map using D3 Js
//start map
var canvas = d3.select('body').append('svg')
.attr('width', 4000)
.attr('height',2000);

d3.json("india_states.geojson", function(data){
console.log("data is available!" + data);
var group = canvas.selectAll('g')
  .data(data.features)
  .enter()
  .append('g');
var projection = d3.geoMercator().scale(1850).translate([0,1250])
var path = d3.geoPath().projection(projection);

var areas =group.append('path')
  .attr('d', path)
  .attr('class','area')
  .attr('fill','orange');
group.append('text')
    .attr('x', function(d){ return path.centroid(d)[0];})
    .attr('y', function(d){ return path.centroid(d)[1];})
    .attr('text-anchor','middle')
    .text(function(d){ return d.properties.NAME_1;});
});
//end map
