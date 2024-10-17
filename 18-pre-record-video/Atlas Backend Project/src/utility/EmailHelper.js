const nodemailer = require("nodemailer");

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {
  let transport = nodemailer.createTransport({
    host: "mail.themesoft69.com",
    port: 465,
    secure: true,
    auth: {
      user: "mern_ostad@themesoft69.com",
      pass: "h4e24DFTj6v)",
    },
    tls: { rejectUnauthorized: false },
  });

  let mailOption = {
    from: "MERN Ecommerce Solution <mern_ostad@themesoft69.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transport.sendMail(mailOption);
};

module.exports = EmailSend;
