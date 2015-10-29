import React from 'react';
import d3 from 'd3';

var PieChart = React.createClass({
    propTypes: {
        chartData: React.PropTypes.array
    },

    getInitialState: function () {
        return {chartArray: [25, 50, 25]};
    },

    componentDidMount: function () {
        var colorScale = d3.scale.category10([0, 1, 2, 3]);
        var pieChart = d3.layout.pie();
        var pieData = pieChart(this.props.chartData);
        var newArc = d3.svg.arc();
        newArc.outerRadius(170).innerRadius(40);

        d3.select("svg")
            .append("g")
            .attr("transform", "translate(250,190)")
            .selectAll("path")
            .data(pieData)
            .enter()
            .append("path")
            .attr("d", newArc)
            .style("fill", function (d, i) {
                return colorScale(i)
            })
            .style("opacity", .5)
            .style("stroke", "black")
            .style("stroke-width", "2px");
    },

    componentWillUpdate: function (nextProps, nextState) {
        console.log("The pie data changed to: " + nextProps.chartData);

        var colorScale = d3.scale.category10([0, 1, 2, 3]);
        var pieChart = d3.layout.pie();
        var pieData = pieChart( nextProps.chartData);
        var newArc = d3.svg.arc();
        newArc.outerRadius(170).innerRadius(40);

        d3.select("svg")
            .append("g")
            .attr("transform", "translate(250,190)")
            .selectAll("path")
            .data(pieData)
            .enter()
            .append("path")
            .attr("d", newArc)
            .style("fill", function (d, i) {
                return colorScale(i)
            })
            .style("opacity", .5)
            .style("stroke", "black")
            .style("stroke-width", "2px");
    },

    handleClick: function () {
        d3.select("circle").attr("r", 60).attr("cx", 100).attr("cy", 100).style("fill", "red");
    },

    render: function () {
        return (<div></div>);
    }
});

export default PieChart;