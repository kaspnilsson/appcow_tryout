var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

  selectDataset: function(key) {
    AppDispatcher.handleServerAction({
      type: "SELECT_DATASET",
      key: key
    });
  }
};
