const Mail = require('../config/mail');


exports.sendMail = async (req,res,next) => {
    try{
        mailData = req.body
        console.log(req.body)
        Mail.send(mailData.email, mailData.subject, mailData.template, function(err, info) {
            if(err) {
                console.log(err)
            }
            else {
                console.log("Email sent successfully!")
            }
        });
        res.status(200).json({"email":"sent"})
    } catch(error) {
        console.log(error);
        next(error)
    }
}