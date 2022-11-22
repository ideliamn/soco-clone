var indexRouter = require('./index')

module.exports = function (app) {
    app.route('/').get(indexRouter);
}