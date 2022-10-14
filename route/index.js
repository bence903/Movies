const renderMW = require('../middleware/renderMW');
const delMovieMW = require('../middleware/movies/delMovieMW');
const getMoviesMW = require('../middleware/movies/getMoviesMW');
const getMovieMW = require('../middleware/movies/getMovieMW');
const saveMovieMW = require('../middleware/movies/saveMovieMW');
const delDirectorMW = require('../middleware/directors/delDirectorMW');
const getDirectorsMW = require('../middleware/directors/getDirectorsMW');
const getDirectorMW = require('../middleware/directors/getDirectorMW');
const saveDirectorMW = require('../middleware/directors/saveDirectorMW');


module.exports = function (app) {
    const objRepo = {};

    app.get('/',
        getMoviesMW(objRepo),
        renderMW(objRepo, 'index'));

    app.use('/new',
        saveMovieMW(objRepo),
        renderMW(objRepo, 'film'));

    app.use('/edit/:movieid',
        getMovieMW(objRepo),
        getDirectorsMW(objRepo),
        saveMovieMW(objRepo),
        renderMW(objRepo, 'filmmod'));

    app.use('/edit/:movieid/new',
        saveDirectorMW(objRepo),
        renderMW(objRepo, 'muv'));

    app.use('/edit/:movieid/edit/:dirid',
        getDirectorMW(objRepo),
        saveDirectorMW(objRepo),
        renderMW(objRepo, 'muvmod'));

    app.get('/edit/:movieid/del/:dirid',
        getDirectorMW(objRepo),
        delDirectorMW(objRepo),
        renderMW(objRepo, 'filmmod'));

    app.get('/del/:movieid',
        getMovieMW(objRepo),
        delMovieMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/adatok/:movieid',
        getMovieMW(objRepo),
        getDirectorsMW(objRepo),
        renderMW(objRepo, 'adatok'));

};