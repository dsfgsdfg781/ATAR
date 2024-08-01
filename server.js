const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // או כל פורט אחר שתבחר

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// הגדר את המייל שממנו יישלחו המיילים (יש להשתמש במייל אמיתי)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // האימייל שלך
        pass: 'your-email-password'   // הסיסמה שלך
    }
});

// מסלול לשליחת בקשת הרשמה לאימייל שלך
app.post('/register', (req, res) => {
    const { firstName, lastName, email } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com', // האימייל שלך
        to: 'meirkeberkovich770@gmail.com', // האימייל שלך לקבלת בקשת הרשמה
        subject: 'בקשת הרשמה חדשה',
        text: `קיבלת בקשת הרשמה חדשה מ: ${firstName} ${lastName}, אימייל: ${email}. אנא אשר את הבקשה.`,
        html: `<p>קיבלת בקשת הרשמה חדשה מ: <strong>${firstName} ${lastName}</strong>, אימייל: <strong>${email}</strong>.</p><p>אנא <a href="http://localhost:3000/approve?email=${email}">אשר את הבקשה</a>.</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Registration request sent');
        }
    });
});

// מסלול לאישור בקשת הרשמה
app.get('/approve', (req, res) => {
    const email = req.query.email;
    // פה אתה יכול להוסיף את ההיגיון שלך כדי לאשר את המשתמש בבסיס הנתונים שלך

    res.send(`ההרשמה של ${email} אושרה!`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
