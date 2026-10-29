const jwt = require('jsonwebtoken');

// returns a decoded token (what it holds), or null if the token has expired, is bad, or missing
function getUserFromToken(token) {
    if (!token) return null; // if token is missing (empty) than return null first

    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return null;
    }
}

module.exports = { getUserFromToken }