'use strict'

var Languages = ["Java", "Python", "C", "C++", "C#", "Ruby", "Go"];

//var Element = parseInt(prompt("Ecoje un ID para seleccionar un lenguaje de programación...", 0));

//DocumentWrite(Languages,Element);
PrintArray(Languages);


function DocumentWrite(Languages, Element) {
    if (Element >= Languages.length) {
        alert("Introduce un ID valido");
    } else {
        var Text = `<p>Selecciono el lenguaje: ${Languages[Element]}</p>`
        document.write(Text);
    }
}

function PrintArray(Languages) {
    var T1 =`<p align="center">Lenguajes de programación.`
    document.write(T1);
    var T2 = ``
    for (let index = 0; index < Languages.length; index++) {
    }
    document.write(T2);
}