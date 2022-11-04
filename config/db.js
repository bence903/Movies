const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/V2VU9O', { useNewUrlParser: true });

module.exports = mongoose;