'use strict'
window.addEventListener("load", () => {
    $(document).ready(() => {
        console.log("Estamos listos")
    });

    //  Selectores de ID
    $('#ID_P1').css("background", "red");
    $('#ID_P2').css("background", "pink");

    //  Selectores de clases 
    var Class_P3 = $('.Class_P3');
    Class_P3.css("background", "green");

    //  Seleccionar por atributos
    $('[title="facebook"]').css('background','#ccc')
    $('[title="instagram"]').css('background', '#123');

    //  Otros
    $('a').addClass('MarginTop');
    var Box = $("#Box").find('.R');
    console.log(Box);

    //  Mouse down y mouse up
    var ID_Data = $('#ID_Data');
    ID_Data.mousedown(function () { 
        $(this).css('border-color', 'gray');
    });

});