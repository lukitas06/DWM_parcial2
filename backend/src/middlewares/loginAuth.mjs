import jwt from 'jsonwebtoken';

function loginAuthentication(req, res, next) {
    
    try {
        const token = req.headers['authorization'].split(' ')[1];
        const user = jwt.verify(token, process.env.MY_SECRET);
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie('token');
        return res.status(401).json({
            ok: false,
            message: 'You need to be logged in to access this route'
        });
    }
}
export default loginAuthentication;