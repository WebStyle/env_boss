const fs = require('fs');
const Environment = require('../services/Environment');

const EnvironmentCollectService = require('../services/EnvironmentCollectService');


function index(req, res) {
  let storage = fs.readFileSync(__basedir + '/storage.json', 'utf-8');
  console.log(process.env);
  res.json(JSON.parse(storage));
}

function refresh(req, res) {
  if (!req.body.list) return res.send("Invalid request");
  const environmentCollectService = new EnvironmentCollectService(req.body.list);
  let list = environmentCollectService.collect();

  list.forEach((item) => new Environment(item).run());

  let data = JSON.stringify(list);

  fs.writeFile(__basedir + '/storage.json', data, 'utf-8', (err) => {
    if (err) throw err;
  });
}

module.exports.index = index;
module.exports.refresh = refresh;
