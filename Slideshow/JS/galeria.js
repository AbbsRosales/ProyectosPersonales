/*
 * OBJETO CON LAS PROPIEDADES DE LA GALERIA
 */
var pg = {
    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImagen: null,
    cuerpoDom: document.querySelector("body"),
    ligthbox: null,
    modal: null,
    animacionGaleria: "fade"
};


/*
 * OBJETO CON LOS MÉTODOS DE LA GALERIA
 */
var mg = {
    inicioGaleria: function() {
        for (let i = 0; i < pg.imgGaleria.length; i++) {
            pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)
        }
    },
    capturaImagen: function(img) {
        //Nos ayuda a verificar que imagen se le esta dando click.
        //console.log("img", img.target)
        pg.rutaImagen = img.target;
        mg.ligthbox(pg.rutaImagen);
    },
    ligthbox: function(img) {
        //Método JS que permite crear nuevos nodos (Es decir crear una nueva etiqueta HTML)
        //Se agrega un atributo id con el metodo setAttribute(1er. param nombre del atributo, 2do. param es el valor )
        pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "ligthbox");
        pg.ligthbox = document.querySelector("#ligthbox");
        //Se le da estilos
        pg.ligthbox.style.width = "100%";
        pg.ligthbox.style.height = "100%";
        pg.ligthbox.style.position = "fixed";
        pg.ligthbox.style.zIndex = "10";
        pg.ligthbox.style.background = "rgba(0,0,0,.8)";
        pg.ligthbox.style.top = 0;
        pg.ligthbox.style.lefts = 0;

        pg.ligthbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
        pg.modal = document.querySelector("#modal");

        //propiedad outerHTML nos ayuda a obtener el contenido HTML
        pg.modal.innerHTML = img.outerHTML + "<div>X</div>";

        pg.modal.style.display = "block";
        pg.modal.style.position = "relative";
        pg.modal.childNodes[0].style.width = "100%";
        pg.modal.childNodes[0].style.border = "15px solid white";

        if (window.matchMedia("(max-width:1000px)").matches) {
            pg.modal.style.width = "90%";
        } else {
            pg.modal.style.width = "60%";
        }

        //Animaciones
        if (pg.animacionGaleria == "slideLeft") {
            pg.modal.style.top = "50%";
            pg.modal.style.left = 0;
            pg.modal.style.opacity = 0;

            setTimeout(function() {
                pg.modal.style.transition = ".5s left ease";
                pg.modal.style.left = "50%";
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
        }

        if (pg.animacionGaleria == "slideTop") {
            pg.modal.style.top = "-100%";
            pg.modal.style.left = "50%";
            pg.modal.style.opacity = 0;
            setTimeout(function() {
                pg.modal.style.transition = ".5s top ease";
                pg.modal.style.top = "50%";
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
        }

        if (pg.animacionGaleria == "fade") {
            pg.modal.style.top = "50%";
            pg.modal.style.left = "50%";
            pg.modal.style.opacity = 0;
            setTimeout(function() {
                pg.modal.style.transition = ".5s opacity ease";
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px";
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
        }

        //Se le da estilo a la etiqueta X 
        pg.modal.childNodes[1].style.position = "absolute";
        pg.modal.childNodes[1].style.right = "5px";
        pg.modal.childNodes[1].style.top = "5px";
        pg.modal.childNodes[1].style.color = "silver";
        pg.modal.childNodes[1].style.cursor = "pointer";
        pg.modal.childNodes[1].style.fontSize = "25px";
        pg.modal.childNodes[1].style.width = "35px";
        pg.modal.childNodes[1].style.height = "35px";
        pg.modal.childNodes[1].style.textAlign = "center";
        pg.modal.childNodes[1].style.background = "white";
        pg.modal.childNodes[1].style.borderRadius = "5px 5px 5px 5px";

        pg.modal.childNodes[1].addEventListener("click", mg.salirGaleria);
    },
    salirGaleria: function() {
        //Método removeChild() JS para remover el nodo hijo.
        pg.ligthbox.parentNode.removeChild(pg.ligthbox);
    }
};

mg.inicioGaleria();