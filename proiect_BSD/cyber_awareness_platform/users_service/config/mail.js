exports.send = function(email, subject, htmlcontent, callback) {
    var nodemailer = require('nodemailer');
    var smtpTransport = require('nodemailer-smtp-transport');

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'mable.spencer33@ethereal.email',
            pass: 'p5fuE1rJJ1MRHpcw9s'
        }
    });

    var mailOptions = {
        from: 'mable.spencer33@ethereal.email',
        to: email,
        subject: subject,
        html: htmlcontent
    };

    transporter.sendMail(mailOptions, function(err, info){
        transporter.close();
        if(err) {
            callback(err, info);
        }
        else {
            callback(null, info);
        }
    });
}