
const {Pingcontroller2} = require('../controllers/pingControllers2.js');
function configPingRoutes(app){
    app.get('/api/v3/ping',Pingcontroller2);
}
module.exports= {configPingRoutes};