'use strict'
window.addEventListener("load", () => {

    var Formulario = document.querySelector("#ID_Formulario");
    var Form_dashed = document.querySelector(".dashed");
    Form_dashed.style.display = "none";

    Formulario.addEventListener("submit", () => {
        console.log("Hola desde Send");

        var FirstName = document.querySelector("#firstName").value;
        var LastName = document.querySelector("#lastName").value;
        var Age = document.querySelector("#age").value;

        Form_dashed.style.display = "block";
        var fn = document.querySelector("#fn span");
        var ln = document.querySelector("#ln span");
        var a = document.querySelector("#a span");
        fn.innerHTML = FirstName;
        ln.innerHTML = LastName;
        a.innerHTML = Age;

        return false;
    });

});