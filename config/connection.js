const mysql =  require("mysql");
require("dotenv").config();

let connection;
if(process.env.JAWSDB_URL){
    connection=mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host:"localhost",
        port: 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: "burgers_db"
    });
}  



connection.connect((err)=>{
    if(err)throw err;
});

module.exports = connection;