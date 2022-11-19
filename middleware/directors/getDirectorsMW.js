/**
 * Lekérdezi az egy filmhez tartózó összes rendezőt
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const RendezoModel = requireOption(objectrepository, 'RendezoModel');

    return function(req, res, next) {
        if (typeof res.locals.film === 'undefined') {
            return next();
        }

        RendezoModel.find({ _film: res.locals.film._id }, (err, rendezok) => {
            if (err) {
                return next(err);
            }

            res.locals.rendezok = rendezok;
            return next();
        });
    };
};