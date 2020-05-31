'use stric'
window.addEventListener("load", () => {
    console.log("Hola")

    $("#ID_Box").hover(function () {
            // over
            $(this).css('background', 'pink');
        }, function () {
            // out
            $(this).css('background', 'coral'); 
        }
    );

    //  Click y doble click
    $("#ID_Box").click(function (e) { 
        e.preventDefault();
        $(this)
        .css('background', 'blue')
        .css('color', 'white'); 
    });

    $("#ID_Box").dblclick(function (e) { 
        e.preventDefault();
        $(this)
        .css('background', 'gray')
        .css('color', 'red'); 
    });

    //  Focus and blur
    var Input_ID_Name = $("#ID_Name");
    var Div_ID_Data = $("#ID_Data");
    $(Input_ID_Name).focus(function (e) { 
        e.preventDefault();
        $(this).css('border','4px solid coral');
    });

    $(Input_ID_Name).blur(function (e) { 
        e.preventDefault();
        $(this).css('border','1px solid #ccc');
        $(Div_ID_Data)
        .text($(Input_ID_Name).val())
        .show();
    });
    
    //  Mouse down and mouse up
    Div_ID_Data.mousedown(function () { 
        $(this).css('border-color','pink');
    });
    Div_ID_Data.mouseup(function () { 
        $(this).css('border-color','coral');
    });

    //  Mouse move
    var Document = $(document);
    var Div_ID_Followme = $("#ID_Followme");
    Document.mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        //console.log("Coordenadas en el plano (x,y) -> (" + e.clientX +", " + e.clientY +")");
        $("#ID_Followme")
        .css("left", e.clientX)
        .css("top", e.clientY);
    });
});