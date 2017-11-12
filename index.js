/**
 * Environment manager service.
 *
 * @copyright: farrukh mamatkhalilov 2017
 * @repo: github.com/webstyle/env_manager
 */

const express = require('express');

const app = express();
const port = 5000;

app.listen(port, console.log(`Server is run on port ${port}`));