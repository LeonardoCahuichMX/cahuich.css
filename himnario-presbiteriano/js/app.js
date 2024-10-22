/*import {clickNavAShowPag} from '../../js/modulos/clickNavAShowPag.js';*/
import {scroolUpDowm} from '../../js/modulos/scroolUpDowm.js';
import {himnos} from './modulos/himnos.js'

webSiteData = {
  name: 'Himnario Prebisteriano',
  nameMarquet: 'Himnario <b>Prebisteriano</b>',
  author: 'Leonardo Cahuich',
  dev: 'Leonardo Cahuich',
  version: '0.0.1.4.2',
}

function serviceWorkerInit() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./regist_serviceWorker.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function (err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {

    const himnosVariable = himnos;

    function pantallaDeBievenida() {
      document.getElementById("app").innerHTML = `
      <main class="pantalla-bienvenida" id="pantalla-bienvenida">
        <div class="fondo">
          <div class="fondo">
            <h1>Bievenido a la app <span id="app-name">${webSiteData.nameMarquet}</span></h1>
            <p>Tu nombre:</p>
            <form id="form-nombre-usuario">
              <input type="text" placeholder="Pon tu nombre o apodo aqui" style="display: inline-block;" id="text-nombre-usuario">
            </form>
            <div class="bievenida-resultado"></div>
            <h6>Versión: <span id="version-bienvenida">${webSiteData.version}</span></h6>

            <button type="button" style="display: block;width: 90%;" id="button-nombre-usuario">Continuar</button>
          </div>
        </div>
      </main>
      `;
    }

    function nombreDeUsuarioHome() {
      if(localStorage.getItem('nombreUsuario')) {
        document.getElementById("nombre-usario-en-home").innerHTML = localStorage.getItem("nombreUsuario");
      }
    }
    
    function pantallaDeBievenidaIniciador() {
      pantallaDeBievenida();
      if(!localStorage.getItem('nombreUsuario')) {
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
      }
  }


    function tamanoLetraHimno(id) {
      if(!localStorage.getItem("fuente-texto-himnos-opcion")) {
        document.getElementById("mostrar-himno").style.fontSize = '1.084em';
      } else {
          document.getElementById(id).style.fontSize = ''+localStorage.getItem("fuente-texto-himnos-opcion")+'';
      }
    }

    function mostarHimno(numero) {
      tamanoLetraHimno("mostrar-himno");
          //favoritos(1, 1,)
          if(document.getElementById("agregar-himno-favoritos") !== null) {
              //favoritos(2);
          } else if(document.getElementById("eliminar-himno-favoritos") !== null) {
              //favoritos(4);
          }
  
          document.getElementById("mostrar-himno").innerHTML = '';
          document.getElementById("mostrar-himno").innerHTML += `
          <article>
              <!--<div class="cabecera">
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
                  <br>-->`;
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
  function favoritos(opcion, himnos) {
    function agregar() {
      document.getElementById("barra-de-pagina").innerHTML = '';
      document.getElementById("barra-de-pagina").innerHTML = `
      <li id="agregar-himno-favoritos">☆</li>`;

      const element = document.getElementById("agregar-himno-favoritos");
    }
    function eliminar() {
      document.getElementById("barra-de-pagina").innerHTML = '';
      document.getElementById("barra-de-pagina").innerHTML = `
      <li id="eliminar-himno-favoritos">★</li>`;

      const element = document.getElementById("agregar-himno-favoritos");
    }
    if(opcion === 1) {
        /* botonFavoritosDeMostrarHimnos */
                let himnosActual = localStorage.getItem("data-himnoVisible");
                const retrievedArray = JSON.parse(localStorage.getItem('favoritos'));
                if(!retrievedArray.includes(himnosActual)) {
                  agregar()

                    const element = document.getElementById("agregar-himno-favoritos");
                    element.addEventListener('click', function(event) {
                        let himnosActual = localStorage.getItem("data-himnoVisible");
                        
                        const retrievedArray = JSON.parse(localStorage.getItem('favoritos'));
                        retrievedArray.push(himnosActual);

                        const jsonStringset = JSON.stringify(retrievedArray);

                        localStorage.setItem("favoritos", jsonStringset);
                        console.log("retrievedArray");
                        favoritos(1)
                    });
                } else {                
                  eliminar()
                    
                    let himnosActual = localStorage.getItem("data-himnoVisible");
                    const retrievedArray = JSON.parse(localStorage.getItem('favoritos'));
                    if(retrievedArray.includes(himnosActual)) {
                        const element = document.getElementById("eliminar-himno-favoritos");
                        element.addEventListener('click', function(event) {
                            let eliminadoHimno = retrievedArray.filter(x => x !== himnosActual);
                            const jsonStringset = JSON.stringify(eliminadoHimno);

                            localStorage.setItem("favoritos", jsonStringset);
                            favoritos(1)
                        });
                    }
                }
    } else if(opcion === 3) {
        if(localStorage.getItem("favoritos") == null || localStorage.getItem("favoritos") == undefined) {
            const myArray = [];

            const jsonString = JSON.stringify(myArray);

            localStorage.setItem("favoritos", jsonString);
            /*let objeto = localStorage.getItem("favoritos");
            console.log(objeto[1]);*/
        } else {
            const retrievedArrayHimnosFavoritos = JSON.parse(localStorage.getItem('favoritos'));
            document.getElementById("recientes").innerHTML = '';
            document.getElementById("home").style.paddingBottom = '100px';
            for (let i = 0; i < retrievedArrayHimnosFavoritos.length; i++) {
                let iDos = retrievedArrayHimnosFavoritos[i];
                console.log(retrievedArrayHimnosFavoritos[i], himnos[iDos].titulo);
                document.getElementById("recientes").innerHTML += `
                <a href="#${himnos[iDos].numero}">
                    <div class="contenido">
                        <div class="numero">
                        #${himnos[iDos].numero}
                        </div>
                        <div class="nombre">
                            ${himnos[iDos].titulo}
                        </div>
                    </div>
                </a>`;
            }
            if(retrievedArrayHimnosFavoritos.length !== 0) {
            } else {
                document.getElementById("recientes").innerHTML = `
                <p>No hay favoritos actualmente.</p>`;
            }
        }
    }
  };

  function memoriaBD(dato, data) {
    if(dato === 'himnoreciente') {
      if(!localStorage.getItem("data-himnoVisible")) {
        localStorage.setItem("data-himnoVisible", "")
      } else {
        localStorage.setItem("data-himnoVisible", data)
      }
    }
  }

    function cargarHome() {
      document.getElementById("app").innerHTML = `
      <main class="pagina home" id="home">
          <div class="titulo">
            <div class="titulo">
            Hola, 
            <span id="nombre-usario-en-home"></span>
            </div>
          </div>
          <!--<div class="botones">
            <button type="button">Favoritos</button>
          </div>-->
          <div class="continuar" id="continuar"></div>
          <hr>
          <h3>Favoritos</h3>
          <div class="recientes" id="recientes">
            <p>No hay favoritos actualmente.</p>
          </div>
      </main>
        `;
    }
    
    function himnosContinuar(himnos, numero) {
      if(numero !== '') {
        document.getElementById("continuar").innerHTML = '';
        document.getElementById("continuar").innerHTML += `
        <a href="#${himnos[numero]['numero']}">
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
      }
  }

    function precargarHimnosPag(himnos) {
      //document.getElementById("himnos").innerHTML
      let preCargaHimnosPagVar = '';
        for(let prop in himnos) {
            preCargaHimnosPagVar += `
            <a href="#${himnos[prop]['numero']}">
                <div class="numero">
                #${himnos[prop]['numero']}
                </div>
                <div class="titulo">
                ${himnos[prop]['titulo']}
                </div>
            </a>`;
        }
        return preCargaHimnosPagVar;
    }
    const himnosPagVar = precargarHimnosPag(himnosVariable);
    function mostrarHimnosPag(himnos) {
      document.getElementById("app").innerHTML = `
      <main class="pagina pag-himnos" id="pag-himnos">
        <div class="himnos" id="himnos">
        </div>
      </main>
      `;
      document.getElementById("himnos").innerHTML = himnosPagVar;
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
                      <a href="#${himnosVariable[prop]['numero']}">
                          <span>${himnosVariable[prop]['numero']}</span>
                          <span>${himnosVariable[prop]['titulo']}</span>
                      </a>
                  </div>`;
                  
                  return;
              } else if(str.search(re) != -1) {
                  document.getElementById("resultados").innerHTML += `
                  <div id="resultado">
                      <a href="#${himnosVariable[prop]['numero']}">
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
                        <a href="#${himnosVariable[prop]['numero']}">
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
                        <a href="#${himnosVariable[prop]['numero']}">
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
      });
      document.getElementById("botton-buscar").addEventListener('click', () => {
          buscador(himnosVariable);
      });
  }
    function buscarPag() {
      document.getElementById("app").innerHTML = `
      <main class="pagina buscar" id="buscar">
        <div class="fondo">
          <form id="form-buscar">
            <input type="search" placeholder="Buscar himnos..." id="texto-buscar">
            <input type="button" value="Buscar" id="botton-buscar">
          </form>
          <div class="ayuda" id="buscar-ayuda">
            <h3>Directrices:</h3>
            <p>Puede usted buscar por:</p>
            <ul>
              <li>Numero</li>
              <li>Nombre</li>
              <li>Autores</li>
              <li>Referencias biblicas</li>
            </ul>
            <br>
          </div>
          <div id="resultados">
          </div>
        </div>
      </main>
      `;
    }

    function cargaHimno() {
      document.getElementById("app").innerHTML = `
      <main class="pagina mostrar-himno" id="mostrar-himno">
      </main>
      `;
    }

    function barraHimnoAbierto(opcion, himno, himnos) {
      if(himno !== '') {
        document.getElementById("himno-reciente").innerHTML = `
        <li><a href="#${himno}">Himno #${himnos[himno].numero} - ${himnos[himno].titulo}</li>
        `;
        if(opcion === 1) {
            document.getElementById("reciente-nav").classList.add("mh");
        } else {
            document.getElementById("reciente-nav").classList.remove("mh");
        }
      }
    }

    function headerPagName(pagName) {
      if(pagName) {
        document.getElementById("nav-titulo").innerHTML = pagName;
      } else {
        document.getElementById("nav-titulo").innerHTML = 'Home';
      }
    }

    function menu() {
      function borrarTodosLosDatos() {
        document.getElementById("boton-borrar-datos").addEventListener('click', () => {
            localStorage.clear();
            location.reload(true);
        });
      }
      function tamanoFuenteHimnosCambiar(id) {
        const select = document.getElementById(id);
        if(!localStorage.getItem("fuente-texto-himnos-opcion")) {
          localStorage.setItem("fuente-texto-himnos-opcion", '1.084em');
        } else {
          select.value = localStorage.getItem("fuente-texto-himnos-opcion");
        }
            select.addEventListener('change', () => {
                const valorSeleccionado = select.value;
                const textoSeleccionado = select.options[select.selectedIndex].text;
                /*console.log(`Valor seleccionado: ${valorSeleccionado}`);
                console.log(`Texto seleccionado: ${textoSeleccionado}`);
                alert(valorSeleccionado)*/
                localStorage.setItem("fuente-texto-himnos-opcion", valorSeleccionado);
                localStorage.setItem("fuente-texto-himnos-valor", textoSeleccionado);

                //select.value = 'opcion3';
            });
      }
      document.getElementById("app").innerHTML = `
      <main class="pagina pag-menu" id="pag-menu">
        <h2>Configuración</h2>
        <details name="Opciones">
          <summary>Pantalla</summary>
          <hr>
            <h3>Tamaño de fuente en himnos</h3>
            <p>El tamaño de fuente afectado solo sera el la visualización de los himnos.</p>
            <select id="fuente-himnos-tamaño">
              <option value="1.001em">P 11</option>
              <option value="1.084em" selected>P 13</option>
              <option value="1.167em">P 14</option>
              <option value="1.334em">P 16</option>
              <option value="1.501em">P 18</option>
              <option value="1.668em">P 20</option>
            </select>
          <hr>
        </details>
        <details name="Opciones">
          <summary>Datos</summary>
          <div class="caja-borrar-datos">
            <div class="texto">
              Borrar todos los datos
            </div>
            <button type="button" id="boton-borrar-datos">Borrar</button>
          </div>
          <h6 style="font-weight: normal;">Advertencia: la app se recargara, si no tiene conexión a internet puede perder el acceso a esta
            hasta que se conecte a internet.
          </h6>
        </details>
      <ul>
        <li><a href="#AcercaDe">Acerca de</a></li>
      </ul>
    </main>
      `;
      borrarTodosLosDatos();
      tamanoFuenteHimnosCambiar("fuente-himnos-tamaño")
    }
    function acercaDe() {
      function buttonReinstallApp() {
        document.getElementById("btn-reinstall-app").addEventListener('click', () => {
            location.reload(true);
        });
    }
      document.getElementById("app").innerHTML = `
      <main class="pagina acercaDe" id="acercaDe">
        <h2>Himnario Presbiteriano by Cahuich.com</h2>
        <p>Una agradecimiento aqui ira.</p>
        <br>
        <p><b>Licencia:</b> MIT License</p>
        <hr>
        <h3>Datos tecnicos</h3>
        <p><b>Desarrollador: </b><span id="desarrollador"><script>insertar('desarrollador', webSiteData.dev)</script></span></p>
        <br>
        <p>Esta aplicación esta construida usando</p>
        <h3>Cahuich.<b>librarys</b></h3>
        <p>Ademas de lo siguiente.</p>
        <h3>Javascript Puro</h3>
        <p>Esta aplicación solo usa Javascript Puro (JavaScript Vanilla).</p>
        <br>
        <p>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
          <rect width="630" height="630" fill="#f7df1e"/>
          <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
          </svg>
        </p>
        <h3>Consuido con HTML5 (que engloba CSS3 y JavaScript)</h3>
        <p>
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
            <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
            <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
            <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
            <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
          </svg>
          <svg width="100" height="100"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520">
            <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"/>
            <path fill="#30a9dc" d="M226 472l149-41 35-394H226"/>
            <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"/>
            <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"/>
          </svg>
          <hr>
          <h3>Desarrollo</h3>
          <button type="button" id="btn-reinstall-app">Reinstalar App</button>
          <p>Advertencia: Esta opcion recargara-reinstalara la app,
            por lo que si no cuenta con conexion a internet, no podra acceder a esta.
          </p>

          <h3>Versión</h3>
          <p id="version">${webSiteData.version}</p>
                
        </p>
      </main>
      `;
      buttonReinstallApp()
    }

    function home() {
      cargarHome()
      himnosContinuar(himnosVariable, localStorage.getItem('data-himnoVisible'))
      barraHimnoAbierto(0, localStorage.getItem('data-himnoVisible'), himnosVariable);
      document.getElementById("reciente-nav").style.display = 'none';
      headerPagName(himnoURL);
      favoritos(3, himnosVariable)
      nombreDeUsuarioHome()
    }

    function subVisorDeEventos() {
      window.scroll(0,0);
          favoritos(1);
          //favoritos(3, 0, himnosVariable);
    }
  function visorDeEventos() {
    document.addEventListener('click', () => {
        subVisorDeEventos();
    });
  }
    
    //Iniciar funciones aqui
    //visorDeEventos();
    scroolUpDowm();
    pantallaDeBievenidaIniciador()

    let himnoURL = window.location.hash.replace('#', '');

    if(!localStorage.getItem('data-himnoVisible') || !localStorage.getItem('himnoActual')) {
      localStorage.setItem('data-himnoVisible', '')
      localStorage.setItem('himnoActual', '')
    }

    window.addEventListener('hashchange', (e) => {
        himnoURL = window.location.hash.replace('#', '')
        barraHimnoAbierto(0, localStorage.getItem('data-himnoVisible'), himnosVariable);
        headerPagName(himnoURL)
        document.getElementById("reciente-nav").style.display = 'block';
        document.getElementById("nav-pag").classList.remove("nav-scroll");
        document.getElementById("barra-de-pagina").innerHTML = '';

        if (himnoURL === 'Himnos') {
            //cargar_himno(himnos[himnoURL])
            mostrarHimnosPag(himnosVariable)
            document.getElementById("nav-pag").classList.add("nav-scroll");
        } else if (himnoURL === 'Buscar') {
          //cargar_himno(himnos[himnoURL])
          buscarPag();
          searchhimno(himnosVariable)
        } else if (himnoURL === 'Menu') {
          //cargar_himno(himnos[himnoURL])
          menu();
        } else if (himnoURL === 'AcercaDe') {
          //cargar_himno(himnos[himnoURL])
          acercaDe();
        } else if (himnoURL) {
          //mostrarHimnosPag(himnosVariable)
          cargaHimno()
          mostarHimno(himnoURL);
          memoriaBD('himnoreciente', himnoURL);
          barraHimnoAbierto(1, localStorage.getItem('data-himnoVisible'), himnosVariable);
          document.getElementById("nav-pag").classList.add("nav-scroll");
          favoritos(1)
        } else {
            //cargar_home()
            home(himnoURL)
        }
    }, false);

    const himnoActual = localStorage.getItem('himnoActual')

    if (himnoActual) {
        //cargar_himno(himnos[himnoActual])
    } else {
      home(himnoURL)
    }
});

(function() {
  serviceWorkerInit();
})();