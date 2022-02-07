import personajesData from "./Consulta.js";

document.getElementById("buttonImages").addEventListener("click", async () => {
    const { personajes } = await personajesData // detructuring genera un array de 5 objetos
    console.log(personajes)
    const pj = document.getElementById("nombre").value
    const imagenesPjTemplate = personajes
        .find( (p) => p.name == pj)
        .imagenes.map( i => `<img width="200" src="/assets/imgs/${pj}/${i}" />`)
        .join("")

    document.getElementsByClassName("personajes")[0].innerHTML = imagenesPjTemplate

    //2 intruccion para visualizar el click en la imagen bajo la visualizacion del elemento
    document.querySelectorAll(".personajes img").forEach( (i) => {
        i.addEventListener("click", (e) => {
            $("#imagenesModal").modal("toggle")
            const imagenSrc = e.target.src
            document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})`
        })
    })
})

