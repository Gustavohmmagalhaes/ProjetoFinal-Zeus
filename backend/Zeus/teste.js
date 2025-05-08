require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // <- IGNORA certificado SSL autoassinado
  }
});

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: 'seuemail@gmail.com',
  subject: 'Teste de envio',
  text: 'Isso é um teste!',
})
.then(info => console.log('Email enviado:', info))
.catch(err => console.error('Erro ao enviar email:', err));
