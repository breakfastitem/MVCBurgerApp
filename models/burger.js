const orm = require("../config/orm");

const burger = {

    addBurger: function (burgerName) {
        orm.insertOne(burgerName,false);
    },
    
    eatBurger: function(burgerId,burgerName){
        orm.updateOne(id,burgerName,true);
    },
    selectAllBurgers:function(){
        return orm.selectAll();
    }
}

module.exports= burger;