const bcrypt = require('bcrypt');

// פונקציה להצפנת סיסמה
async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

// בדיקת סיסמה בהתחברות
async function verifyPassword(inputPassword, storedPassword) {
    const isMatch = await bcrypt.compare(inputPassword, storedPassword);
    return isMatch;
}
