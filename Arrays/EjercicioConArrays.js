'use strict'

/*  Desarrollar un programa que:
    1)  Pida 6 números por pantalla y los meta en un array.
    2)  Mostrar el array entero (todos los ementos) en el cuerpo de la página y en la
        consola.
    3)  Ordenar el array y mostrarlo.
    4)  Invertir su orden y mostrarlo.
    5)  Mostrar cuantos elementos tiene el array.
*/

var Numbers = [];
var Sortnumbers = [];
var Invertnumbers = [];
var Nelements = 6;

AskNumbers(Numbers, Nelements);
document.write(`<p>Array: ${Numbers}</p>`);
document.write(`<p>Elementos del array: ${Numbers.length}</p>`);

SortArray(Numbers, Sortnumbers);
document.write(`<p>Array ordenado: ${Sortnumbers}</p>`);
document.write(`<p>Elementos del array: ${Sortnumbers.length}</p>`);

InvertArray(Numbers, Invertnumbers);
document.write(`<p>Array invertido: ${Invertnumbers}</p>`);
document.write(`<p>Elementos del array: ${Invertnumbers.length}</p>`);

//  1)
function AskNumbers(Numbers, Nelements) {
    for (let index = 0; index < Nelements; index++) {
        Numbers.push(parseInt(prompt("Ingresa un número,", 0)));
    }
}

//  2)
function PrintArray(string) {
    console.log(string);
    document.write(string);
}

//  3)
function SortArray(array, array2) {
    array2.push(array.sort()); 
}

//  4)
function InvertArray(array, array2) {
    array2.push(array.reverse());
}