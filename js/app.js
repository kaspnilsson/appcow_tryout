var App = require('./components/App.react.js');
var ChartData = require('./ChartingData');
var ChartingWebAPIUtils = require('./utils/ChartingWebAPIUtils');
var React = require('react');
var ReactDOM = require('react-dom');

ChartData.init();

ChartingWebAPIUtils.getAllDatasets();

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
