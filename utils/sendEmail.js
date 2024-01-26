const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_AUTH,
      },
    });
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

module.exports = sendEmail;
