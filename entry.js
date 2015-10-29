/**
 * Created by Njoku on 01.04.2015.
 */

//document.write("It works!");
require("./css/style.css");
require("./css/normalize.css");
require("./css/skeleton.css");
//document.write(require("./content.js"));

import React from 'react';
import ReactDOM from 'react-dom';
//import Hello from './js/hello.js';
//import D3Box from './js/d3box.js';
import PieChart from './js/piechart.js';
import Form from './js/form.js';

console.log('It works wonderfully!');

//ReactDOM.render(<Hello/>, document.getElementById("playground"));
//ReactDOM.render(<D3Box/>, document.getElementById("playground"));



ReactDOM.render(
    <div className="container">
        <section className="header">
            <h2 className="title">361° Feeback</h2>
            <h5>"Value Centered Leadership"</h5>
        </section>
        <br/><br/>
        <Form></Form>
    </div>,
    document.getElementById("playground"));