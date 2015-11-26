var ChartingServerActionCreators = require('../actions/ChartingServerActionCreators');

module.exports = {

  getAllDatasets: function() {
    // simulate retrieving data from a database
    var datasets = JSON.parse(localStorage.getItem('datasets'));
    // simulate success callback
    ChartingServerActionCreators.receiveAll(datasets);
  }

};
