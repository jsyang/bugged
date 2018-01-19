const db         = require('./db');
const formatJSON = require('./formatJSON');

module.exports = (req, res) => {
    const hits = db.get('hits').value();
    res.status(200).send(`<html><pre>${formatJSON(hits)}`);
};