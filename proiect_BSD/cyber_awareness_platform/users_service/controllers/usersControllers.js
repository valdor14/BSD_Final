const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req,res,next) => {
    try{
        const [users,_] = await User.findAll();
        res.status(200).json({count: users.length, users})
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.createNewUser = async (req,res,next) => {
    try {
        let {email,password} = req.body
        let user = new User(email, password)
        user = await user.save()
        res.status(201).json({message: "User created"})
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getUserById = async (req,res,next) => {
    try {
        let userId = req.params.id
        let [user,_] = await User.findById(userId);
        res.status(200).json({user: user[0]})

    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.register = async (req,res,next) => {
    try {
        const {email, password, passwordVerify} = req.body
        if(!email || !password || !passwordVerify){
            return res.status(400).json({
                errorMessage: "Please enter all required fields"
            })
        }
        if(password.length < 2) {
            return res.status(400).json({
                errorMessage: "Please enter a stronger password"
            })
        }
        if(password != passwordVerify){
            return res.status(400).json({
                errorMessage: "The passwords do not match"
            })
        }
        const [existingEmail, _] = await User.findByEmail(email)
        if(existingEmail.length > 0){
            return res.status(400).json({
                errorMessage: "Account already exists"
            })
        }
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt);
        let newUser = new User(email, passwordHash)
        newUser = await newUser.save()

        const token = jwt.sign(
            {
                id: newUser.id
            },
            process.env.JWT_SECRET
        )
        res.cookie("cap", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        }).send({message: newUser})


    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.login = async (req,res,next) => {
    try {
        const {email, password} = req.body
        if(!email || !password) {
            return res.status(400).json({
                errorMessage: "Please enter all required fields"
            })
        }
        let [existingUser,_] = await User.findByEmail(email)
        existingUser = existingUser[0]
        if(!existingUser){
            return res.status(401).json({
                errorMessage: "Wrong email or password"
            })
        }
        const correctPassword = await bcrypt.compare(password, existingUser.password)
        if(!correctPassword){
            return res.status(401).json({
                errorMessage: "Wrong email or password"
            })
        }
        const token = jwt.sign(
            {
                id: existingUser.id,
            },
            process.env.JWT_SECRET
        );
        res.cookie ("cap", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        }).send()

    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.loggedIn = (req,res,next) => {
    try {
        const token = req.cookies.cap
        if(!token){
            return res.json(null);
        }
        const validateUser = jwt.verify(token, process.env.JWT_SECRET)
        res.json(validateUser.id);

    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.loggedInUser = async(req,res,next) => {
    try {
        const token = req.cookies.cap
        if(!token){
            return res.json(null);
        }
        const validateUser = jwt.verify(token, process.env.JWT_SECRET)
        if(validateUser !== null){
            const [existingUser, _] = await User.findById(validateUser.id)
            res.json(existingUser);
        }else{

        res.json({});}


    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.logOut = (req,res,next) => {
    try {
        res.cookie("cap", "", {
            httpOnly: true,
            sameSite: "lax",
            secure: false
        }).send();

    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.updatePhishingCampaign = async (req,res,next) => {
    try {
        const {email, campaign} = req.body;
        let [updateUser,_] = await User.incrementCampaign(email, campaign)

        res.json({"message": "campaign updated"});
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.updatePhishingGrade = async (req,res,next) => {
    try {
        const {id, grade} = req.body;
        let [updateUser,_] = await User.updatePhishingGrade(id, grade)

        res.json({"message": "phishing grade updated"});
    } catch (error) {
        console.log(error);
        next(error)
    }
}