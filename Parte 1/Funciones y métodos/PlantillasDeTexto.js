'use strict'

var name = prompt("Ingrese su nombre(s)",null);
var lastname = prompt("Ingrese sus apellidos",null);

var text = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${name}</h3>
    <h3>Mis apellidos son: ${lastname}</h3>
`
document.write(text);

