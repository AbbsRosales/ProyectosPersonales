/*
 * OBJETO CON LAS PROPIEDADES MOUSE
 */

var pm = {
    zona: document.querySelector("#efectoMouse"),
    figuras: document.querySelectorAll("#efectoMouse figure")
}

/*
 * OBJETO CON LOS MÉTODOS MOUSE
 */
var mm = {
    inicioMouse: function() {
        //Evento que dispara el movimiento del mouse
        pm.zona.addEventListener("mousemove", mm.movimientoMouse);
        for (let i = 1; i < pm.figuras.length; i++) {
            pm.figuras[i].innerHTML = '<img src="IMG/MOUSE/capa0' + i + '.png">';
            pm.figuras[i].style.zIndex = -i;
        }

    },
    movimientoMouse: function(mouse) {

        console.log(mouse.offsetX, mouse.offsetY)
    }
}

mm.inicioMouse();