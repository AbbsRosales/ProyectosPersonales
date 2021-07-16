/*
 * OBJETO CON LAS PROPIEDADES DEL SLIDE
 */
var p = {
    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: "slide",
    //animacionSlide: "fade",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide #avanzar"),
    retroceder: document.querySelector("#slide #retroceder"),
    velocidadSlide: 3000,
    formatearLoop: false
};


/*
 * OBJETO CON LOS MÉTODOS DEL SLIDE
 */
var m = {
    inicioSlide: function() {
        for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            //p.imgSlide[i].style.width = (p.paginacion.length / 100) + "%";
        }

        //Se agrega el evento avanzar y retroceder
        p.avanzar.addEventListener("click", m.avanzar)
        p.retroceder.addEventListener("click", m.retroceder)

        //Se agrega el evento intervalo automatico
        m.intervalo();

        //Para realizar de forma dinamica el aumento de imagenes
        //p.cajaSlide.style.width = (p.paginacion.length * 100) + "%";

    },
    paginacionSlide: function(item) {
        //propiedad parentNode nos muestra el papá de un elemento
        p.item = item.target.parentNode.getAttribute("item") - 1;
        m.movimientoSlide(p.item);
    },
    avanzar: function() {
        if (p.item == p.imgSlide.length - 1) {
            p.item = 0;
        } else {
            p.item++;
        }
        m.movimientoSlide(p.item);
    },
    retroceder: function() {
        if (p.item == 0) {
            p.item = p.imgSlide.length - 1;
        } else {
            p.item--;
        }
        m.movimientoSlide(p.item);
    },
    movimientoSlide: function(item) {

        p.formatearLoop = true;

        p.cajaSlide.style.left = item * -100 + "%";

        //Darle opacidad a los items de la imagen (circulos)
        for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].style.opacity = .5;
        }
        p.paginacion[item].style.opacity = 1;

        //Para darle animación al cambio de las imagenes.
        if (p.animacionSlide == "slide") {
            //Esta animación muestra la transición de las imagenes en determinado tiempo
            p.cajaSlide.style.transition = ".7s left ease-in-out";
        } else if (p.animacionSlide == "fade") {
            //Esta animación muestra la imagen desde la opacidad 0 a la 1 en determinado tiempo
            p.imgSlide[item].style.opacity = 0;
            setTimeout(function() {
                p.imgSlide[item].style.transition = "7s opacity ease-in-out";
                p.imgSlide[item].style.opacity = 1;
            }, 50)
        }
    },
    //Metodo para que se realice la paginación en automatico
    intervalo: function() {
        setInterval(function() {
            if (p.formatearLoop) {
                p.formatearLoop = false;
            } else {
                m.avanzar();
            }
        }, p.velocidadSlide)
    }
}

m.inicioSlide();