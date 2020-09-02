const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if(!req.headers.authorization) return res.sendStatus(403)
    const token = req.headers.authorization.replace("Bearer ", "");
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = payload.userId;
        next();
    } catch(error) {
        res.sendStatus(403);
    }
}