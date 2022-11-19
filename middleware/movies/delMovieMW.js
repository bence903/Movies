/**
 * Kitöröl egy filmet az adatbázisból
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
        return function(req, res, next) {
            if (typeof res.locals.film === 'undefined') {
                return next();
            }
    
            res.locals.film.remove(err => {
                if (err) {
                    return next(err);
                }
    
                return res.redirect('/');
            });
        };
};