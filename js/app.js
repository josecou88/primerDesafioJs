// CICLOS E ITERACIONES

// ESTRUCTURA CICLO FOR
/*
for(desde; hasta; actualización) {
    … //lo que se escriba acá se ejecutará mientras dure el ciclo
}
*/

/*
for (let variableAuxiliar = 0; variableAuxiliar < 10; variableAuxiliar++) {
    console.log(variableAuxiliar)
}

for (let i = 0; i < 10; i++) {
    let nombre = 'Gonzalo'
    console.log(nombre + i)
}
*/
/*
let numeroIngresado = Number(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = numeroIngresado * i ;
    console.log(numeroIngresado +" X " + i +" = "+ resultado);
}
*/





// SENTENCIA BREAK
/*
for (let i = 1; i <= 10; i++) {
    console.log(i)
    if (i == 8) {
        break
    }
}
*/



// SENTENCIA CONTINUE
/*
for (let i = 1; i <= 10; i++) {
    console.log('Vuelta Numero ' + i);
    if (i == 5) {
        continue
    }
    console.log(i)
}
*/
/*
for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}
*/


// --------------------------------------------


// CICLO WHILE
/*
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC"){
    alert("El usuario ingresó " + entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

alert('Saliste del bucle')
*/




// DO WHILE
/*
// While no ejecuta nunca
while (false) {
    console.log('Dentro del While False');
}

// Do..While lo ejecuta por lo menos una vez
do {
    console.log('Dentro del Do...While False');
} while (false)
*/
/*
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"

do {
    alert("El usuario ingresó " + entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
} while (entrada != "ESC")

alert('Saliste del bucle')
*/




// OPERADOR SWITCH

// Ejemplo de varios else if

// const eleccionUsuario = prompt('Elegí un producto entre: monitor, teclado, mouse').toLowerCase()

/*
if (eleccionUsuario == 'monitor') {
    alert('Elegiste el monitor, el valor es de $50000.-')
} else if (eleccionUsuario == 'teclado') {
    alert('Elegiste el teclado, el valor es de $5000.-')
} else if (eleccionUsuario == 'mouse') {
    alert('Elegiste el mouse, el valor es de $4000.-')
} else {
    alert('El producto seleccionado no se encuentra en stock, ingrese un producto de la lista')
}
*/

// Switch lo vamos a utilizar unicamente cuando queramos comparar (==) una variable con un valor especifico.

/*
let eleccionUsuario = prompt('Elegí un producto entre: monitor, teclado, mouse').toLowerCase()

do {
    switch (eleccionUsuario) {
        case "monitor":
            alert('Elegiste el monitor, el valor es de $50000.-')
            break;

        case "teclado":
            alert('Elegiste el teclado, el valor es de $5000.-')
            break;

        case "mouse":
            alert('Elegiste el mouse, el valor es de $4000.-')
            break;

        default:
            alert('El producto seleccionado no se encuentra en stock, ingrese un producto de la lista')
            eleccionUsuario = prompt('Elija un producto entre: monitor, teclado, mouse').toLowerCase()
            break;
    }
} while (eleccionUsuario != "monitor" && eleccionUsuario != "teclado" && eleccionUsuario != "mouse")

    alert ('elegiste ' + "" + eleccionUsuario + ' tu compra fue exitosa' )
    */
// El ejercicio quedo funcionando pero le falta algo. En la repregunta, si elegimos un producto correcto, 
// se termina el bucle y no nos muestra la confirmación. ¿¿Te animas a intentar resolverlo?? 😊