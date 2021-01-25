const express =require("express");
const handlebars = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app =express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine("handlebars",handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, ()=>{
    console.log("http://localhost:" + PORT);
});