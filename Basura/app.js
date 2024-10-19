import {eventoANewNew} from './modulos/eventoANewNew.js';

window.addEventListener('load', function() {
    console.info("Pagina cargada");
    /*var altoHeader = $("nav").outerHeight();
    var ventanaHeader = $(window).outerHeight();
    $(".header").css("height", ventanaHeader-altoHeader);
    $(".header").css("padding-top", altoHeader);*/

    /*function aEvento() {
        $("a").on('click', function (event) {
            // if this.hash contain value
            if (this.hash !== "") {
    
                //default anchor click prevention
                event.preventDefault();
    
                // save hash
                var myHash = this.hash;
    
                // jQuery animate() method to call scroll
                // 1200 milliseconds takes to scroll to the desired area
                $('html, body').animate({
                    scrollTop: $(myHash).offset().top
                }, 1200, function () {
                    // when done scroll add # to URL
                    window.location.hash = myHash;
                });
            } // End if
        });
    }*/
    function scroolUpDowm() {
        const body = document.body;
        const nav = document.querySelector(".header-scroll");
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;

        window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll == 0) {
            body.classList.remove(scrollUp);
            return;
        }
        if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
            // down
            body.classList.remove(scrollUp);
            body.classList.add(scrollDown);
        } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
            // up
            body.classList.remove(scrollDown);
            body.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
        });
    }

    /*function menuSelector() {
        let paginador = 1;

        $("nav ul li a").on( "click", function() {
            console.log($(this)[0]['id']);
            if($(this)[0]['id'] ==  "btn") {
                if(paginador!==1) {
                    $(".paginaUno").toggle();
                    $(".paginaDos").toggle();
                    $(".acercaDe").toggle();
                    paginador = 1;
                }
            } else if($(this)[0]['id'] ==  "btn-demo"){
                if(paginador===1) {
                    $(".paginaUno").toggle();
                    $(".paginaDos").toggle();
                    $(".acercaDe").toggle();
                    paginador++;
                }
            } else if($(this)[0]['id'] ==  "btn-acercade"){
                if(paginador===1) {
                    $(".paginaUno").hide();
                    $(".paginaDos").hide();
                    $(".acercaDe").toggle();
                    paginador++;
                }
            }
        });
    }
    function menuSelectorAutomatico() {
        const paginaElementos = [];
        $(".pagina").each(function(index) {
            paginaElementos.push($(this).attr('class').replace("pagina ", ""));
        });
        console.log(paginaElementos);
        $("nav a").on( "click", function() {
            console.log("Clic en ", $(this).attr('id').replace("btn ", ""));
            let objetoAMostrar = ".pagina."+$(this).attr('id').replace("btn ", "");
            if($(objetoAMostrar).is(":visible") === false) {
                $(".pagina").hide();
                console.log("Se ocultan todas las paginas");
                console.log("Mostrar", objetoAMostrar);
                $(objetoAMostrar).css("display", "block");
            } else {
                console.log("Yas esta mostrado");
            }
        });
    }*/

    function cajaEmpezar() {
        document.getElementById('dialog-trigger-empezar').addEventListener('click', () => {
            document.getElementById('dialog-result-empezar').innerText = ''
            document.getElementById('dialog-empezar').showModal()
        })
          
        document.getElementById('dialog-empezar').addEventListener('close', (event) => {
            /*document.getElementById('dialog-result-empezar').innerText = `Your answer: ${event.target.returnValue}`*/
        })
    }
    function clicCajaContent(idClic, idCaja) {
        /*document.getElementById(idClic).addEventListener('click', () => {
            document.getElementById(idCaja).style.display = "block";
        })
        if( document.getElementById(idClic).addEventListener('mouseover') == true) {
            document.getElementById(idCaja).style.display = "block";
        } else {
            document.getElementById(idCaja).style.display = "none";
        }*/
        /*const element = document.getElementById(idClic);
        element.addEventListener('mouseover', function() {
            //console.log("adentor");
            document.getElementById(idCaja).style.display = "block";
        });
          
        element.addEventListener('mouseout', function() {
            document.getElementById(idCaja).style.display = "none";
        });*/
        let checker = false;
        const element = document.getElementById(idClic);
        const elementTwo = document.getElementById(idCaja);

        element.addEventListener('mouseover', function() {
            document.getElementById(idClic).addEventListener('click', () => {
                document.getElementById(idCaja).style.display = "block";
            })
        });
          
        elementTwo.addEventListener('mouseleave', function() {
            document.getElementById(idCaja).style.display = "none";
        });
    }
    function portadaRedimencionar() {
        const elemento = document.getElementById('nav');
        const ancho = elemento.clientWidth;
        const alto = elemento.clientHeight;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;//window.outerHeight

        const screenWidth = screen.width;
        const screenHeight = screen.height;

        document.getElementById('header-1').style.height = window.viewportHeight+'px';
        document.getElementById('header-1').style.paddingTop = alto+'px';
    }

    function cliclNavA(aId, namePag) {
        let aIdDos = document.getElementById(aId)
        aIdDos.addEventListener('click', () => {
            document.getElementById(namePag).style.display = "block";

            let elements = document.getElementsByClassName("btn-nav")
            console.log(elements);
            for(let prop in elements) {
                if(elements[prop]['name'] !== undefined && elements[prop]['id'] !== undefined && elements[prop]['name'] !== namePag) {
                    console.log(prop, elements[prop]['name'], elements[prop]['id']);
                    document.getElementById(elements[prop]['name']).style.display = "none";
                }
            }
        });
    }
    function clickNavAShowPag() {
        let elements = document.getElementsByClassName("btn-nav")
        console.log(elements);
        for(let prop in elements) {
            if(elements[prop]['name'] !== undefined && elements[prop]['id'] !== undefined) {
                console.log(prop, elements[prop]['name'], elements[prop]['id']);
                cliclNavA(elements[prop]['id'], elements[prop]['name'])
            //alert(elements[prop]['name']);
            }
        }
    }
    function eventoANew() {
        var elementos = document.querySelectorAll('a');

// Agregar un listener de eventos de clic a cada elemento
elementos.forEach(function(elemento) {
  elemento.addEventListener('click', function(evento) {
    // Aquí se ejecutará el código cuando se da clic en cualquier elemento
    console.log('Se ha dado clic en el elemento:', elemento);
    // Puedes agregar aquí cualquier código adicional que desees ejecutar
  });
});
    }
    

    //menuSelector()
    //aEvento();
    //menuSelectorAutomaticoDos();
    eventoANewNew()
    portadaRedimencionar()
    clickNavAShowPag();
    scroolUpDowm();

    cajaEmpezar()

    clicCajaContent("heading", "heading-box")
    clicCajaContent("p", "p-box")
    clicCajaContent("blockquote", "blockquote-box")
    clicCajaContent("list", "list-box")
    clicCajaContent("addresses", "addresses-box")
    clicCajaContent("code", "code-box")
    clicCajaContent("table", "table-box")


    /*let acercaDeCodigo = load("./acercade.html");
    alert(acercaDeCodigo);*/
    /*divGenerate(
        "acercaDe",
        "h1",
        "<b>¿Por que Cahuich.css?</b>"
    );
    divGenerate(
        "acercaDe",
        "h1",
        "<b>¿Por que Cahuich.css?</b>"
    );*/
    /*divAgregar(
        "acercaDe",
        "<h1><b>¿Por que Cahuich.css?</b></h1>"
    )*/
    
});