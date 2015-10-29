import React from 'react';
import d3 from 'd3';

var D3Box = React.createClass({
    componentDidMount: function () {
        //var el = this.getDOMNode();
        var circle = d3.select("svg").append("circle").attr("r", 40).attr("cx", 60).attr("cy", 60).style("fill", "grey");
    },

    handleClick: function () {
        d3.select("circle").attr("r", 60).attr("cx", 100).attr("cy", 100).style("fill", "red");
    },

    render: function () {
        return (
            < div className="d3Box">
                <br/>
                <button onClick={this.handleClick}>Resize me</button>
            </div>
        );
    }
});

export default D3Box;