/**
 * Lekérdezi az összes film nevét az adatbázisból
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const FilmModel = requireOption(objectrepository, 'FilmModel');

    return function(req, res, next) {
        FilmModel.find({}, (err, filmek) => {
            if (err) {
                return next(err);
            }

            res.locals.filmek = filmek;
            return next();
        });
    };
};