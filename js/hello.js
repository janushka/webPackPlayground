import React from 'react';

var Hello = React.createClass({
    handleClick: function () {
        //this.setState({firstname: "Salomé"});
        console.log("The button has been clicked!");
    },
    /**
     * @return {object}
     */
    render: function () {
        return (
            <div>
                <h1>Hausverwaltung</h1>
                <button type="button" onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
});

export default Hello;
