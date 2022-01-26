exports.send = function(email, subject, htmlcontent, callback) {
    var nodemailer = require('nodemailer');
    var smtpTransport = require('nodemailer-smtp-transport');

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'rosalia.denesik43@ethereal.email',
            pass: 'wsXQZCQCh5Gza2hepQ'
        }
    });

    var mailOptions = {
        from: 'rosalia.denesik43@ethereal.email',
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