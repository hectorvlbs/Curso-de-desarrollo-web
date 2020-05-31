'use strict'
/*
{************************************}
    Programa:    Eventos - eventos con el mouse   
    Autor:       Villalobos Valenzuela Jesús Héctor
    Fecha:       18/Marzo/2020
    Descripción: Eventos creados con el mouse y como manipularlos         
{************************************}
*/
var Boton = document.querySelector("#boton");

//  Mouse over
Boton.addEventListener('mouseover',function() {
    Boton.style.background = "#cc3"
})

//  Mouse out
Boton.addEventListener('mouseout',function() {
    Boton.style.background = "white"
})

//  Click
Boton.addEventListener('click', function() {
    CambiaColorBoton();
})

function CambiaColorBoton() {
    //  console.log("a");
    var bg = Boton.style.background;
    if (bg == "pink") {
        Boton.style.background = "green";
    } else{
        Boton.style.background = "pink";
    }
}