/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).

- input de cuanta gente hay en la family
- recoger ese input en una variable para usarla luego 
- logica para agregar inputs/labels en base al num de integrantes de arriba
- logica para calcular promedio, menor, mayor
- logica de boton de reinicio que borre todos los inputs lo ya creado 
*/

document.querySelector("#boton-cantidad-familiares").onclick = function () {
    let cantidadFamiliares = Number(document.querySelector("#cantidad-familiares").value);
    crearCamposVacios(cantidadFamiliares);

    return console.log(cantidadFamiliares);
}


let crearCamposVacios = function (cantidadFamiliares) {
    for (let i = 1; i <= cantidadFamiliares; i++) {
        let nuevoNodo = document.createElement("input");
        nuevoNodo.className = "familiar"
        nuevoNodo.placeholder = `este familiar ${i}`
        let forma = document.querySelector("#formulario-familia");
        forma.appendChild(nuevoNodo);
    }





}




/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/







