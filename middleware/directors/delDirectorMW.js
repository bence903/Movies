/**
 * Kitöröl egy rendezőt az adatbázisból
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
        return function(req, res, next) {
            if (typeof res.locals.rendezo === 'undefined') {
                return next();
            }
    
            res.locals.rendezo.remove(err => {
                if (err) {
                    return next(err);
                }
                return next();
    
            });
        };
};