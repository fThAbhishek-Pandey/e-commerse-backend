const express = require('express');
const {timeLog} = require('../middleware/v4.js')
const {Pingcontroller3} = require('../controllers/pingControllers3.js');
console.log("Pingcontroller3 : ",Pingcontroller3);
console.log("timeLog : ",timeLog);
const routers = express.Router();
routers.use(timeLog);
routers.get('/v4/ping',Pingcontroller3);
module.exports= {routers};