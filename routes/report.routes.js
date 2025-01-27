const express = require('express');
const router = express.Router();
const { submitReport } = require('../controllers/report.controller');
const { auth } = require('../middlewares/auth.middleware');
const validateRole = require('../middlewares/role.middleware');

router.post('/reports', auth, validateRole(['MANAGER']), submitReport);

module.exports = router;
