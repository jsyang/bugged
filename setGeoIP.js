const {flag} = require('country-code-emoji');
const get_ip = require('ipware')().get_ip;

const requestJSON = require('request-json');

const IPAPIclient = requestJSON.createClient('http://ip-api.com/json/');

const lookupIPAPI = ip => new Promise((resolve, reject) => {
    IPAPIclient.get(ip, (err, res, body) => {
        if (err) {
            reject(err);
        } else {
            resolve(body);
        }
    });
});


module.exports = (req, res, next) => {
    const {clientIp} = get_ip(req);

    req.time       = (new Date()).valueOf();
    req.externalIP = clientIp;

    lookupIPAPI(req.externalIP)
        .then(result => {
            req.geo = {
                org:          result.org,
                city:         result.city,
                country:      result.country,
                countryEmoji: flag(result.countryCode)
            };
        })
        .then(next);
};
