const express = require ('express');
const app = express();
const {PORT} = require('./config/serverconfing');

app.listen(PORT, ()=>{
    console.log(`server is run up on : ${PORT}`);
})