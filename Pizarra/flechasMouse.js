// Se crea variable para obtener color seeccionado.
var color = document.getElementById("selectColor");

// Se crea variable para obtener el canvas del HTML
var areaDibujo = document.getElementById("pizarra");
var papel = areaDibujo.getContext("2d");

var x, y, estado;

// Se crea la variable para borrar canvas 
var borrar = document.getElementById("borrar");

areaDibujo.addEventListener("mousedown", pulsarMouse);
areaDibujo.addEventListener("mousemove", moverMouse);
areaDibujo.addEventListener("mouseup", levantarMouse);
borrar.addEventListener("click", clearCanvas);

function pulsarMouse(evento) {
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento) {
    if (estado == 1) {
        dibujarLinea(color.value, x, y, evento.layerX, evento.layerY);
        x = evento.layerX;
        y = evento.layerY;
    } else {
        x = evento.layerX;
        y = evento.layerY;
    }
}

function levantarMouse(evento) {
    estado = 0;
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 4;
    papel.moveTo(xInicial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();
}

function clearCanvas() {
    papel.clearRect(0, 0, areaDibujo.width, areaDibujo.height);
}