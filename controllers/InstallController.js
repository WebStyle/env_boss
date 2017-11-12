const fs = require('fs');
const settings = require('../settings.json');

/**
 * @route /install/check
 * @method POST
 * @param req
 * @param res
 */
function check(req, res) {
  res.json({installed: settings.app.installed});
}

/**
 * @route /install
 * @method POST
 * @param req
 * @param res
 */
function install(req, res) {

  let data = settings;

  data.app = {
    installed: true,
    login: req.body.login,
    password: req.body.password
  };

  let result = JSON.stringify(data);

  fs.writeFile(__basedir + '/settings.json', result, 'utf-8', (err) => {
    if (err) return res.json(err);

    let resultFile = fs.readFileSync(__basedir + '/settings.json', 'utf-8');
    console.log('result file');
    console.log(resultFile);

    res.json({installed: true});
  });
}


module.exports.check = check;
module.exports.install = install;
