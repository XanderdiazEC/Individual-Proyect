function agregarTarea(){


    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //que no sea vacio
    if(nuevaTareaTexto === ""){
        alert("Porfavor, Agrega una nueva tarea");
        return;
    }

    //crear elementto en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    //Crear boton Eliminar 
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function(){nuevaTarea.remove();}

    //agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento/la tarea a la lista 
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto
    document.getElementById("nuevaTarea").value ="";
}