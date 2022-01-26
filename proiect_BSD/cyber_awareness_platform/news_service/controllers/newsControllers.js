const User = require("../models/User");
const News = require("../models/News");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { spawn } = require('child_process');
const ps = require('python-shell');

exports.getRefreshNews = async (req,res,next) => {
    try{
        //const pyProg = spawn('python', ['/home/vlad/cyber_awareness_platform/server/scripts/newsCrawler.py']);
        ps.PythonShell.run('/home/vlad/cyber_awareness_platform/server/scripts/newsCrawler.py', null, function (err, results) {
            if (err) throw err;
            console.log('finished');
            console.log(results);
         });
        res.status(200).json({message: "script ran successfully"})
    } catch(error) {
        console.log(error);
        next(error)
    }
}

exports.getAllNews = async (req,res,next) => {
    try{
        const [news,_] = await News.findAll();
        res.status(200).json({count: news.length, news})
    } catch(error) {
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