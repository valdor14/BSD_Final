const User = require("../models/User");
const Quiz = require("../models/Quiz");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { spawn } = require('child_process');
const ps = require('python-shell');


exports.getAllQuizes = async (req,res,next) => {
    try{
        const [quizes,_] = await Quiz.findAll();
        res.status(200).json({count: quizes.length, quizes})
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getQuizByCategory = async (req,res,next) => {
    try {
        let quizCategory = req.params.category
        let [quizes,_] = await Quiz.findByCategory(quizCategory);
        res.status(200).json({quizes: quizes})

    } catch (error) {
        console.log(error);
        next(error)
    }
}

// exports.postRefreshNews = async (req,res,next) => {
//     try{
//         const [users,_] = await User.findAll();
//         res.status(200).json({count: users.length, users})
//     } catch(error) {
//         console.log(error);
//         next(error)
//     }
// }