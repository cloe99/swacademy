const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth:{
        user: "apiKey",
        pass: "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"
    }
})

exports.sendEmail = functions.https.onRequest((request,response) =>{
    const email_from = request.query.email_from;
    const message = request.query.message;

    const mailOptions = {
        from: 'SWAcademy <rmey687@gmail.com>',
        to: 'rmey687@gmail.com',
        subject: 'Serena Williams Academy',
        html: `${message} <br><br> From ${email_from}`
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(`Error: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`);
            response.send(error.toString())
        }
        response.send('Your message was submitted successfully')
    })
})