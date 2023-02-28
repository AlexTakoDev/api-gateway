const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        // console.log('decodedToken', decodedToken)
        const userId = decodedToken.sub;
        const role = decodedToken.role;
        req.auth = {
            userId: userId,
            role: role
        };
        // console.log(req.auth)
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token invalid' })
    }
};