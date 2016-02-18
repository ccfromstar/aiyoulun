module.exports = function (app, routes) {
    app.get('/',routes.index);
    app.get('/services',routes.services);
    app.get('/charteredboat',routes.charteredboat);
    app.get('/boat',routes.boat);
    app.get('/boatDetail',routes.boatDetail);
};