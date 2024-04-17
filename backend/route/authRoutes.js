const express = require('express')
// const authenticateJWT = require('../middleware/authMiddleware');

const { authController } = require('../controllers');
const router = express.Router();
router.post('/usersinfo', authController.SignUpUser);


router.post('/logininfo' ,authController.SignInUser );


module.exports = router;