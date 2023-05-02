/* //--------------  CREAR UN ALGORITMO CON UN CONDICIONAL.--------------
alert("Las opciones de entrenamientos son RUNNING ó GYM");

let pregunta = prompt("El dia de hoy entrenaste?");

//-------------- EL USUARIO "SI" ENTRENO --------------
if (pregunta.toLowerCase() === "si") {
    alert("FELICIDADES!!, eso queria escuchar");
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
 */

// UTILIZAR FUNCIONES PARA REALIZAR ESTAS OPERACIONES

/* let tiempo= parseFloat(prompt("ingresa cuantos tiempo corriste"));

for( km=1; km>=42 ; km+=3){
    let promedio = km / tiempo;
    alert(` hoy corriste en un tiempo promedio de ${promedio}`); */
/* } */
//me rindo!! ( por ahora)..
//----------------------------------------------

/* function presentacion(){
    let nombre= prompt("ingrese su nombre");
    let apellido= prompt("ingrese su apellido");
    alert(`Bienvenido ${nombre} ${apellido}`);
    
}
presentacion(); */

/* function kmSemana(){
    let lunes =parseFloat(prompt("ingrese los km del lunes"));
    let martes =parseFloat(prompt("ingrese los km del martes"));
    let miercoles =parseFloat(prompt("ingrese los km del miercoles"));
    let jueves =parseFloat(prompt("ingrese los km del jueves"));
    let viernes =parseFloat(prompt("ingrese los km del viernes"));
    
 alert(`${lunes} + ${martes} + ${miercoles}+ ${jueves} + ${viernes} + ${sabado} + ${domingo}`);
} */
//kmSemana();









