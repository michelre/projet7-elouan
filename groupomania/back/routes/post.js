const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post');

const multer = require('../middleware/multer-config');

router.post ('/', auth, multer, postCtrl.create);
router.get ('/', auth, postCtrl.getAll);
router.get ('/:id', postCtrl.getOne);
router.delete ('/:id', multer, postCtrl.deleteOne);
router.put ('/:id', multer, postCtrl.updateOne);
router.post ('/:id/like', postCtrl.likes);

module.exports = router;