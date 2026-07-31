const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const header = req.header('authorization');
    const token = header?.startsWith('Bearer ') ? header.slice(7) : req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'Authentication is required' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: ['HS256'],
            issuer: 'valorant-marketplace',
            audience: 'valorant-marketplace-api'
        });
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

const requireRole = (...roles) => (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'You do not have permission to perform this action' });
    }
    next();
};

module.exports = { auth, requireRole };
