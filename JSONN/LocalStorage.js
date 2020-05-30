'use strict'
window.addEventListener("load", () => {

    //  comprobamos si hay disponibilidad de LS
    if(typeof(Storage) != 'undefined'){
        console.log("LS disponible.");
    } else {
        console.log("LS no disponible.");
    }

    //  Guardar datos en LS
    localStorage.setItem("Titulo","Curso de JavaScript");

    //  Recuperar elementos
    localStorage.getItem("Titulo");
    document.querySelector("#ID_LS").innerHTML = localStorage.getItem("Titulo");

    //  Guardar objeto
    

});