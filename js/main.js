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

/// como seteo multiples atributos a la vez, en 1 sola llamada.
/// cual es la diferencia entre una funcion definida, y una clásica.
/// como llamar al espacio vacio 2 veces, para meter 2 "br"
/// como remover multiples nodos child con misma clase


/*

const li = document.querySelectorAll(".list-item-class");
for (let i = 0; i <= li.length; i++) {
    l = li[i];
    l.remove();


*/
///////////////////////////////////////////////////////////////////////////////// 
const botonReiniciarCosas = document.querySelector("#boton-reiniciar").onclick = function () {
    let formulario = document.querySelector("#formulario-familia");
    let listaResultados = document.querySelector("#lista-de-resultados");
    let nodoAConvertir = document.querySelectorAll(".familiares");
    for (let i = 1; i <= nodoAConvertir.length; i++) {
        let familiares = document.querySelector(`#familiar-${i}`);
        let labels = document.querySelector(`#label-familiar-${i}`);
        let resultado = document.querySelector(`#resultado-${i}`);
        listaResultados.removeChild(resultado);
        formulario.removeChild(familiares);
        formulario.removeChild(labels);
    }
    document.querySelector("#lista-de-resultados").hidden = true;
}
/////////////////////////////////////////////////////////////////////////////////
const obtenerCantidadFamiliares = document.querySelector("#boton-cantidad-familiares").onclick = function () {
    let cantidadFamiliares = Number(document.querySelector("#cantidad-familiares").value);
    crearCamposVacios(cantidadFamiliares);
    document.querySelector("#cantidad-familiares").value = "";
    return cantidadFamiliares;
}
///////////////////////////////////////////////////////////////////////////////// 
const obtenerResultadosEdades = document.querySelector("#boton-calcular-edades").onclick = function () {
    let nodoAConvertir = document.querySelectorAll(".familiares");
    let arrayConvertido = convertNodeToArray(nodoAConvertir);
    document.querySelector("#resultado-1").textContent = obtenerMayorEdad(arrayConvertido);
    document.querySelector("#resultado-2").textContent = obtenerMenorEdad(arrayConvertido);
    document.querySelector("#resultado-3").textContent = obtenerPromedioEdad(arrayConvertido);
    document.querySelector("#lista-de-resultados").hidden = false;
    return console.log(arrayConvertido);

}
/////////////////////////////////////////////////////////////////////////////////
const crearCamposVacios = function (cantidadFamiliares) {
    for (let i = 1; i <= cantidadFamiliares; i++) {
        let nuevoInput = document.createElement("input");
        let nuevoLabel = document.createElement("label");
        //        let espacioVacio = document.createElement("br");
        let formulario = document.querySelector("#formulario-familia");
        let etiquetaDeFamiliar = document.createTextNode(`Familar ${i}: `);
        nuevoInput.className = `familiares`;
        nuevoInput.id = `familiar-${i}`;
        nuevoInput.placeholder = `Familiar ${i}`;
        nuevoLabel.id = `label-familiar-${i}`;
        nuevoLabel.appendChild(etiquetaDeFamiliar);
        formulario.appendChild(nuevoLabel);
        formulario.appendChild(nuevoInput);
        //        formulario.appendChild(espacioVacio);
    }
}
///////////////////////////////////////////////////////////////////////////////// 
const convertNodeToArray = function (nodoLlamado) {
    const nodeListNumeros = nodoLlamado;
    const arrayNumeros = [];
    for (let i = 0; i < nodeListNumeros.length; i++) {
        arrayNumeros.push(Number(nodeListNumeros[i].value));
    } return arrayNumeros;
}
/////////////////////////////////////////////////////////////////////////////////
const obtenerPromedioEdad = function (arrayObjetivo) {
    let sumaNumeros = 0;
    for (let i = 0; i < arrayObjetivo.length; i++) {
        sumaNumeros += arrayObjetivo[i];
    }
    let promedioNumeros = (sumaNumeros / arrayObjetivo.length).toFixed(1);
    return promedioNumeros;
}
/////////////////////////////////////////////////////////////////////////////////
const obtenerMenorEdad = function (arrayObjetivo) {
    let numeroBase = arrayObjetivo[0];
    for (let i = 0; i < arrayObjetivo.length; i++) {
        if (arrayObjetivo[i] < numeroBase) {
            numeroBase = arrayObjetivo[i];
        }
    } return numeroBase;
}
/////////////////////////////////////////////////////////////////////////////////
const obtenerMayorEdad = function (arrayObjetivo) {
    let numeroBase = 0;
    for (let i = 0; i < arrayObjetivo.length; i++) {
        let numeroCirculando = arrayObjetivo[i];
        if (numeroCirculando > numeroBase) {
            numeroBase = numeroCirculando;
        }
    } return numeroBase;
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/







