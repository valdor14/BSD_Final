const express = require('express')
const router = express.Router();
const usersControllers = require('../controllers/usersControllers')



router.route("/login").post(usersControllers.login)
router.route("/register").post(usersControllers.register)
router.route("/loggedIn").get(usersControllers.loggedIn)
router.route("/loggedInUser").get(usersControllers.loggedInUser)
router.route("/logOut").post(usersControllers.logOut);
router.route("/updatePhishingGrade").post(usersControllers.updatePhishingGrade)
router.route("/:id").get(usersControllers.getUserById)
router.route("/phishingCampaign").post(usersControllers.updatePhishingCampaign)
router.route("/").get(usersControllers.getAllUsers).post(usersControllers.createNewUser)


module.exports = router;