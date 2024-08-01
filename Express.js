const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

// טוען תעודות SSL
const options = {
    key: fs.readFileSync('/path/to/your/privkey.pem'),
    cert: fs.readFileSync('/path/to/your/fullchain.pem')
};

// מגדיר את השרת לשרת בקשות HTTPS
https.createServer(options, app).listen(443, () => {
    console.log('HTTPS Server running on port 443');
});
