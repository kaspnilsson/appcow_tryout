var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

  receiveAll: function(datasets) {
    AppDispatcher.handleServerAction({
      type: "RECIEVE_DATASETS",
      datasets: datasets
    });
  },

};