const renderMW = require('../middleware/renderMW');
const delMovieMW = require('../middleware/movies/delMovieMW');
const getMoviesMW = require('../middleware/movies/getMoviesMW');
const getMovieMW = require('../middleware/movies/getMovieMW');
const saveMovieMW = require('../middleware/movies/saveMovieMW');
const delDirectorMW = require('../middleware/directors/delDirectorMW');
const getDirectorsMW = require('../middleware/directors/getDirectorsMW');
const getDirectorMW = require('../middleware/directors/getDirectorMW');
const saveDirectorMW = require('../middleware/directors/saveDirectorMW');

const FilmModel = require('../models/movie');
const RendezoModel = require('../models/director');


module.exports = function (app) {
    const objRepo = {
        FilmModel: FilmModel,
        RendezoModel: RendezoModel
    };

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

    app.use('/adatok/:movieid/new',
        getMovieMW(objRepo),
        saveDirectorMW(objRepo),
        renderMW(objRepo, 'muv'));

    app.use('/adatok/:movieid/edit/:dirid',
        getMovieMW(objRepo),
        getDirectorMW(objRepo),
        saveDirectorMW(objRepo),
        renderMW(objRepo, 'muvmod'));

    app.get('/adatok/:movieid/del/:dirid',
        getMovieMW(objRepo),
        getDirectorMW(objRepo),
        delDirectorMW(objRepo),
        getDirectorsMW(objRepo),
        renderMW(objRepo, 'adatok'));

    app.get('/del/:movieid',
        getMovieMW(objRepo),
        delMovieMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/adatok/:movieid',
        getMovieMW(objRepo),
        getDirectorsMW(objRepo),
        getDirectorMW(objRepo),
        renderMW(objRepo, 'adatok'));

};