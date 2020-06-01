'use strict'
window.addEventListener("load", () => {

    $("#ID_Show").hide();

    $("#ID_Hide").click(function (e) {
        e.preventDefault();
        $(this).hide();
        $("#ID_Show").show();
        $("#ID_Box").hide();
        console.log("Escondido");
    });

    $("#ID_Show").click(function (e) {
        e.preventDefault();
        $(this).hide();
        $("#ID_Box").show();
        $("#ID_Hide").show();
        console.log("Mostrado")
    });

    var Div_ID_Box = $("#ID_Box");
    $("#ID_Animation").click(function (e) {
        e.preventDefault();
        Div_Animate(Div_ID_Box);
    });

    function Div_Animate(Div_ID_Box) {
        Div_ID_Box
            .animate({ 
                marginLeft: '500px',
                fontSize: '30px',
                heigth: '110px'
            }, 'slow')
            .animate({
                borderRadius: '800px'
            }, 'slow')
        ;
    }

});