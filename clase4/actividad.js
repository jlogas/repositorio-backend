const fs = require("fs");

const productos = []

class ProductManager {

    static countId = 0

    constructor(title, description, price, thumbnail, code, stock){
        this.path = "./files.json",  //Ruta donde se guardaran los archivos
        
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.code = code,
        this.stock = stock   
    }

    contadorId(){
      let id = productos.length
      id = id+1
      return id

    }
    //id, title, description, price, thumbnail, code, stock
    addProduct(){
        console.log(this.title)
        let index = this.contadorId()
        let id = index
        let title = this.title
        let description = this.description
        let price = this.price
        let thumbnail = this.thumbnail
        let code = this.code
        let stock = this.stock
        const product = {id, title, description, price, thumbnail, code, stock}
        productos.push(product)
        console.log(productos)
        let pushArray=fs.promises.writeFile(this.path, JSON.stringify(productos))
        return pushArray
       
    }

     getProducts(){
        let pushArray = this.addProduct()
        let getArray= fs.promises.readFile(this.path, "utf-8")

        console.log(getArray);
     }

    // getProductsById(){}

    // updateProducts(){}

    // deleteProducts(){}

}

const producto1 = new ProductManager("product1", "ejemplo", 30, "Sin imagen", "acb123", 25)
const producto2 = new ProductManager("producto2", "ejemplo2", 2, "Sin imagen2", "acb1232", 2)

// producto1.addProduct("product1", "ejemplo", 30, "Sin imagen", "acb123", 25)
producto1.addProduct()
console.log("------------read");
producto2.getProducts()
console.log("Ver segundo producto")
producto2.addProduct()
// console.log(producto1.contadorId())