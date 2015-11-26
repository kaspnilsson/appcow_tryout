var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
	render: function() {
		return (
			<div className='col-md-12' id='header'>
				<h1>{'Example Charts'}</h1>
				<h5>{'Using React, Chart.js, and the Flux architecture'}</h5>
			</div>
		);
	}
});

module.exports = Header;