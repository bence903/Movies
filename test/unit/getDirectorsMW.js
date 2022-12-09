var expect = require('chai').expect;
var getDirectorMW = require('../../middleware/directors/getDirectorMW');

describe('getDirectorMW middleware ', function () {
    it('should set res.locals.rendezo with rendezo obj', function (done) {
        const mw = getDirectorMW({
            RendezoModel:{
                findOne:(i1,cb)=>{
                    expect(i1).to.be.eql({_id: '22'});
                    cb(null, 'mockdirector');
                }
            }
        });

        const resMock={
            locals: {}
        };

        mw({
            params:{
                dirid: '22'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({rendezo: 'mockdirector'});
            done();
        });
    });

});

describe('getDirectorMW middleware ', function () {
    it('should throw db error', function (done) {
        const mw = getDirectorMW({
            RendezoModel:{
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
                dirid: '22'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql('dberror');
            done();
        });
    });

});

describe('getDirectorMW middleware ', function () {
    it('should throw error, when director is missing', function (done) {
        const mw = getDirectorMW({
            RendezoModel:{
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
                dirid: '22'
            }
        },
        resMock,
        (err)=>{
            expect(err).to.be.eql(undefined);
            done();
        });
    });

});