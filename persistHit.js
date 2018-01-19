const Gists      = require('gists');
const db         = require('./db');
const formatJSON = require('./formatJSON');

const gists = new Gists({
    username: 'jim-d53',
    password: 'it is exactly 53 degrees'
});

module.exports = (req, res, next) => {
    db.get('hits')
        .push({
            time:       req.time,
            referrer:   req.get('Referrer'),
            uid:        req.uid,
            externalIP: req.externalIP,

            ...req.geo,
            ...req.deviceDetails,
            ...req.clientDetails
        })
        .write();

    // todo remove this test
    const hits = db.get('hits').value();
    if (hits.length > 4) {
        gists.edit({
            id:      '5402a6698048fc9dcfe1acc74d7a6305',
            params:  ['content'],
            content: formatJSON(hits)
        }, (err) => console.log(err));
    }

    next();
};