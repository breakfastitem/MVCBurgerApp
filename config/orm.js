const connection = require("./connection");

function selectAll(callback){
    connection.query("SELECT * FROM burgers",(err,data)=>{
        callback(err,data);
    });
}

function insertOne(burgerName,devoured,callback){
    connection.query("INSERT INTO burgers (burger_name,devoured) VALUES (?,?)",[burgerName,devoured],(err)=>{
        callback(err);

    });
}

function updateOne(id,devoured,callback){
    connection.query("UPDATE burgers SET devoured=? WHERE id=?",[devoured,id],(err)=>{
        callback(err);
    });
}

module.exports={selectAll,insertOne,updateOne};