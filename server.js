require('ejs');
const express = require('express');
const app = express();

const port = process.env.PORT || 4500;

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`The server is running at http://localhost:${port}`);
});

app.get("/",(req,res)=>{
    res.status(200).render("home",{
        imgSrc:"welcome.png",
        message:"Enter your name",
        fname:null
    });
});

let msg,newImg;
app.post("/greet",(req,res)=>{
    const name = req.body.name;
    msg = name;
    if(msg === ""){
        newImg = "welcome.png";
    } else {
        newImg = "batHello.png";
    }
    res.status(201).redirect("/greet");
});

app.get("/greet",(req,res)=>{
    res.status(200).render("home",{
        message:"Enter your name",
        imgSrc: newImg,
        fname:msg
    });
});
