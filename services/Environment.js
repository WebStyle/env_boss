const fs = require('fs');
const {exec} = require('child_process');

class EnvironmentService {
  constructor(item) {
    this._item = item;
  }

  run() {
    exec(`export ${this._item.key}=${this._item.value}`, (error, stdout, stderr) => {
      if (error) throw error;

      console.log(process.env[this._item.key]);

      if (!process.env[this._item.key]) throw new Error(`Command didn't run`);

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  }
}

module.exports = EnvironmentService;