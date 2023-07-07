const nodemailer = require('nodemailer');
// const { EMAIL, MAIL_PASSWORD } = require('./server-config');
const EMAIL = 'anuragappgambit123@gmail.com'
const MAIL_PASSWORD = 'pycnkzseenigzjau'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: MAIL_PASSWORD
    }
});

const sendMail = (serviceName) => {
    const mailOptions = {
        from: EMAIL,
        // to: 'baldaniyaashok153@gmail.com',
        to: 'anuragappgambit123@gmail.com',
        subject: `${serviceName} Service Failure`,
        text: `${serviceName} service stop unexpectedly`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendMail,
}