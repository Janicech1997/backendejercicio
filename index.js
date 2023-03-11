const express = require('express')
const app = express();
const Router = require('./route')

app.use(Router)

app.listen (3000, ()=> { 
    console.log ('aplicacion corriendo')
})





