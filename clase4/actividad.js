const fs = require("fs");



class ProductManager {

    static countId = 0

    constructor(){
        this.path = "./files.json"
        this.productos = [] 
    }

    addProduct= async(title, description, price, thumbnail, code, stock) =>{
        
        ProductManager.countId++

        let newProduct ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.countId,
        }
        this.productos.push(newProduct)
        fs.promises.writeFile(this.path,JSON.stringify(this.productos))
    }

    //id, title, description, price, thumbnail, code, stock
 

     getProducts= async ()=>{

        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, 'utf-8');
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
        let arrayJava = await this.getProducts();
        let arrayFilter = arrayJava.filter(producto => producto.id != id)
        console.log("producto eliminado");
        console.log(arrayFilter);
        await fs.promises.writeFile(this.path, JSON.stringify(arrayFilter));
     };

      updateProducts = async ({id, ...producto}) =>{
        await this.deleteProducts(id)
        let producroViejo = await this.getProducts();
        let editado =[
            {id, ...producto}, ...producroViejo
        ]
      }
     }

    



const producto = new ProductManager()

producto.addProduct("product1", "ejemplo", 30, "Sin imagen", "acb123", 25)
producto.addProduct("product2", "ejemplo", 25, "Sin imagen", "acbqewqew", 1)
producto.addProduct("product3", "ejemplo", 35, "Sin imagen", "a31313ewqew", 7)
producto.getProductByid(2)
producto.deleteProducts(2)
      



// console.log(producto1.contadorId())