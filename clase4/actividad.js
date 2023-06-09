const fs = require("fs");

const productos = []

class ProductManager {

    static countId = 0

    constructor(title, description, price, thumbnail, code, stock){
        this.path = "./files.json",  
        
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
        fs.promises.writeFile(this.path, JSON.stringify(productos))
        return productos
    }

     getProducts= async ()=>{

        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
            console.log(data);
            const arrayJava = JSON.parse(data);
            console.log(arrayJava);
            return arrayJava
        } else {
            return console.log([]);
        } 
     }
       
     getProductByid= async (id) =>{
        let arrayJava = await this.getProducts()
        let arrayId =arrayJava.find(producto => producto.id === id)
        console.log(arrayId);
     }
    
     deleteProducts = async(id) =>{
        let arrayJava = await this.getProducts()
        let arrayFilter = arrayJava.filter(producto => producto.id != id)
        console.log(arrayFilter);
        console.log("producto eliminado");
     };

      updateProducts = async ({id, ...producto}) =>{
        await this.deleteProducts(id)
        let producroViejo = await this.getProducts();
        let editado =[
            {id, ...producto}, ...producroViejo
        ]
      }
     }

    

    // 

    //


const producto1 = new ProductManager("product1", "ejemplo", 30, "Sin imagen", "acb123", 25)
const producto2 = new ProductManager("producto2", "ejemplo2", 2, "Sin imagen2", "acb1232", 2)
const producto3 = new ProductManager("producto2", "ejemplo2", 2, "Sin imagen2", "acb1232", 2)


// producto1.addProduct("product1", "ejemplo", 30, "Sin imagen", "acb123", 25)
producto1.addProduct()
producto2.addProduct()
producto3.addProduct()
console.log("------------read");
producto3.getProducts()
console.log("--------------- delete");
producto1.deleteProducts(1)
producto1.updateProducts(
    {
        id: 3,
        title: 'producto nuevo',
        description: 'ejemplo nuevo',
        price: 2,
        thumbnail: 'Sin imagen2',
        code: 'acb1232',
        stock: 2
      }
)


// console.log(producto1.contadorId())