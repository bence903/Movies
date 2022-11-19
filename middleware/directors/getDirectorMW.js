/**
 * Lekérdezi egy rendező adatait az adatbázisból
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const RendezoModel = requireOption(objectrepository, 'RendezoModel');

    return function(req, res, next) {
        RendezoModel.findOne(
            {
                _id: req.params.dirid
            },
            (err, rendezo) => {
                if (err || !rendezo) {
                    return next(err);
                }

                res.locals.rendezo = rendezo;
                return next();
            }
        );
    };
};