const logger = require('../services/logger.service')

function requireAuth(req, res, next) {
    console.log(req.session)
    if (!req.session || !req.session.user) {
        logger.info('no logged in user')
        res.status(401).end('Unauthorized');
        return;
    }
    next();
}

async function requireAdmin(req, res, next) {
    const user = req.session.user;
    if (!user.isAdmin) {
        res.status(401).end('Unauthorized Enough..');
        return;
    }
    next();
}


// module.exports = requireAuth;

module.exports = {
    requireAuth,
    requireAdmin
}