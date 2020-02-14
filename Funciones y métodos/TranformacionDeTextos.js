'Use Strict'

// Tranformación de Textos
var numero = 44;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "es muy buen curso.";

var dato = numero.toString();
console.log(typeof dato);
console.log(texto1.toLowerCase());
console.log(texto1.toUpperCase());

// Calcular longitud
var names = "Hola a todos en el mundo";
var array =["Hola",1,true];
console.log(names.length);
console.log(array.length);

// Concatenar
var total_text = texto1 + " " + texto2;
console.log(total_text);

var total_text2 = texto1.concat(""+texto2);
console.log(total_text2);


// Métodos de búsqueda
//var search = texto1.indexOf("curso");
//var search = texto1.search("curso");
//var search = texto1.match("de");
//var search = texto1.charAt(11);
//var search = texto1.startsWith("")
var search = texto1.includes("Hola");
console.log(search);


// Funciones de reemplazo
var text = "Whiplash es una película dramática estadounidense de 2014,"
            + "escrita y dirigida por Damien Chazelle;"
            + "protagonizada por Miles Teller como el joven" 
            + "baterista de jazz Andrew Neiman que asiste" 
            + "a una de las mejores escuelas de "
            + "música del país en Nueva York," 
            + "bajo la tutela del temible jazzista y" 
            + "maestro Terence Fletcher (J.K. Simmons).";

var replace = text.replace("Whiplash", "Latigazo");
//console.log(replace);
var Split = text.split(" ");
//console.log(Split);
var Trim = text.trim();
console.log(Trim);


 