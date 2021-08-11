// Declaración de variables del canvas
var canvas = document.getElementById("dibujo");
var lienzoPrincipal = canvas.getContext("2d");
var anchoCanvas = canvas.width;

// Declaración de variables del formulario
var textoLineas = document.getElementById("numero_Lineas");
var seleccionColor1 = document.getElementById("color_1");
var seleccionColor2 = document.getElementById("color_2");
var seleccionColor3 = document.getElementById("color_3");
var seleccionColor4 = document.getElementById("color_4");
var botonPrincipal = document.getElementById("btn");

// Evento click para comenzar a dibujar
botonPrincipal.addEventListener("click", comenzarClick);

// Función dibujar
function dibujar(colorcito, xI, yI, xF, yF) {
    lienzoPrincipal.beginPath();
    lienzoPrincipal.strokeStyle = colorcito;
    lienzoPrincipal.moveTo(xI, yI);
    lienzoPrincipal.lineTo(xF, yF);
    lienzoPrincipal.stroke();
    lienzoPrincipal.closePath();
}

// Función para dibujar con el click
function comenzarClick() {
    // Con "value" obtenemos el dato ingresado en la caja de texto.
    var lineas = parseInt(textoLineas.value);
    var l = 0;
    var yi, xf, z;
    var colorLineas = [seleccionColor1.value, seleccionColor2.value, seleccionColor3.value, seleccionColor4.value];
    var espacio = anchoCanvas / lineas;

    // Ciclo para dibujar lineas
    for (l = 0; l < lineas; l++) {

        yi = espacio * l;
        xf = espacio * (l + 1);
        z = 500 - (l * espacio);

        dibujar(colorLineas[0], 0, yi, xf, 500); //Izq. abajo
        dibujar(colorLineas[1], 500, yi, z, 500); //Der. abajo 
        dibujar(colorLineas[2], z, 0, 0, xf); //Izq. arriba
        dibujar(colorLineas[3], 500, yi, xf, 0); //Der. arriba
    }

    // Lineas de los bordes
    dibujar(colorLineas[0], 1, 1, 1, 500);
    dibujar(colorLineas[1], 1, 499, 499, 499);
    dibujar(colorLineas[2], 1, 1, 499, 1);
    dibujar(colorLineas[3], 499, 1, 499, 499);
}