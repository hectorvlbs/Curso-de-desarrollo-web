'use strict'

var Languages = ["Java", "Python", "C", "C++", "C#", "Ruby", "Go"];


//var Element = parseInt(prompt("Ecoje un ID para seleccionar un lenguaje de programación...", 0));
//DocumentWrite(Languages,Element);
//Languages.sort();
//PrintArray(Languages);
//Languages.reverse();
//PrintArray2(Languages);
//PrintArray3(Languages);
FindArray(Languages,prompt("Ingresa un lenguaje de programación...",null));

//  Busquedas en arreglos
function FindArray(array, elementToS) {
    var search = array.find(as =>  as == elementToS);
    if (search != null) {
        var Text = `<h1>Se encontro el lenguaje de programación: ${search}</h1>`
        document.write(Text);
    } else {
        var Text = `<h1>No se encontro el lenguaje de programación: ${search}</h1>`
        document.write(Text);
    }
}

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
    var T2 = ``;
    for (let index = 0; index < Languages.length; index++) {
        T2 = T2 + `<p align="center">${Languages[index]}</p>`
    }
    document.write(T2);
}

function PrintArray2(array){
    var T1 =`<p align="center">Lenguajes de programación.`
    document.write(T1);
    var T2 = ``;
    array.forEach(element => {
        T2 = T2 + `<p align="center">${element}</p>`
    });
    document.write(T2);
}

function PrintArray3(array) {
    var T1 =`<p align="center">Lenguajes de programación.`
    document.write(T1);
    var T2 = ``;
    for (let i in array) {
        T2 = T2 + `<p align="center">${array[i]}</p>`
    }
    document.write(T2);
}