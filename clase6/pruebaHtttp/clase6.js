const http = require('http')
// crear servidor
const server = http.createServer((req, res) =>{
    res.end('hola mundo');
//. end permite ingresarl algo
})

server.listen(8080, () =>{
    console.log("servidoer puerto 80880");
})