/*
{************************************}
    Programa:       Introducción al DOM
    Autor:          Villalobos Valenzuela Jesús Héctor
    Fecha:          18/02/2020
{************************************}
*/


ModificarPropiedadesDiv("MiCaja");
ObtieneDivs();
ObtieneDivsPorClase()

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
    //console.log(TodosLosDivs);
    var valor;
    for(valor in TodosLosDivs){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(valor);
        parrafo.appendChild(texto);
        document.querySelector("#MS").appendChild(parrafo);
    }
    //TodosLosDivs[1].innerHTML.style.background("pink");
    //var DivEditado = TodosLosDivs[2];
    //DivEditado.style.background = "pink";
    //console.log(TodosLosDivs);
}
/*
{************************************}
    Función:        ObtieneDivsPorClase             
    Autor:          Villalobos Valenzuela Jesus Hector
    Fecha:          19/02/2020
    Descripción:    Conseguir elementos por sus clases css.
{************************************}
*/
function ObtieneDivsPorClase(){
    var DivsRojos = document.getElementsByClassName('rojo');
    console.log(DivsRojos);
    var DivsAmarillos = document.getElementsByClassName('amarillo');
    var index;
    for(index in DivsRojos){
        if (DivsRojos[index].className == "rojo") {
            DivsRojos[index].style.background = "red";
        }
    }

    for(index in DivsAmarillos){
        if (DivsAmarillos[index].className == "amarillo") {
            DivsAmarillos[index].style.background = "yellow";
        }
    }
}