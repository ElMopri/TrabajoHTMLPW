document.addEventListener("DOMContentLoaded",function(){
    var loginForm = document.getElementById("loginForm");
    if(loginForm){
        loginForm.addEventListener("submit",function(event){
            event.preventDefault();
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            //Verificacion de usuario y contraseña
            if(username == "admin" && password=="1234"){
                window.location.href = "dashboard.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }

    var registroForm = document.getElementById("registroForm");
    if(registroForm){
        registroForm.addEventListener("submit",function(event){
            event.preventDefault();
            var newUser = document.getElementById("newUser").value;
            var newPassword = document.getElementById("newPassword").value;

            //Aqui va la logica para almacenar al usuario registrado

            alert("Usuario regitrado: " + newUser);
            window.location.href = "index.html";
        });
    }


    
});