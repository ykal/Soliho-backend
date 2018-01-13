let nodemailer = require("nodemailer");
var htmlspecialchars = require('htmlspecialchars');


let config = require('../../config');

let functions = {
    sendEmail: function (req, res) {
        let name = htmlspecialchars(req.body.name);
        let email = htmlspecialchars(req.body.email);
        let content = htmlspecialchars(req.body.content);

        let htmlBody = `<h4> From - ${name} : <span> <i>${email}</i> </span> </h4>  <br> <p>${content}</p>`;
        
        let smtpConfig = {
            host: config.host,
            port: 465,
            secure: true, // use SSL
            auth: {
                user: config.email,
                pass: config.password
            },
            tls: {
                rejectUnauthorized: false
            }
        };

        let transporter = nodemailer.createTransport(smtpConfig);

        let mailOptions = {
            from: `${req.body.name} ✔ <contact@soliho.com>`, 
            to: 'lievin.feliho@soliho.com',
            subject: 'From Contacts',
            html: htmlBody
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status = 500;
                res.json({message: 'Coundn\'t send the email'});
                return console.log("Error");
            }
            console.log("Message sent");
            res.status = 200;
            res.json({message: 'Email Sent!'});
        });
    }
}

module.exports = functions;