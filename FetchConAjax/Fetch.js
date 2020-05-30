'use stric'
window.addEventListener("load", () => {
    //  Fetch y peticiones a sercivios (apis) 
    var Div_ID_Usuarios = document.querySelector("#ID_Usuarios");

    GetUsers().then(data => data.json())
    .then(Users => {
        Users.map((user, i) => {
            let Name = document.createElement('p');
            Name.innerHTML = `Name: ${user.name}<br/> Username: ${user.username}`;
            Div_ID_Usuarios.appendChild(Name);
        });
    });

    function GetUsers(){
        return fetch('https://jsonplaceholder.typicode.com/users');
    }
});  