const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Film = db.model('Film', {
    cim: String,
    release: Number,
    type: String,
});

module.exports = Film;