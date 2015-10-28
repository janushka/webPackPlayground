/**
 * Created by Njoku on 01.04.2015.
 */

//document.write("It works!");
require("./style.css");
//document.write(require("./content.js"));

import React from 'react';
import Hello from './js/hello.js';

console.log('It works wonderfully!');

React.render(<Hello/>, document.body);