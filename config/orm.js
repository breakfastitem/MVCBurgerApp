const connection = require("./connection");

function selectAll(){
    connection.query("SELECT * FROM burgers",(err,data)=>{
        callback(err,data);
    });
}

function insertOne(burgerName,devoured){
    connection.query("INSERT INTO burgers (burger_name,devoured) VALUES (?,?)",[burgerName,devoured],(err)=>{
        callback(err);

    });
}

function updateOne(id,burgerName,devoured){
    connection.query("UPDATE burgers SET burger_name=?,devoured=? WHERE id=?",[burgerName,devoured,id],(err)=>{
        callback(err);
    });
}

module.exports={selectAll,insertOne,updateOne};