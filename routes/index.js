const express = require('express');
const router = express.Router();

const InstallController = require('../controllers/InstallController');

router.get('/install/check', InstallController.check);
router.post('/install', InstallController.install);

module.exports = router;