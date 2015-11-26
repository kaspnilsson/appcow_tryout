var React = require('react');
var ReactDOM = require('react-dom');
var Chartjs = require('chart.js');

var MyChart = React.createClass({
	getInitialState: function() { return {}; },

	render: function() {
		var canvasProperties = this.props.canvasProperties || {};
		canvasProperties['ref'] = 'chartCanvas';
		return (
			<div id='chartWrap' className='col-md-12' >
				<h3 ref='chartTitle' className='chartTitle'>{this.props.title}</h3>
				{React.createElement('canvas', canvasProperties)}
			</div>
		);
	},

	componentDidMount: function() {
		this.buildChart();
	},

	//generally bad form to override this, but for MyChart, component's state is 
	//determined entirely by props -- override disables repetitive rendering
	shouldComponentUpdate: function(nextProps, nextState) {
		return nextProps !== this.props;
	},

	componentDidUpdate: function() {
		var chart = this.state.chart;
		chart.destroy();
		this.buildChart();
	},

	buildChart: function() {
		var ctx = ReactDOM.findDOMNode(this.refs.chartCanvas).getContext('2d');
		var chart = new Chartjs(ctx)[this.props.chartType](this.props.data, this.props.chartOptions || {});
		//var legend = chart.generateLegend();
		//TODO: legend
		this.setState({chart: chart});
	},

	updateChart: function() {
		var chart = this.state.chart;
		var data = this.props.data;
		var chartOptions = this.props.chartOptions;

		while(chart.scale.xLabels.length > data.labels.length) {
			chart.removeData();
		}
		chart.scale.xLabels = data.labels;
		for(var label_index in data.labels) {
			vals = [];
			console.log(chart.datasets);
			for(var set in data.datasets) {
				vals.push(datasets[set].data[label_index]);
			}
			chart.addData(vals, data.labels[label_index]);
		}
		
		chart.scale.calculateXLabelRotation();
		chart.update();
	}

});

module.exports = MyChart;
