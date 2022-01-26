const express = require('express')
const router = express.Router();
const quizControllers = require('../controllers/quizControllers')



// router.route("/login").post(usersControllers.login)
// router.route("/register").post(usersControllers.register)
// router.route("/loggedIn").get(usersControllers.loggedIn)
// router.route("/logOut").post(usersControllers.logOut);
// router.route("/:id").get(usersControllers.getUserById)
// router.route("/").get(usersControllers.getAllUsers).post(usersControllers.createNewUser)

router.route("/:category").get(quizControllers.getQuizByCategory)
router.route("/").get(quizControllers.getAllQuizes)

module.exports = router;