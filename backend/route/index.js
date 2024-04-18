const express = require('express');
const router = express.Router();
router.use("/", require("./authRoutes"))
router.use("/", require("./testRoutes"))
module.exports = router;