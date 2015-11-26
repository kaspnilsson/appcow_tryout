var Header = require('./Header.react');
var DatasetSelect = require('./DatasetSelect.react');
var MyChart = require('./charts/MyChart.react');
var ChartingStore = require('../stores/ChartingStore');
var React = require('react');

function getDataFromStore(dataset_name) {
	return ChartingStore.get(dataset_name);
}

function getStateFromStore() {
	return {
		datasets: ChartingStore.getAll(),
		selected: ChartingStore.getSelected(),
	};
}

function generateOptions(datasets) {
	var options = {};
	for(var set in datasets) {
		var text = datasets[set].chartType + ": " + datasets[set].title;
		options[set] = text;
	}
	return options;
}

var chartOptions = {
	scaleFontFamily: "'Lato', sans-serif",
	tooltipFontFamily: "'Lato', sans-serif",
	tooltipTitleFontFamily: "'Lato', sans-serif",
};

var canvasProperties = {};

var App = React.createClass({
	getInitialState: function() {
		return getStateFromStore();
	},

	componentDidMount: function() {
		ChartingStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ChartingStore.removeChangeListener(this._onChange);
	},

	render: function() {
		var selected = this.state.selected;
		var selectedDataset = this.state.datasets[selected];
		return (
			<div id='app' >
				<Header />
				<hr />
				<DatasetSelect 
					selection={this.state.selected} 
					options={{set1: 'Line', set2: 'Bar 1', set3: 'Bar 2', set4: 'Polar', set5: 'Doughnut', set6: 'Radar'}} 
				/>
				<MyChart 
					chartType={selectedDataset.chartType}
					title={selectedDataset.title}
					data={selectedDataset.data} 
					chartOptions={chartOptions} 
					canvasProperties={canvasProperties}
					id='chartContainer'
				/>
			</div>
			);
	},
	_onChange: function() {
		this.setState(getStateFromStore());
	}
});

module.exports = App;
