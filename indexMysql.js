const express = require('express');
const app = express();
const con = require('./configMysql');

app.get('/',(req, res)=>{
    
    con.query("select * from users", (err, result)=>{
        if(err){
            res.send("error")
        }
        else {
            res.send("Route done")
        }
    })
})



app.listen(5000)