const connection = require("./connection");

function selectAll(){
    connection.query("SELECT * FROM burgers",(data)=>{
        if(err)throw err;
        return data;
    });
}

function insertOne(burgerName,devoured){
    connection.query("INSERT INTO burgers (burger_name,devoured) VALUES (?,?)",[burgerName,devoured],()=>{
        if(err)throw err;

    });
}

function updateOne(id,burgerName,devoured){
    connection.query("UPDATE burgers SET burger_name=?,devoured=? WHERE id=?",[burgerName,devoured,id],()=>{
        if(err)throw err;

    });
}

module.exports={selectAll,insertOne,updateOne};