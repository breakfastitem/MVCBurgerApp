const orm = require("../config/orm");

const burger = {

    addBurger: function (burgerName,callback) {
        orm.insertOne(burgerName,false,()=>{
            callback(err);
        });
    },
    
    eatBurger: function(burgerId,burgerName,callback){
        orm.updateOne(id,burgerName,true,(err)=>{
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