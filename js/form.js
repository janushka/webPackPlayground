import React from 'react';
import PieChart from './piechart.js';

var Form = React.createClass({
    getInitialState: function () {
        return {chartArray: [25, 50, 25]};
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var africanInput = this.refs.africanInput.value.trim();
        var americanInput = this.refs.americanInput.value.trim();
        var europeanInput = this.refs.europeanInput.value.trim();

        console.log("The input values are: " + africanInput + ", " + americanInput + ", " + europeanInput);

        var cA = [Number(africanInput), Number(americanInput), Number(europeanInput)];
        this.setState({chartArray: cA});

        return;
    },

    handleClick: function () {
        //this.setState({firstname: "Salomé"});
        console.log("The button has been clicked!");
    },
    /**
     * @return {object}
     */
    render: function () {
        var svgStyle = {
            width: '500px',
            height: '500px'
        };

        return (
            <div className="row">
                <div className="six columns">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="africanInput">African</label>
                        <input className="u-full-width" type="text" placeholder="25"
                               id="africanInput" ref="africanInput"/>
                        <label htmlFor="americanInput">American</label>
                        <input className="u-full-width" type="text" placeholder="50"
                               id="americanInput" ref="americanInput"/>
                        <label htmlFor="europeanInput">European</label>
                        <input className="u-full-width" type="text" placeholder="25"
                               id="europeanInput" ref="europeanInput"/>
                        <input className="button-primary" type="submit" value="Submit"/>
                    </form>
                </div>
                <div className="six columns">
                    <svg style={svgStyle}/>
                    <PieChart chartData={this.state.chartArray}></PieChart>
                </div>
            </div>
        );
    }
});

export default Form;

