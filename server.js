const express = require("express");
const path =require("path");
const app = express();
app.use(express.static('./dist/frontend-Movie_review'));

app.get('/*',(req,res)=>{
    res.sendFile('index.html',{root:'dist/frontend-Movie_review/'});
});

app.listen(process.env.PORT || 8080);