'use strict'

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