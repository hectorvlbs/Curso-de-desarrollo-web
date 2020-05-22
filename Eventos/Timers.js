'use stritc'

window.addEventListener('load', () =>{

    var Div_Colors = document.getElementById("div_colores");
    var Stop = document.getElementById("stopdiv_colores")
    var Start = document.getElementById("startdiv_colores");

    Div_Colors.style.font = "Times";

    function Intervals(){
        Div_Colors.style.color = "pink";
        //  Timers
        //  Al final se indica el tiempo em milisegundos.
        var time = setInterval( () => {
            //console.log("setInterval ejecutado.");
            //var Div_Colors = document.getElementById("div_colores");
            if (Div_Colors.style.color == "pink") {
                Div_Colors.style.color = "violet";
            } else {
                Div_Colors.style.color = "pink";
            }

        }, 1000);
        return time;
    }

    var Time = Intervals();
    Stop.addEventListener('click', () => {
        alert("Ya no más colores u.u");
        clearInterval(Time);
    });

    Start.addEventListener('click', function(){
        alert("Colores UwU");
        Intervals();
    });

});