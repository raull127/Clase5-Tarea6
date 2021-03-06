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
    document.querySelector("#div-3").hidden = false;
}
///////////////////////////////////////////////////////////////////////////////// 
const obtenerResultadosEdades = document.querySelector("#boton-calcular-edades").onclick = function () {
    const nodoEdadesConvertir = document.querySelectorAll(".familiares");
    const arrayEdadesConvertido = convertNodeToArray(nodoEdadesConvertir);
    document.querySelector("#resultado-1").textContent = `Mayor Edad: ${obtenerMayor(arrayEdadesConvertido)}`;
    document.querySelector("#resultado-2").textContent = `Menor Edad: ${obtenerMenor(arrayEdadesConvertido)}`;
    document.querySelector("#resultado-3").textContent = `Promedio Edad: ${obtenerPromedio(arrayEdadesConvertido)}`;
    document.querySelector("#lista-de-resultados").hidden = false;
}
///////////////////////////////////////////////////////////////////////////////// 
const botonReiniciarElementos = document.querySelector("#boton-reiniciar").onclick = function () {
    document.querySelector("#formulario-familia").innerHTML = "";
    for (let i = 1; i <= 3; i++) {
        document.querySelector(`#resultado-${i}`).innerHTML = "";
    }
    document.querySelector("#lista-de-resultados").hidden = true;
    document.querySelector("#boton-calcular-edades").hidden = true;
    document.querySelector("#boton-reiniciar").hidden = true;
    document.querySelector("#div-3").hidden = true;
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

const obtenerPromedio = function (arrayObjetivo) {
    let sumaNumeros = 0;
    for (let i = 0; i < arrayObjetivo.length; i++) {
        sumaNumeros += arrayObjetivo[i];
    }
    let promedioNumeros = (sumaNumeros / arrayObjetivo.length).toFixed(1);
    return promedioNumeros;
}
/////////////////////////////////////////////////////////////////////////////////
const obtenerMenor = function (arrayObjetivo) {
    let numeroBase = arrayObjetivo[0];
    for (let i = 0; i < arrayObjetivo.length; i++) {
        if (arrayObjetivo[i] < numeroBase) {
            numeroBase = arrayObjetivo[i];
        }
    } return numeroBase;
}
/////////////////////////////////////////////////////////////////////////////////
const obtenerMayor = function (arrayObjetivo) {
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

- obtener numero de aportantes, meterlos en algoritmo para generar nuevas celdas
- obtener y procesar los sueldos de esas celdas
- mostrar los sueldos promedios, etc procesados  

*/

const crearCeldaDeSueldo = function (cantidadCeldas) {
    for (let i = 1; i <= cantidadCeldas; i++) {
        const nuevoLabel = document.createElement("label");
        const nuevoInput = document.createElement("input");
        const formulario = document.querySelector("#formulario-sueldos");
        const etiquetaDeFamiliar = document.createTextNode(` | Salario Anual ${i}: `);
        nuevoInput.className = `sueldo-familiares`;
        nuevoInput.id = `sueldo-familiar-${i}`;
        nuevoInput.placeholder = `Familiar ${i}`;
        nuevoLabel.id = `label-sueldo-${i}`;
        nuevoLabel.appendChild(etiquetaDeFamiliar);
        formulario.appendChild(nuevoLabel);
        formulario.appendChild(nuevoInput);
    }
}

document.querySelector("#procesar-trabajadores").onclick = function () {
    botonReiniciarSueldos();
    const cantidadTrabajadores = Number(document.querySelector("#cantidad-trabajadores").value);
    document.querySelector("#cantidad-trabajadores").value = "";
    document.querySelector("#boton-reiniciar-sueldos").hidden = false;
    document.querySelector("#div-calcular-sueldos").hidden = false;
    crearCeldaDeSueldo(cantidadTrabajadores);
}

const calcularSueldos = document.querySelector("#procesar-sueldos").onclick = function () {
    const nodoSueldoConvertir = document.querySelectorAll(".sueldo-familiares");
    const arraySueldoConvertido = convertNodeToArray(nodoSueldoConvertir);
    document.querySelector("#producto-1").textContent = `Mayor Sueldo: ${obtenerMayor(arraySueldoConvertido)}`;
    document.querySelector("#producto-2").textContent = `Menor Sueldo: ${obtenerMenor(arraySueldoConvertido)}`;
    document.querySelector("#producto-3").textContent = `Promedio Anual: ${obtenerPromedio(arraySueldoConvertido)}`;
    document.querySelector("#producto-4").textContent = `Promedio Mensual: ${(obtenerPromedio(arraySueldoConvertido) / 12)}`;
    document.querySelector("#lista-de-sueldos").hidden = false;
}

const botonReiniciarSueldos = document.querySelector("#boton-reiniciar-sueldos").onclick = function () {
    document.querySelector("#formulario-sueldos").innerHTML = "";
    for (let i = 1; i <= 4; i++) {
        document.querySelector(`#producto-${i}`).innerHTML = ""
    }
    document.querySelector("#boton-reiniciar-sueldos").hidden = true;
    document.querySelector("#div-calcular-sueldos").hidden = true;
    document.querySelector("#lista-de-sueldos").hidden = true;
}
