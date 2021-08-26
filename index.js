const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.live.com",
    port: "25",
    secure: false,
    auth: {
        user: "thalis_denisson@hotmail.com",
        pass: "Suxvg*12"
    }

});

transporter.sendMail({
    from: "Thales Santos <thalis_denisson@hotmail.com>",
    to: "medtechcell@gmail.com",
    subject: "TITULO DO EMAIL",
    text: "Olá, estou fazendo um teste.",
    html: "Olá, é apenas um <a href='https://google.com'> teste </a>"
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    })