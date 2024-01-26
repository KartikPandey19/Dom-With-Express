const express = require("express");
const app = express();
const port = 3000;


app.get("/sum",(req,res)=>{
    const number1 = parseInt(req.query.no1);
    const number2 = parseInt(req.query.no2);
    const sum = number1+number2;

    res.json({
        msg:sum
    })
    console.log(sum);
})

app.get("/intrest",(req,res)=>{
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const intrest = (principal*rate*time)/100;
    res.json({
        msg:intrest
    })
    console.log(intrest)
})

app.listen(port);