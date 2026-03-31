const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allow requests from all (Vercel deployment + localhost)
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'jugadumarketers@gmail.com',
    pass: process.env.EMAIL_PASS || 'mpgzweqgrysisfsm'
  }
});

// Since Vercel routes /api/* to this function,
// we can handle /api/send-email here.
app.post('/api/send-email', (req, res) => {
  const { from_name, from_email, phone_number, subject, message, type } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER || 'jugadumarketers@gmail.com',
    to: 'jugadumarketers@gmail.com', // Where you want to receive emails
    subject: `New ${type || 'Inquiry'}: ${subject || 'No Subject'}`,
    text: `You have received a new contact submission:

Name: ${from_name}
Email: ${from_email}
Phone: ${phone_number || 'N/A'}
Message: ${message}
`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({ success: false, error: 'Failed to send email' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send({ success: true, message: 'Email sent successfully!' });
  });
});

// For local testing
if (require.main === module) {
  const PORT = 5001;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
