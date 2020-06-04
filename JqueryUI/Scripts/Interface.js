'use strict'
window.addEventListener("load", () => {

    //  Mover elementos por toda la página.
    $('.Class_Element').draggable();

    //  Cambiar de tamaño.
    $('.Class_Element').resizable();

    //  Seleccionar elementos.
    //$('.Class_ListSelectable').selectable();

    //  Ordenar elementos.
    $('.Class_ListSelectable').sortable();

    $("#ID_Element_Moved").draggable();
    $("#ID_Area").droppable({
        drop: function () {
            ConsoleLog("Haz soltado algo dentro del área.")
        }
    });

    function ConsoleLog(Console) {
        return console.log(Console)
    }

});