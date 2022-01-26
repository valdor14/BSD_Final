const express = require('express')
const router = express.Router();
const newsControllers = require('../controllers/newsControllers')



// router.route("/login").post(usersControllers.login)
// router.route("/register").post(usersControllers.register)
// router.route("/loggedIn").get(usersControllers.loggedIn)
// router.route("/logOut").post(usersControllers.logOut);
// router.route("/:id").get(usersControllers.getUserById)
// router.route("/").get(usersControllers.getAllUsers).post(usersControllers.createNewUser)

router.route("/refreshNews").get(newsControllers.getRefreshNews)
router.route("/").get(newsControllers.getAllNews)

module.exports = router;