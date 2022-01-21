/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).

/// como seteo multiples atributos a la vez, en 1 sola llamada.
/// cual es la diferencia entre una funcion definida, y una clásica.
/// como llamar al espacio vacio 2 veces, para meter 2 "br"
/// como remover multiples nodos child con misma clase

*/
/////////////////////////////////////////////////////////////////////////////////
///////////////////////// Botones ////////////////////////

const obtenerCantidadFamiliares = document.querySelector("#procesar-cantidad-familiares").onclick = function () {
    botonReiniciarElementos();
    const cantidadFamiliares = Number(document.querySelector("#cantidad-familiares").value);
    const etiquetaFamiliar = document.createTextNode("Introducir Edades Grupo Familiar");
    const formulario = document.querySelector("#formulario-familia");
    formulario.appendChild(etiquetaFamiliar);
    crearCamposVacios(cantidadFamiliares);
    document.querySelector("#cantidad-familiares").value = "";
    document.querySelector("#boton-calcular-edades").hidden = false;
    document.querySelector("#boton-reiniciar").hidden = false;
    document.querySelector("#separador").hidden = false;
}
///////////////////////////////////////////////////////////////////////////////// 
const obtenerResultadosEdades = document.querySelector("#boton-calcular-edades").onclick = function () {
    const nodoEdadesConvertir = document.querySelectorAll(".familiares");
    const arrayEdadesConvertido = convertNodeToArray(nodoEdadesConvertir);
    document.querySelector("#resultado-1").textContent = `Mayor Edad: ${obtenerMayorEdad(arrayEdadesConvertido)}`;
    document.querySelector("#resultado-2").textContent = `Menor Edad: ${obtenerMenorEdad(arrayEdadesConvertido)}`;
    document.querySelector("#resultado-3").textContent = `Promedio Edad: ${obtenerPromedioEdad(arrayEdadesConvertido)}`;
    document.querySelector("#lista-de-resultados").hidden = false;
}
///////////////////////////////////////////////////////////////////////////////// 
const botonReiniciarElementos = document.querySelector("#boton-reiniciar").onclick = function () {
    document.querySelector("#formulario-familia").innerHTML = "";
    for(let i = 1; i <= 3; i++) {
        document.querySelector(`#resultado-${i}`).innerHTML = "";
    }
    document.querySelector("#lista-de-resultados").hidden = true;
    document.querySelector("#boton-calcular-edades").hidden = true;
    document.querySelector("#boton-reiniciar").hidden = true;
    document.querySelector("#separador").hidden = true;
}
/////////////////////////////////////////////////////////////////////////////////
////////////////////////// Otras Operaciones Extra ///////////////////////////
const crearCamposVacios = function (cantidadFamiliares) {
    for (let i = 1; i <= cantidadFamiliares; i++) {
        const nuevoInput = document.createElement("input");
        const nuevoLabel = document.createElement("label");
        const formulario = document.querySelector("#formulario-familia");
        const etiquetaDeFamiliar = document.createTextNode(` | Familar ${i}: `);
        nuevoInput.className = `familiares`;
        nuevoInput.id = `familiar-${i}`;
        nuevoInput.placeholder = `Familiar ${i}`;
        nuevoLabel.id = `label-familiar-${i}`;
        nuevoLabel.appendChild(etiquetaDeFamiliar);
        formulario.appendChild(nuevoLabel);
        formulario.appendChild(nuevoInput);
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
/////////// Calculos de Mayor, Menor, Promedio de Edades ////////////////////////

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
/////////////////////////////////////////////////////////////////////////////////

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
