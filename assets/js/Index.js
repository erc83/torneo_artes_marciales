import { Saiyajin, Humano } from "./clases/Razas.js"


let participantes = []

document.getElementById("btnRegistrar").addEventListener("click", () => {
    //valores del formulario
    let nombre = document.getElementById("nombre")   // select id="nombre"
    let raza = document.getElementById("raza")   // select id="raza"
    let previewElement = document.getElementById("preview")    // div id="nombre"
    let imagenSrcBg = previewElement.style.backgroundImage
    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length -2)   // la direccion completa de imgSrc
    let ki = document.getElementById("poderPelea")         // input id="poderPelea"


    let nuevoParticipante

    // nombre, img, poder, raza  orden de creacion de las clases
    if(raza.value == "Saiyajin"){
        nuevoParticipante = new Saiyajin(
            nombre.value, 
            imgSrc, 
            ki.value, 
            raza.value)
    }else if(raza.value == "Humano"){
        nuevoParticipante = new Humano(
            nombre.value, 
            imgSrc, 
            ki.value, 
            raza.value)
    }
    // validacion con todos los campos

    if(raza.value && nombre.value && ki.value && imagenSrcBg){
        participantes.push(nuevoParticipante)
        // inicio reseteo de formulario
        nombre.selectedIndex = 0;
        raza.selectedIndex = 0;
        previewElement.style.backgroundImage = "none"
        imagenSrcBg = previewElement.style.backgroundColor = "#f0f0f0"
        ki.value = ""
        // termino reseteo campos formulario
        reloadTable(); 
    }else{
        alert("Faltan datos por llenar")
    }
})

const reloadTable = () => {
    const participantesTemplate = document.getElementById("Participantes") //tabla en el HTML
    participantesTemplate.innerHTML = ""; //para ir limpiando
    participantes.forEach((p,i) => {
        participantesTemplate.innerHTML += `
        <div class="px-3 pb-2 participante"  data-fighter="${p.getNombre()}" >
        <div class="card">
          <img
            src="${p.getImg()}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">${p.getNombre()}</h4>
            <hr class="w-50 mx-auto ">
            <h6 class="card-text">Raza: ${p.getRaza()}</p>
            <h6 class="card-text">Poder de pelea: <span class="text-danger"> ${p.getPoder()} </span></h6>
            <button class="btn btn-outline-warning" onclick="activarHabilidad('${i}')"> Habilidad Especial </button>
          </div>
        </div>
      </div>
        `;
    });
};

// no se pueden ejecutar funciones al ser de tipo Modulo 
window.activarHabilidad = (i) => {

    const participante = participantes[i]
    if(participante.getRaza() == "Saiyajin"){
        console.log(participante.getRaza())
        participante.Transformacion()
    }
    else if (participante.getRaza() == "Humano"){
        participante.Coraje()
    }
    reloadTable()
}


//funcionalidad quien es el mas fuerte

document.getElementById("btnMasFuerte").addEventListener("click", () => {
    const masFuerte = participantes.sort((a,b) => b.getPoder() -  a.getPoder())[0];
    const nombre = masFuerte.getNombre()
    console.log(nombre)
    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = "0px 0px 5px 1px red"

})
