/*
{************************************}
    Programa:       Introducción al DOM
    Autor:          Villalobos Valenzuela Jesús Héctor
    Fecha:          18/02/2020
{************************************}
*/


ModificarPropiedadesDiv("MiCaja");
ObtieneDivs();

/*
{************************************}
    Función:        ModificarPropiedadesDiv              
    Autor:          Villalobos Valenzuela Jesus Hector
    Fecha:          18/02/2020
    Descripción:    Metodo que obtiene el id de una <div> y 
                    cambia sus propiedades.
{************************************}
*/
function ModificarPropiedadesDiv(NombreDiv) {
    //  Se guarda en la variable Caja el contenido de ese código html
    //  eso es pósible gracias a la función 'innerHTML'.
    //var Caja = document.getElementById(NombreDiv).innerHTML;   
    
    //  Cambia el contenido de el <div>
    var Caja = document.getElementById(NombreDiv);
    Caja.innerHTML = "Hola soy una caja desde JavaScript."
    //  Modifa el estilo del <div>
    Caja.style.background = "pink";
    Caja.style.padding = "20px";
    Caja.style.color = "white";
    Caja.style.font = "Times";

    
    console.log(Caja);
}

/*
{************************************}
    Función:        ObtieneDivs             
    Autor:          Villalobos Valenzuela Jesus Hector
    Fecha:          19/02/2020
    Descripción:    Conseguir elementos por sus etiquetas.
{************************************}
*/
function ObtieneDivs() {
    var TodosLosDivs = document.getElementsByTagName('div');
    TodosLosDivs[1].innerHTML.style.background("pink");
    console.log(TodosLosDivs);
}