const {Pingcontroller} = require('../controllers/pingControllers2.js');
const {Pingcontroller3} = require('../controllers/pingControllers3.js');
const express = require('express');
const routers = express.Router();
function configPingRoutes(app){
    app.get('/api/v3/ping',Pingcontroller);
    return "hi dost";
}
function configPingRoutes2 (){
    console.log("i am in configPingRoutes2 : ",Pingcontroller3());
    routers.get('/v4/ping',Pingcontroller3);
}
module.exports= {configPingRoutes,configPingRoutes2};