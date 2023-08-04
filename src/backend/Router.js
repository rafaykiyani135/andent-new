const express = require("express");
const multer = require("multer");
const router = new express.Router();
const nodemailer = require("nodemailer");
const upload = multer({ dest: 'uploads/' });
const fs = require('fs'); // Require the fs module for file operations

// send mail
router.post("/appointment", upload.single('file'), (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const options = {
      from: process.env.EMAIL,
      to: "rkiyani50@gmail.com",
      subject: "Book an Appointment",
      html: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #A7CCC8;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="center" bgcolor="#ffffff">
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 100%;">
              <tr>
                <td align="center" bgcolor="#A7CCC8" valign="top" style="padding: 40px 10px;">
                  <h1 style="color: #333333; font-size: 28px; font-weight: bold;">Appointment Request</h1>
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 20px;">
                  <p style="color: #333333; font-size: 16px;">From : ${req.body.firstName} ${req.body.lastName}</p>
                  <p style="color: #333333; font-size: 16px;">Contact : ${req.body.phoneNum}, ${req.body.userEmail} </p>
                  <p style="color: #333333; font-size: 16px;">${req.body.message}</p>
                </td>
              </tr>
              <tr>
                <td align="center" bgcolor="#f5f5f5" style="padding: 20px;">
                  <p style="color: #888888; font-size: 12px;">Sent Through Andent Website</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>`,
    };

    if (req.file!==undefined) {
        options.attachments = [
          {
            filename: req.file.originalname,
            path: req.file.path // Use req.file.path to get the temporary file path
          }
        ];
    }

    

    // Send the email
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.log("Error sending email:", err);
        res.status(500).json({ status: 500, error: err });
      } else {
        console.log("Email sent " + info.response);
        res.status(201).json({ status: 201, info });

        // Remove the temporary file after sending the email
        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error('Error deleting temporary file:', err);
          }
        });
      }
    });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ status: 500, error });
  }
});

router.post("/getcallback", (req, res) => {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
  
      const options = {
        from: process.env.EMAIL,
        to: "rkiyani50@gmail.com",
        subject: "Get Call Back Request From Andent Website",
        html: `<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #A7CCC8;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" bgcolor="#ffffff">
              <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 100%;">
                <tr>
                  <td align="center" bgcolor="#A7CCC8" valign="top" style="padding: 40px 10px;">
                    <h1 style="color: #333333; font-size: 28px; font-weight: bold;">Call Back Request</h1>
                  </td>
                </tr>
                <tr>
                  <td align="left" style="padding: 20px;">
                    <p style="color: #333333; font-size: 16px;">From : ${req.body.Name}</p>
                    <p style="color: #333333; font-size: 16px;">Contact : ${req.body.phoneNum} </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" bgcolor="#f5f5f5" style="padding: 20px;">
                    <p style="color: #888888; font-size: 12px;">Sent Through Andent Website</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>`,
      };      
  
      // Send the email
      transporter.sendMail(options, (err, info) => {
        if (err) {
          console.log("Error sending email:", err);
          res.status(500).json({ status: 500, error: err });
        } else {
          console.log("Email sent " + info.response);
          res.status(201).json({ status: 201, info });
        }
      });
    } catch (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ status: 500, error });
    }
  });



module.exports = router;
