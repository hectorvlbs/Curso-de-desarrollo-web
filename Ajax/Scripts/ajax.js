'use stric'
window.addEventListener("load", ()=>{

    var Div_ID_Data = $("#ID_Data");
    //  load
    //Div_ID_Data.load("https://reqres.in/");
    $.get("https://reqres.in/api/users?page=2", {page: 3}, function (param) {
        param.data.forEach((element, index)  => {
            $("#ID_Data").append("<p>" + element.first_name + "</p>");
        });
    });

    

    $("#ID_Register").submit(function (e) { 
        e.preventDefault();
        var User = {
            First_Name: $('input[name="First_Name"]').val(),
            Web: $('input[name="Web"]').val()
        };
        /*
        $.post($(this).attr("action"), User,function (Response) {
                ConsoleLog(Response);
            }
        );
        */

        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: User,
            dataType: "json",
            beforeSend: function() {
              ConsoleLog("Enviando usuario.")  
            },
            success: function (response) {
                ConsoleLog(response);
            }
        });
        
        return false;
    });    


    function ConsoleLog(String) {
        return console.log(String)
    }

});
