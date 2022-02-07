import { Saiyayin, Humano } from "./clases/Razas.js"


let participantes = []

document.getElementById("btnRegistrar").addEventListener("click", () => {
    //valores del formulario
    let nombre = document.getElementById("nombre").value    // select id="nombre"
    let raza = document.getElementById("raza").value   // select id="raza"
    let previewElement = document.getElementById("preview")    // div id="nombre"
    let imagenSrcBg = previewElement.style.backgroundImage
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length -2)   // la direccion completa de imgSrc
    let ki = document.getElementById("poderPelea").value         // input id="poderPelea"


    let nuevoParticipante

    // nombre, img, poder, raza  orden de creacion de las clases
    if(raza == "Saiyajin"){
        nuevoParticipante = new Saiyayin(nombre, imgSrc, ki, raza)
    }else if(raza == "Humano"){
        nuevoParticipante = new Humano(nombre, imgSrc, ki, raza)
    }

    participantes.push(nuevoParticipante)
    console.log(nuevoParticipante)

})
