const btoa        = require('btoa');
const parseCookie = require('./parseCookie');

const generateUID = req => [
    req.externalIP,
    req.geo.city,
    req.geo.country,
    req.time
].join(';');

const SECONDS_IN_DAY   = 86400;
const MAX_AGE_ONE_YEAR = 365 * SECONDS_IN_DAY;

module.exports = (req, res, next) => {
    const cookies = parseCookie(req.header('Cookie'));
    let uid;

    if (cookies.uid) {
        uid = cookies.uid;
    } else {
        uid = btoa(generateUID(req));
        res.set(
            'Set-Cookie',
            `uid=${uid}; Max-Age=${MAX_AGE_ONE_YEAR}`
        );
    }

    req.uid = uid.replace('=', '');

    next();
};