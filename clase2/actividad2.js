class Contador{

    static contadorGlobal = 0;
 
    constructor(nombre){
     this.nombre = nombre,
     this.cuenta = 0
    }
 
    obtenerResponsable(){
       return this.nombre;
    }
 
    obtenerCuentaIndividual(){
       return this.cuenta;
    }
 
    obtenerCuentaGlobal(){
       return Contador.contadorGlobal
    }
 
    contar(){
       this.cuenta++
       Contador.contadorGlobal++
    }
 
 }
 
 const r1 = new Contador("res1")
 const r2 = new Contador("res2")
 
 r1.contar()
 r2.contar()