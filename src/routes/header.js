        const           express = require('express');
const           router = express.Router();

const                headerController = require('../controllers/HeaderController');

                router.use('/', headerController.headerhome);

module.exports = router;
