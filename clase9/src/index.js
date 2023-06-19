import  express  from "express";
import {engine} from "express-handlebars"
import __dirname from "./utils.js";
import path from "path";

const app = express()
const puerto = 4000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.engine("handlebars", engine());
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))
app.use("/", express.static(__dirname + "/public"))

app.get("/", (req,res)=>{
    res.render("home", {
        titulo: "Handelbars"
    })
});



app.listen(puerto, ()=>{
console.log("funcionando en puerto 4000");
})