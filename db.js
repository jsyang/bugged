const low      = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const db = low(new FileSync('hits.json'));
db.defaults({hits: []}).write();

module.exports = db;