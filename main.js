//--------------  CREAR UN ALGORITMO CON UN CONDICIONAL.--------------
alert("las opciones de entrenamientos son RUNNING O GYM");

let pregunta = prompt("El dia de hoy entrenaste?");

//-------------- EL USUARIO "SI" ENTRENO --------------
if (pregunta.toLowerCase() === "si") {
    alert("felicidades, eso queria escuchar");
    alert("Que actividad realizaste hoy?");
    let actividad = prompt("ingrese la actividad que realizaste hoy");

    //-------------- El usuario hizo RUNNING --------------
    if (actividad.toLowerCase() === "running") {
        alert("Mi actividad favorita, espero q la hayas disfrutado");
        let km = Number(prompt("cuantos km recorriste hoy?"));
        if (km <= 2) {
            alert("no te parece demasiado poco, debes continuar practicando para aumentar tu carga");
        } else if (km >= 3) {
            alert("bueno bueno, esto ya es un numero interesante");
        } else {
            alert(" wow sigue asi, estas por buen camino...");
        }

        //-------------- El usuario fue al GYM --------------

    } else if (actividad.toLowerCase() === "gym") {
        alert("hacer pesas es fundamental para aumentar nuestra fuerza");
    } else {
        alert("ingrese una actividad válida");
    }

    //-------------- EL USUARIO "NO" ENTRENO --------------

} else if (pregunta.toLowerCase() === "no") {
    alert("Esta bien, debemos recordar que descansar tambien forma parte del entrenamiento");
    alert("solo recuerda que mañana debes continuar con tu rutina");
}
else {
    alert("la opcion ingresada no es correcta, intenta de nuevo por favor");
}

//-------------- CREAR UN ALGORITMO UTILIZANDO UN CICLO --------------



// UTILIZAR FUNCIONES PARA REALIZAR ESTAS OPERACIONES 