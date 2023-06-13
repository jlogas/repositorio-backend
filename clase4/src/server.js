import express from 'express';
import ProductManager from './componentes/actividad.js';


const app = express();
app.use(express.urlencoded({extended:true}));
const producto = new ProductManager();

const arrayProductos = producto.getProducts()
//console.log(await arrayProductos);

app.get("/productos",async (req,res)=>{
    let limite = parseInt(req.query.limite);
    if (!limite) {
    return res.send(await arrayProductos)    
    } else {
    let productos = await arrayProductos;
    let arrayLimite = productos.slice(0,limite)
    res.send(arrayLimite);
    }
})


app.listen(8080, ()=>{
    console.log("servidor desde el puerto 8080");
})