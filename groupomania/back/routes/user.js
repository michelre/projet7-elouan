const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const password = require('../middleware/password');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const connectionLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 100 requests per windowMs
  message: 'Trop de connexions, veuillez réessayer dans quelques minutes'
});

const userCtrl = require('../controllers/user');

router.post('/signup', password, userCtrl.signup);
router.post('/login', connectionLimit, userCtrl.login);
router.post('/logout', auth, userCtrl.logout);
router.put('/profilePicture', auth, multer, userCtrl.setProfilePicture);
router.put('/profilePicture', auth, userCtrl.deleteProfilePicture);
router.get('/:id', auth, userCtrl.getOne);
router.delete('/:id', auth, userCtrl.deleteUser);

module.exports = router;