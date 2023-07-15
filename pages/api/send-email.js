const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const message = {
    from: req.body.userEmail,
    to: process.env.GMAIL_EMAIL_ADDRESS,
    subject: "User request",
    text: req.body.message,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    <head>
      <meta charset="utf-8">

      <title>The HTML5 Herald</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

      <link rel="stylesheet" href="css/styles.css?v=1.0">

    </head>

    <body>
      <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
            </div>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <div style="font-size: 16px;">
            <h3>✉️${req.body.userEmail} has requested for for sign up </h3>
            <p>Message:</p>
            <br>
            </div>
            </div>
    </body>
    </html>`,
  };
  console.log(process.env.GMAIL_EMAIL_ADDRESS);
  console.log(process.env.GMAIL_APP_PASSWORD);
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === "POST") {
    await transporter
      .sendMail(message)
      .then((info) => {
        res.status(200).json({
          success: `Message delivered to ${info.accepted}`,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: `Connection refused at ${err}`,
        });
      });
  }
}
