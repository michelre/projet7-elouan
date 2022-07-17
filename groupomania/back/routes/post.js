const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

const multer = require('../middleware/multer-config');

router.post ('/', multer, postCtrl.create);
router.get ('/', postCtrl.getAll);
router.get ('/:id', postCtrl.getOne);
router.delete ('/:id', multer, postCtrl.deleteOne);
router.put ('/:id', multer, postCtrl.updateOne);

module.exports = router;