import {clickNavAShowPag} from '../../js/modulos/clickNavAShowPag.js';
import {scroolUpDowm} from '../../js/modulos/scroolUpDowm.js';
import {himnos} from './modulos/himnos.js'

window.addEventListener('load', function() {

    function himnosFuncion(himnos) {
        for(let prop in himnos) {
            document.getElementById("himnos").innerHTML += `
            <a class="btn-nav-2 button-himno" id="boton-himno-${himnos[prop]['numero']}" name="mostrar-himno" data-himno="${himnos[prop]['numero']}">
                <div class="numero">
                #${himnos[prop]['numero']}
                </div>
                <div class="titulo">
                ${himnos[prop]['titulo']}
                </div>
            </a>`;
        }
    }
    const himnosVariable = himnos;
    himnosFuncion(himnosVariable);
    function favoritos(opcion, supOpcion, himnos) {
        if(opcion === 1) {
            /* botonFavoritosDeMostrarHimnos */
            if(supOpcion === 1) {
                if(document.getElementById("mostrar-himno").style.display === 'block') {
                    let himnosActual = localStorage.getItem("data-himnoVisible");
                    const retrievedArray = JSON.parse(localStorage.getItem('favoritos'));
                    if(!retrievedArray.includes(himnosActual)) {
                        document.getElementById("barra-de-pagina").innerHTML = '';
                        document.getElementById("barra-de-pagina").innerHTML = `
                        <li id="agregar-himno-favoritos">Agregar a favoritos</li>`;
                    } else {                
                        document.getElementById("barra-de-pagina").innerHTML = '';
                        document.getElementById("barra-de-pagina").innerHTML = `
                        <li id="eliminar-himno-favoritos">Eliminar de favoritos</li>`;
                    }
                }
            } else if(supOpcion === 2) {
                if(document.getElementById("mostrar-himno").style.display === 'none') {
                    document.getElementById("barra-de-pagina").innerHTML = '';
                }
            }
        } else if(opcion === 2) {
            if(localStorage.getItem("favoritos") == null || localStorage.getItem("favoritos") == undefined) {
                const myArray = [];

                const jsonString = JSON.stringify(myArray);

                localStorage.setItem("favoritos", jsonString);
                /*let objeto = localStorage.getItem("favoritos");
                console.log(objeto[1]);*/
            }
            const element = document.getElementById("agregar-himno-favoritos");
            element.addEventListener('click', function(event) {
                let himnosActual = localStorage.getItem("data-himnoVisible");
                
                const retrievedArray = JSON.parse(localStorage.getItem('favoritos'));
                retrievedArray.push(himnosActual);

                const jsonStringset = JSON.stringify(retrievedArray);

                localStorage.setItem("favoritos", jsonStringset);
                console.log("retrievedArray");
            });
        } else if(opcion === 3) {
            if(localStorage.getItem("favoritos") == null || localStorage.getItem("favoritos") == undefined) {
                const myArray = [];

                const jsonString = JSON.stringify(myArray);

                localStorage.setItem("favoritos", jsonString);
                /*let objeto = localStorage.getItem("favoritos");
                console.log(objeto[1]);*/
            } else {
                const retrievedArrayHimnosFavoritos = JSON.parse(localStorage.getItem('favoritos'));
                let iDos = 1;
                document.getElementById("recientes").innerHTML = '';
                document.getElementById("home").style.paddingBottom = '100px';
                for (let i = 0; i < retrievedArrayHimnosFavoritos.length; i++) {
                    console.log(retrievedArrayHimnosFavoritos[i], himnos[iDos].titulo);
                    document.getElementById("recientes").innerHTML += `
                    <a class="btn-nav-2 button-himno" id="boton-himno-continuar-${himnos[iDos].numero}" name="mostrar-himno" data-himno="${himnos[iDos].numero}">
                        <div class="contenido">
                            <div class="numero">
                            #${himnos[iDos].numero}
                            </div>
                            <div class="nombre">
                                ${himnos[iDos].titulo}
                            </div>
                        </div>
                    </a>`;
                    iDos = iDos+i;
                }
                if(retrievedArrayHimnosFavoritos.length !== 0) {
                    botonesHimnos();
                } else {
                    document.getElementById("recientes").innerHTML = `
                    <p>No hay favoritos actualmente.</p>`;
                }
            }
        } else if(opcion === 4) {
            /*retrievedArray.push(himnosActual);

                        const jsonStringset = JSON.stringify(retrievedArray);

                        localStorage.setItem("favoritos", jsonStringset);
                        console.log("retrievedArray");*/
            let himnosActual = localStorage.getItem("data-himnoVisible");
            const retrievedArray = JSON.parse(localStorage.getItem('favoritos'));
            if(retrievedArray.includes(himnosActual)) {
                const element = document.getElementById("eliminar-himno-favoritos");
                element.addEventListener('click', function(event) {
                    let eliminadoHimno = retrievedArray.filter(x => x !== himnosActual);
                    const jsonStringset = JSON.stringify(eliminadoHimno);

                    localStorage.setItem("favoritos", jsonStringset);
                });
            }
        }
    };
    function mostarHimno(numero) {
        if(document.getElementById("mostrar-himno") !== 'none') {
            favoritos(1, 1,)
            if(document.getElementById("agregar-himno-favoritos") !== null) {
                favoritos(2);
            } else if(document.getElementById("eliminar-himno-favoritos") !== null) {
                favoritos(4);
            }
    
            document.getElementById("mostrar-himno").innerHTML = '';
            document.getElementById("mostrar-himno").innerHTML += `
            <article>
                <div class="cabecera">
                    <div class="himno-titulo">
                        <div class="numero">
                        Himno #${himnos[numero]['numero']}: 
                        </div>
                        <div class="titulo">
                        ${himnos[numero]['titulo']}
                        </div>
                    </div>
                    <div class="intro">
                    ${himnos[numero]['intro']}
                    </div>
                </div>
                    <br>`;
                    for(let prop in himnos[numero]['referencias']) {
                        document.getElementById("mostrar-himno").innerHTML += `
                        <div class="referencia">
                        ${himnos[numero]['referencias'][prop]}
                        </div>`;
                    }
                document.getElementById("mostrar-himno").innerHTML += `<div class="cuerpo"><br>`;
                for(let prop in himnos[numero]['versos']) {
                    document.getElementById("mostrar-himno").innerHTML += `
                    <div class"parte">
                    <div class="versos-numero">
                    ${himnos[numero]['versos'][prop]['nombre']}
                    </div>`;
                    for(let propDos in himnos[numero]['versos'][prop]['lineas']) {
                        document.getElementById("mostrar-himno").innerHTML += `
                        <div class="linea">
                        ${himnos[numero]['versos'][prop]['lineas'][propDos]}
                        </div>`;
                    }
                    document.getElementById("mostrar-himno").innerHTML += `<br>
                    </div>`;
                }
                document.getElementById("mostrar-himno").innerHTML += `
                </div>
                <div class="autores">
                    ${himnos[numero]['autores']}
                </div>
            </article>`;
            console.log(himnos[numero]);
        }
    }
    
    function botonesHimnos() {
        /**
         *  Funcion de botonesHimnos. v0.0.2.
         */
        const elementosConClase = document.querySelectorAll('.btn-nav-2');

        elementosConClase.forEach((elemento) => {
            elemento.addEventListener('click', () => {
                console.log('Se ha hecho clic en un elemento con la clase "mi-clase"');
                // Aquí puedes acceder al ID del elemento utilizando el método `getAttribute` o `dataset`
                const idElemento = elemento.getAttribute('id');
                const himnoId = elemento.getAttribute('data-himno');
                const namePag = elemento.getAttribute('name');
                console.log(`ID del elemento: ${idElemento}`);

                document.getElementById(namePag).style.display = "block";
        
                document.body.setAttribute("data-himnoVisible", himnoId)
                mostarHimno(himnoId);
                localStorage.setItem("data-himnoVisible", himnoId);
        
                let elements = document.getElementsByClassName("btn-nav");

                for(let prop in elements) {
                    if(elements[prop]['name'] !== undefined && elements[prop]['id'] !== undefined && elements[prop]['name'] !== namePag) {
                        document.getElementById(elements[prop]['name']).style.display = "none";
        
                        document.body.setAttribute("data-pagePaginatorVisible", namePag)
                    }
                }
            });
        });
    }

    function himnosContinuar(himnos, numero) {
        document.getElementById("continuar").innerHTML = '';
        document.getElementById("continuar").innerHTML += `
        <a class="btn-nav-2 button-himno" id="boton-himno-continuar-${himnos[numero]['numero']}" name="mostrar-himno" data-himno="${himnos[numero]['numero']}">
            <div class="titulo">
                Continuar con
            </div>
            <div class="contenido">
                <div class="numero">
                #${himnos[numero]['numero']}
                </div>
                <div class="nombre">
                    ${himnos[numero]['titulo']}
                </div>
            </div>
        </a>`;
        botonesHimnos();
    }

    function visorDeHimnoVistoUltimo(decideFuncion) {
        if(localStorage.getItem("data-himnoVisible") !== null) {
            mostarHimno(localStorage.getItem("data-himnoVisible"));
            himnosContinuar(himnosVariable, localStorage.getItem("data-himnoVisible"))

            document.getElementById("btn-nav-3").style.display = "inline-block"
            document.getElementById("btn-nav-3").innerHTML="";
            document.getElementById("btn-nav-3").innerHTML= "Himno "+localStorage.getItem("data-himnoVisible");
        } else {
            document.getElementById("btn-nav-3").style.display = "none"
        }
    }
    visorDeHimnoVistoUltimo();

    function nombreDePaginasBarra() {
        if(document.body.getAttribute("data-pagePaginatorVisible") !== null) {
            let nombreDePaginas = document.body.getAttribute("data-pagePaginatorVisible");
            if(document.body.getAttribute("data-pagePaginatorVisible") === 'home') {
                document.getElementById("nav-titulo").innerHTML = '';
                document.getElementById("nav-titulo").innerHTML += 'Home';
            } else if(document.body.getAttribute("data-pagePaginatorVisible") === 'pag-himnos') {
                document.getElementById("nav-titulo").innerHTML = '';
                document.getElementById("nav-titulo").innerHTML += 'Himnos';
            } else if(document.body.getAttribute("data-pagePaginatorVisible") === 'buscar') {
                document.getElementById("nav-titulo").innerHTML = '';
                document.getElementById("nav-titulo").innerHTML += 'Buscar';
            } else if(document.body.getAttribute("data-pagePaginatorVisible") === 'mostrar-himno') {
                document.getElementById("nav-titulo").innerHTML = '';
                document.getElementById("nav-titulo").innerHTML += 'Himno N#: '+localStorage.getItem("data-himnoVisible");
            } else if(document.body.getAttribute("data-pagePaginatorVisible") === 'pag-menu') {
                document.getElementById("nav-titulo").innerHTML = '';
                document.getElementById("nav-titulo").innerHTML += 'Menu';
            } else if(document.body.getAttribute("data-pagePaginatorVisible") === 'acercaDe') {
                document.getElementById("nav-titulo").innerHTML = '';
                document.getElementById("nav-titulo").innerHTML += 'Acerca de';
            } else {
                document.getElementById("nav-titulo").innerHTML = '';
                document.getElementById("nav-titulo").innerHTML += nombreDePaginas;
            }
        } else {
            document.getElementById("nav-titulo").innerHTML = '';
            document.getElementById("nav-titulo").innerHTML += "Home";
        }
    }
    nombreDePaginasBarra()

    function tamanoFuenteHimnosCambiar() {
        /*const select = document.getElementById('fuente-himnos-tamaño');
        const valorSeleccionado = select.value;
        alert(valorSeleccionado)*/

        document.getElementById("mostrar-himno").style.fontSize = '1.084em';

        const select = document.getElementById('fuente-himnos-tamaño');
            select.addEventListener('change', () => {
                const valorSeleccionado = select.value;
                const textoSeleccionado = select.options[select.selectedIndex].text;
                /*console.log(`Valor seleccionado: ${valorSeleccionado}`);
                console.log(`Texto seleccionado: ${textoSeleccionado}`);
                alert(valorSeleccionado)*/
                localStorage.setItem("fuente-texto-himnos-opcion", valorSeleccionado);
                localStorage.setItem("fuente-texto-himnos-valor", textoSeleccionado);

                document.getElementById("mostrar-himno").style.fontSize = ''+valorSeleccionado+'';

                //select.value = 'opcion3';
            });
        if(!localStorage.getItem("fuente-texto-himnos-opcion")) {
            document.getElementById("mostrar-himno").style.fontSize = '1.084em';
        } else {
            select.value = localStorage.getItem("fuente-texto-himnos-opcion");
            document.getElementById("mostrar-himno").style.fontSize = ''+localStorage.getItem("fuente-texto-himnos-opcion")+'';
        }
    }
    function visorDeEventos() {
        document.addEventListener('click', () => {
            window.scroll(0,0);
            visorDeHimnoVistoUltimo();
            
            if(document.body.getAttribute("data-pagePaginatorVisible") === 'mostrar-himno' || document.body.getAttribute("data-pagePaginatorVisible") === 'pag-himnos') {
                document.getElementById("nav-pag").classList.add("nav-scroll");
                scroolUpDowm();
            } else if(document.body.getAttribute("data-pagePaginatorVisible") !== 'mostrar-himno' || document.body.getAttribute("data-pagePaginatorVisible") !== 'pag-himnos') {
                document.getElementById("nav-pag").classList.remove("nav-scroll");
            }
            
            nombreDePaginasBarra()
            favoritos(1, 2);
            favoritos(3, 0, himnosVariable);

        });
    }
    
    function searchhimno(himnosVariable) {
        function buscador(himnosVariable) {
            let textoDeBuscar = document.getElementById("texto-buscar").value;
            document.getElementById("resultados").innerHTML = "";
            document.getElementById("buscar-ayuda").innerHTML = "";
            for(let prop in himnosVariable) {
                let str = himnosVariable[prop]['titulo'].toLowerCase();
                let re = textoDeBuscar.toLowerCase();
                if(himnosVariable[prop]['numero'] == textoDeBuscar) {
                    document.getElementById("resultados").innerHTML = '';
                    document.getElementById("resultados").innerHTML += `
                    <div id="resultado">
                        <a class="btn-nav-2" id="btn-buscar-himno-${himnosVariable[prop]['numero']}" name="mostrar-himno" data-himno="${himnosVariable[prop]['numero']}">
                            <span>${himnosVariable[prop]['numero']}</span>
                            <span>${himnosVariable[prop]['titulo']}</span>
                        </a>
                    </div>`;
                    return;
                } else if(str.search(re) != -1) {
                    document.getElementById("resultados").innerHTML += `
                    <div id="resultado">
                        <a class="btn-nav-2" id="btn-buscar-himno-${himnosVariable[prop]['numero']}" name="mostrar-himno" data-himno="${himnosVariable[prop]['numero']}">
                            <span>${himnosVariable[prop]['numero']}</span>
                            <span>${himnosVariable[prop]['titulo']}</span>
                        </a>
                    </div>`;
                }

                for(let propDos in himnosVariable[prop]['referencias']) {
                    let strReferencias = himnosVariable[prop]['referencias'][propDos].toLowerCase();
                    if(strReferencias.search(re) != -1) {
                        document.getElementById("resultados").innerHTML += `
                        <div id="resultado">
                            <a class="btn-nav-2" id="btn-buscar-himno-${himnosVariable[prop]['numero']}" name="mostrar-himno" data-himno="${himnosVariable[prop]['numero']}">
                                <span>${himnosVariable[prop]['numero']}</span>
                                <span>${himnosVariable[prop]['titulo']}</span>
                                <br>
                                <br>
                                <span>Referencias</span>
                                <br>
                                <span>${himnosVariable[prop]['referencias'][propDos]}</span>
                            </a>
                        </div>`;
                    }
                }

                for(let propDos in himnosVariable[prop]['autores']) {
                    let strReferencias = himnosVariable[prop]['autores'][propDos].toLowerCase();
                    if(strReferencias.search(re) != -1) {
                        document.getElementById("resultados").innerHTML += `
                        <div id="resultado">
                            <a class="btn-nav-2" id="btn-buscar-himno-${himnosVariable[prop]['numero']}" name="mostrar-himno" data-himno="${himnosVariable[prop]['numero']}">
                                <span>${himnosVariable[prop]['numero']}</span>
                                <span>${himnosVariable[prop]['titulo']}</span>
                                <br>
                                <br>
                                <span>Autores</span>
                                <br>
                                <span>${himnosVariable[prop]['autores'][propDos]}</span>
                            </a>
                        </div>`;
                    }
                }
            };
        }
        document.getElementById("form-buscar").addEventListener("submit", function(event) {
            event.preventDefault();
            buscador(himnosVariable);
            botonesHimnos();
        });
        document.getElementById("botton-buscar").addEventListener('click', () => {
            event.preventDefault();
            buscador(himnosVariable);
            botonesHimnos();
        });
    }
    function borrarTodosLosDatos() {
        document.getElementById("boton-borrar-datos").addEventListener('click', () => {
            localStorage.clear();
            location.reload(true);
        });
    }
    function buttonReinstallApp() {
        document.getElementById("btn-reinstall-app").addEventListener('click', () => {
            location.reload(true);
        });
    }

    function pantallaDeBievenida() {
        if(!localStorage.getItem('nombreUsuario')) {
            document.getElementById("pantalla-bienvenida").style.display = 'block';

            function nombreUsuario() {
                const nombre = document.getElementById("text-nombre-usuario").value;
                localStorage.setItem("nombreUsuario", nombre);

                document.getElementById("pantalla-bienvenida").style.display = 'none';
            }

            document.getElementById("form-nombre-usuario").addEventListener("submit", function(event) {
                event.preventDefault();
                nombreUsuario()
                //alert("hola 2");
            });
            document.getElementById("button-nombre-usuario").addEventListener('click', () => {
                nombreUsuario()
                //alert("hola");
            });

            document.getElementById("version-bienvenida").innerHTML = localStorage.getItem("nombreUsuario");
        }
    }

    searchhimno(himnosVariable);

    pantallaDeBievenida()
    tamanoFuenteHimnosCambiar();
    favoritos(3, 0, himnosVariable);
    borrarTodosLosDatos();
    buttonReinstallApp();
    clickNavAShowPag();
    botonesHimnos();
    visorDeEventos();
});