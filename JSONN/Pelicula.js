'use strict'
window.addEventListener("load", () => {
    var Movie = {
        Titulo: 'Batman',
        Año: 2018,
        Pais: 'México'
    };

    var Films = [
        {Titulo:"Wiplash", Año:2015,Pais:"U.S.A"},
        Movie
    ];

    var MoviesBox = document.querySelector("#ID_MoviesBox");
    var Index;
    for (Index in Films) {
        var P = document.createElement("p");
        P.append(Films[Index].Titulo);
        //MoviesBox.append(P);
        console.log(P);
        MoviesBox.append(P);
    }

});
    