/**
 * Using the template engine render the values into the template
 *
 * Elnézést ezt copy-paste-eltem
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.render(viewName);
    };

};