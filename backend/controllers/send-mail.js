const express = require('express')
const nodemailer = require('nodemailer')

let generatedOtp = 0;

const mailSender = async(req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    generatedOtp = otp;

    const Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cserajeswaryadav@gmail.com',
            pass: 'onru vztf koxs rzlf'
        }
    })   

    const MailOptions = {
        from: 'cserajeswaryadav@gmail.com',
        to: req.body.email,
        subject: "Verify Your Email!",
        html: `<h2>Welcome to Aditya Transport Hub</h2><h3>Your <b>OTP to access ATH is:</h3><h1>${otp}</h1>`
    }

    Transporter.sendMail(MailOptions, (err, info) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            return res.status(200).json(otp)
        }
    })
}

const otpValidation = async(requ,resp)=>{
    return resp.status(200).json(generatedOtp)
}

exports.mailSender = mailSender
exports.otpValidation = otpValidation;