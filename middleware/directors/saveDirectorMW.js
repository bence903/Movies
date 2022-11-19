/**
 * Elmenti a rendező adatait a formban megadottak alapján
 * Mentés után átirányít a /edit/:movieid oldalra
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const RendezoModel = requireOption(objectrepository, 'RendezoModel');

    return function(req, res, next) {
        if (
            typeof req.body.nev === 'undefined' ||
            typeof req.body.ev === 'undefined'
        ){
            return next();
        }

        if (typeof res.locals.rendezo === 'undefined') {
            res.locals.rendezo = new RendezoModel();
        }

        res.locals.rendezo.nev = req.body.nev;
        res.locals.rendezo.ev = req.body.ev;
        res.locals.rendezo._film = res.locals.film._id;

        res.locals.rendezo.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/adatok/${res.locals.film._id}`);
        });
    };
};