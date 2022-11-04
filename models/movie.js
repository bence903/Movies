const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Film = db.model('Film', {
    cim: String,
    release: int,
    type: String,
    rate: int
});

module.exports = Film;