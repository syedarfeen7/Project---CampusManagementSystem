const nodemailer = require('nodemailer')
const transpoter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'syedarfeen789@gmail.com',
        pass: 'qweasdzxc123@@##',
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
})
module.exports.conformationEmail = (candidateEmail) => {
    const mailoption = {
        from: 'syedarfeen789@gmail.com',
        to: `${candidateEmail}`,
        subject: `Approved Email By Company`,
        html: `<h2> You apply for this job</h2> <br /> <p> congrats your req has been approved </p>`
    }
    return new Promise((resolve, reject) => {
        transpoter.sendMail(mailoption, (err, info) => {
            if (err) {
                console.log("Error In sending email", err)
                reject(err)
            }
            resolve(info)
        })
    })
}