const express = require ('express');
const {Pingcontroller} = require('./controllers/pingcontrollers.js');
const {configPingRoutes} = require('./routes/pingRoutes.js')

const { routers } = require('./routes/pingRouters4.js')
const app = express();

// console.log("hi2",Pingcontroller)
const {PORT} = require('./config/serverconfing');
app.get('/api/v1/ping',(req,res)=>{ // version 1
     return   res.json({message : 'Alive'})
})
app.get('/api/v2/ping',Pingcontroller);// vesion 2
configPingRoutes(app);// version 3
console.log("router: ",routers)
app.use('/api',routers); // version 4
app.listen(PORT, ()=>{
    console.log(`server is run up on : ${PORT}`);
})