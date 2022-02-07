import Personaje from "./Personaje.js"


class Saiyayin extends Personaje{
    constructor (nombre, img, poder, raza){
        super(nombre, img, poder, raza)
    }

    Transformacion(){
        let poder = this.getPoder()
        this.getPoder(parseInt(poder*1.8))
    }
}

class Humano extends Personaje{
    constructor (nombre, img, poder, raza){
        super(nombre, img, poder, raza)
    }

    Coraje(){
        let poder = this.getPoder()
        this.getPoder(parseInt(poder*1.2))
    }
}

// console.log(new Humano("krilin", "...", 1235, "..."))  //revisar coraje en el prototype

export { Saiyayin, Humano } // en la exportacion se meten en un objeto