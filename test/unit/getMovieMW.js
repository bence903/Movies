var expect = require('chai').expect;
var getMovieMW = require('../../middleware/movies/getMovieMW');

describe('getMovieMW middleware ', function () {
    it('should set res.locals.film with film obj', function (done) {
        const mw = getMovieMW({
            FilmModel:{
                findOne:(i1,cb)=>{
                    expect(i1).to.be.eql({_id: '22'});
                    cb(null, 'mockmovie');
                }
            }
        });

        const resMock={
            locals: {}
        };

        mw({
            params:{
                movieid: '22'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({film: 'mockmovie'});
            done();
        });
    });

});

describe('getMovieMW middleware ', function () {
    it('should throw db error', function (done) {
        const mw = getMovieMW({
            FilmModel:{
                findOne:(i1,cb)=>{
                    expect(i1).to.be.eql({_id: '22'});
                    cb('dberror', null);
                }
            }
        });

        const resMock={
            locals: {}
        };

        mw({
            params:{
                movieid: '22'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql('dberror');
            done();
        });
    });

});

describe('getMovieMW middleware ', function () {
    it('should throw error, when movie is missing', function (done) {
        const mw = getMovieMW({
            FilmModel:{
                findOne:(i1,cb)=>{
                    expect(i1).to.be.eql({_id: '22'});
                    cb(undefined, null);
                }
            }
        });

        const resMock={
            locals: {}
        };

        mw({
            params:{
                movieid: '22'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql(undefined);
            done();
        });
    });

});