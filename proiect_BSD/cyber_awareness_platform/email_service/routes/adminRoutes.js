const express = require('express')
const router = express.Router();
const adminControllers = require('../controllers/adminControllers')



router.route("/sendMail").post(adminControllers.sendMail)

module.exports = router;