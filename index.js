/**
 * Environment manager service.
 *
 * @copyright: farrukh mamatkhalilov 2017
 * @repo: github.com/webstyle/env_manager
 */

const express = require('express');

const app = express();
const port = 5000;

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', (req, res) => res.render('index', {title: 'ENV manager', message: 'Hello there! Coming soon...'}));

app.listen(port, console.log(`Server is run on port ${port}`));