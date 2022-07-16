const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

const multer = require('../middleware/multer-config');

router.post ('/create', multer, postCtrl.create);

module.exports = router;