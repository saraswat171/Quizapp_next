const express = require('express');
const { testController } = require('../controllers');
// const authenticateJWT = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/addtest/:userId', testController.addingtest); // for both bulk and single
// router.post('/bulkaddtest/:userId', testController.bulkaddingtest);
router.get('/fetchTest', testController.fetchingtest);
router.get('/fetchTestbyId/:testId', testController.fetchTestbyId);
router.put('/updateTestbyId/:testId', testController.updateTestbyId);
router.delete('/deleteTestbyId/:testId', testController.deleteTestbyId);
module.exports = router;