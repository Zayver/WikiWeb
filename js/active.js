const titlePanel = {
     "index.html": "Presentación",
     "requirements.html": "Requerimientos",
     "description.html": "Descripción",
     "architecture.html": "Arquitectura",
     "development.html": "Desarrollo",
     "tests.html": "Pruebas",
     "deployment.html" : "Despliegue"
}


function setActive(){
    let page = window.location.pathname.split("/").pop()
    let index = Object.keys(titlePanel).indexOf(page)
    if(index === -1)
        return
    let nav = document.getElementsByClassName("navlinks")[0].children[index]
    nav.children[0].className = "active"
}


document.addEventListener("DOMContentLoaded", setActive)