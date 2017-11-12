const EnvironmentModel = require('../models/EnvironmentModel');

class EnvironmentCollectService {
  constructor(list) {
    this._inputList = list;
    this._outputList = [];
  }

  collect() {
    this._inputList.forEach(item => this._outputList.push(new EnvironmentModel(item.key, item.value)));
    return this._outputList;
  }
}

module.exports = EnvironmentCollectService;