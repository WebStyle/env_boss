const express = require('express');
const router = express.Router();

const InstallController = require('../controllers/InstallController');
const EnvironmentController = require('../controllers/EnvironmentController');

router.get('/install/check', InstallController.check);
router.post('/install', InstallController.install);

router.get('/env', EnvironmentController.index);
router.post('/env', EnvironmentController.refresh);

module.exports = router;