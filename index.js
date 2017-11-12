/**
 * Environment manager service.
 *
 * @copyright: farrukh mamatkhalilov 2017
 * @repo: github.com/webstyle/env_manager
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());


app.listen(port, console.log(`Server is run on port ${port}`));