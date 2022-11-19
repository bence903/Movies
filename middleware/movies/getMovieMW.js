/**
 * Lekérdezi egy film adatait az adatbázisból
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const FilmModel = requireOption(objectrepository, 'FilmModel');

    return function(req, res, next) {
        FilmModel.findOne({ _id: req.params.movieid }, (err, film) => {
            if (err || !film) {
                return next(err);
            }

            res.locals.film = film;
            return next();
        });
    };
};