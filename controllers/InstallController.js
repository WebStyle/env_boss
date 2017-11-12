const fs = require('fs');
const settings = require('../settings.json');

/**
 * @route /install/check
 * @method POST
 * @param req
 * @param res
 */
function check(req, res) {
  res.json(settings.app.installed);
}

/**
 * @route /install
 * @method POST
 * @param req
 * @param res
 */
function install(req, res) {
  if (settings.app.installed) res.json({installed: true});

  let data = settings;
  data.app.installed = true;
  data.app.login = req.body.login;
  data.app.password = req.body.password;
  fs.writeFile('../settings.json', data, (err) => {
    if (err) return res.json(err);

    res.json({installed: true});
  });
}

module.exports.check = check;
module.exports.install = install;
