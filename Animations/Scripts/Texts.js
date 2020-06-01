'use strict'
window.addEventListener("load", () => {
    Reload_a();
    $("#ID_AddButton").click(function (e) {
        e.preventDefault();
        var Input = GetTo_input("#ID_Add");
        console.log(Input);
        $("#ID_Menu").append('<li><a href="'+Input+'"></a></li>');
        SetTo_input("#ID_Add");
        Reload_a();
    });

    function GetTo_input(ID_Input) {
        return $(ID_Input).val();
    }

    function SetTo_input(ID_Input) {
        $(ID_Input).val(' ');
    }

    function Reload_a() {
        $('a').each(function (index) {
            // element == this
            var Link = $(this).attr("href");
            $(this).text(Link);
        }); 
    }

});