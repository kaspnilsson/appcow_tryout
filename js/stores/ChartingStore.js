var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('merge');

var CHANGE_EVENT = 'change';

var _sets = {};

var _selected = 'set1';

//extends EventEmitter
var ChartingStore = merge(EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _sets[id];
  },

  getAll: function() {
    return _sets;
  },

  getSelected: function() {
  	return _selected;
  }

});

ChartingStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.type) {
		case "RECIEVE_DATASETS":
			_sets = action.datasets;
			ChartingStore.emitChange();
			break;

		case "SELECT_DATASET":
			_selected = action.key;
			ChartingStore.emitChange();
			break;

		default:
			//nothing
	}

});

module.exports = ChartingStore;
