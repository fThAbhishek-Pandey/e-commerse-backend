const express = require ('express');
const app = express();
// app.use(express.json());
const {Pingcontroller} = require('./controllers/pingcontrollers.js');
const {configPingRoutes,configPingRoutes2} = require('./routes/pingRoutes.js')
// import Pingcontroller from './controllers/pingcontrollers.js';
// console.log("hi1",Pingcontroller);

console.log("configPingRoutes2 : ",configPingRoutes2)
app.use('/api',configPingRoutes2);
console.log("hi2",Pingcontroller)
const {PORT} = require('./config/serverconfing');
app.get('/api/v1/ping',(req,res)=>{
     return   res.json({message : 'Alive'})
})
app.get('/api/v2/ping',Pingcontroller);
configPingRoutes(app);
app.listen(PORT, ()=>{
    console.log(`server is run up on : ${PORT}`);
})