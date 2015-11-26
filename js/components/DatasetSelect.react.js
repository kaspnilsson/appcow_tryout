var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var MenuItem = ReactBootstrap.MenuItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var DatasetSelectActionCreators = require('../actions/DatasetSelectActionCreators');

var DatasetSelect = React.createClass({
	render: function() {
		var options = this.props.options || {};
		var items = [];
		for(var option in options) {
			items.push(<MenuItem id={option}>{options[option]}</MenuItem>);
		}
		return (
			<div id='dropdownWrap' className='col-md-12' >		
				<DropdownButton id='dropdown' onSelect={this._onSelect} title={'Charts'}>
					{items}
				</DropdownButton>
      </div>
    );
	},
	_onSelect: function(event) {
		DatasetSelectActionCreators.selectDataset(event.target.id);
	}
	
});

module.exports = DatasetSelect;