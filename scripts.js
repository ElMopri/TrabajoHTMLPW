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

    var linkEstudiantes = document.getElementById("linkEstudiantes");
    var linkAsignaturas = document.getElementById("linkAsignaturas");

    var contenedorEstudiantes = document.getElementById("contenedorEstudiantes");
    var contenedorAsignaturas = document.getElementById("contenedorAsignaturas");

    linkEstudiantes.addEventListener("click",function(event){
        event.preventDefault();
        contenedorEstudiantes.classList.add("active");
        contenedorAsignaturas.classList.remove("active");
    });

    linkAsignaturas.addEventListener("click",function(event){
        event.preventDefault();
        contenedorAsignaturas.classList.add("active");
        contenedorEstudiantes.classList.remove("active");
    });

    //Simulacion de CRUD
    function agregarFila(tabla, id, nombre) {
        var row = tabla.insertRow();
        var cellId = row.insertCell(0);
        var cellNombre = row.insertCell(1);
        var cellAcciones = row.insertCell(2);

        cellId.textContent = id;
        cellNombre.textContent = nombre;
        cellAcciones.innerHTML = '<button class="btn-editar">Editar</button> <button class="btn-eliminar">Eliminar</button>';
    }

    var tablaEstudiantes = document.querySelector("#contenedorEstudiantes table tbody");
    var btnAgregarEstudiante = document.getElementById("agregarEstudiante");
    if(btnAgregarEstudiante){
        btnAgregarEstudiante.addEventListener("click",function(){
            var id = tablaEstudiantes.rows.length + 1;
            var nombre = prompt("Ingrese el nombre del estudiante:");
            if(nombre){
                agregarFila(tablaEstudiantes, id, nombre);
            }
        });
    }

    var tablaAsignaturas = document.querySelector("#contenedorAsignaturas table tbody");
    var btnAgregarAsignatura = document.getElementById("agregarAsignatura");
    if(btnAgregarAsignatura){
        btnAgregarAsignatura.addEventListener("click",function(){
            var id = tablaAsignaturas.rows.length + 1;
            var nombre = prompt("Ingrese el nombre de la Asignatura:");
            if(nombre){
                agregarFila(tablaAsignaturas, id, nombre);
            }
        });
    }
});