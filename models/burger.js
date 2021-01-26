const orm = require("../config/orm");

const burger = {

    addBurger: function (burgerName,callback) {
        orm.insertOne(burgerName,false,(err)=>{
            callback(err);
        });
    },
    
    eatBurger: function(burgerId,callback){
        orm.updateOne(burgerId,true,(err)=>{
            callback(err);
        });
    },
    selectAllBurgers:function(callback){
        orm.selectAll((err,data)=>{
            callback(err,data);
        });
    }
}

module.exports= burger;