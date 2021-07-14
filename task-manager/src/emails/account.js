const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "noreply@ankitkamboj.in", // Change to your recipient
  from: "noreply@ankitkamboj.in", // Change to your verified sender
  subject: "Test email",
  text: "easy to do anywhere, even with Node.js",
  html: "<strong>easy to do anywhere, even with Node.js</strong>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
