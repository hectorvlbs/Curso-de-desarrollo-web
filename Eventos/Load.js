'use strict'
window.addEventListener('load', () =>{

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

    var input = document.querySelector("#campo_nombre");

    //  Focus
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input.");
    });

    //  Blur
    input.addEventListener('blur', function(){
        console.log("Saliste del input.");
    });

    //  Keydown
    input.addEventListener('keydown', function(){
        console.log("Pulsando la tecla: ", String.fromCharCode(event.keyCode));
    });

    //  Keypress    
    input.addEventListener('keypress', function(){
        console.log("Telca presionada: ", String.fromCharCode(event.keyCode));
    });
    
    //  Keyup
    input.addEventListener('keyup', function(){
        console.log("Telca soltada: ", String.fromCharCode(event.keyCode));
    });
});