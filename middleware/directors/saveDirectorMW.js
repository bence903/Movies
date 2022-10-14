/**
 * Elmenti a rendező adatait a formban megadottak alapján
 * Mentés után átirányít a /edit/:movieid oldalra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};