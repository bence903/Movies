/**
 * Elmenti egy film adatait
 * Mentés után átirányít a főoldalra ( / )
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const FilmModel = requireOption(objectrepository, 'FilmModel');

    return function(req, res, next) {
        if (
            typeof req.body.cim === 'undefined' ||
            typeof req.body.release === 'undefined' ||
            typeof req.body.type === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.film === 'undefined') {
            res.locals.film = new FilmModel();
        }

        res.locals.film.cim = req.body.cim;
        res.locals.film.release = req.body.release;
        res.locals.film.type = req.body.type;

        res.locals.film.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
    };
};