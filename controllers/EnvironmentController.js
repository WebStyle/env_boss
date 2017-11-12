const fs = require('fs');

const EnvironmentCollectService = require('../services/EnvironmentCollectService');


function index(req, res) {
  let storage = fs.readFileSync(__basedir + '/storage.json', 'utf-8');
  res.json(JSON.parse(storage));
}

function refresh(req, res) {
  if (!req.body.list) return res.send("Invalid request");
  const environmentCollectService = new EnvironmentCollectService(req.body.list);
  let list = environmentCollectService.collect();


}

module.exports.index = index;