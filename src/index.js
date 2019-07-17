import React from 'react';
import ReactDOM from 'react-dom';

let randomColor = Math.random() > 0.5 ? 'green':'blue'

ReactDOM.render(
	<h2 style={{color: randomColor}}>Hello React with Jsx {Math.random()}</h2>,
	document.getElementById('root')	
);
