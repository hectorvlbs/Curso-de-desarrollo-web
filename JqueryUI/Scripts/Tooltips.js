'use stric'
window.addEventListener("load", () => {

    $(document).tooltip();
    $("#popup").dialog();
    $("ID_Calendario").datepicker();

    function ConsoleLog (Return){
        return console.log(Return);
    }
});

