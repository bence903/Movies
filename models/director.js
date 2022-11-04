const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Rendezo = db.model('Rendezo', {
    nev: String,
    ev: Number,
    _film: {
        type: Schema.Types.ObjectId,
        ref: 'Film'
    }
});

module.exports = Rendezo;