class Usuario{
    

    constructor(nombre,apellido){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = [],
        this.mascotas = []
    }
        

    getFullName(){
        let fullName =`hola mi nombre es: ${this.nombre} ${this.apellido}`
        return fullName
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        let numMascotas=this.mascotas.length
        return numMascotas
    }
    addBook(nombre,autor){
        let books = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push(books)
    }

    getBook(){
        return this.libros.map(libro => libro.nombre)
    }

}