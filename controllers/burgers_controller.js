const express=  require("express");
const burger = require("../models/burger");

const router = express.router();

router.get("/",(req,res)=>{
    burger.selectAllBurgers((err,data)=>{
        if(err) throw err;
        
        res.render("index",{burgers: data});
    });
    
});

router.post("/api/burgers",(req,res)=>{
    burger.addBurger(req.body.name,(err)=>{
        if(err) throw err;
        res.sendstatus(200);
    });
});

router.put("/api/eat/",(req,res)=>{
    burger.eatBurger(req.body.id,req.body.name,(err)=>{
        if(err) throw err;
        res.sendstatus(200);
    });
});

module.exports=router;

