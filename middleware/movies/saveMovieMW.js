/**
 * Elmenti egy film adatait
 * Mentés után átirányít a főoldalra ( / )
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};