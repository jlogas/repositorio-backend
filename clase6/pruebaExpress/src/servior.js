import express from 'express';



// servidor en expres que escuche por el puerto 8080
// funcion para el metodo Get en una ruta saludo, que responda hola
//desde express
const app = express()

const usuarios = [{
    id: 1,
    nombre: "juan",
    apellido: "lopez",
    edad: 25
},
{
    id:2,
    nombre: "jose",
    apellido: "venegas",
    edad: 25
}
]
app.use(express.urlencoded({extended:true}))

app.get("/saludi",(req,res)=>{
    res.send("hola mundo desde express");
})

app.get("/",(req,res)=>{
    console.log("REQ", req);
    res.send("hola mundo")
})
app.get("/usuarios",(req,res)=>{
    res.json(usuarios);
})

// obtener algo por solicitud
app.get("/usuarios/:userId",(req,res)=>{
    const {userId} =req.params
    const usuarioParam=usuarios.find(usuario => usuario.id== userId)
    if (usuarioParam) res.json(usuarioParam);
    else res.sendStatus(404);
})

app.get("/ejemploQuery",(req,res)=>{
const {nombre, apellido} = req.query
const usuario = usuarios.find(usuario => usuario.nombre == nombre)
 if(usuario) return res.json(usuario);
 else res.sendStatus(404);
});

app.listen(3000, ()=>{
    console.log("servidor desde el puerto 3000");
});