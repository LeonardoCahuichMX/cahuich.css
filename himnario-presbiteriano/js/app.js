/*import {clickNavAShowPag} from '../../js/modulos/clickNavAShowPag.js';
import {scroolUpDowm} from '../../js/modulos/scroolUpDowm.js';*/
import {himnos} from './modulos/himnos.js'

document.addEventListener('DOMContentLoaded', () => {

    const himnosVariable = himnos;

    function mostarHimno(numero) {
      if(document.getElementById("mostrar-himno") !== 'none') {
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
    
    let himnoURL = window.location.hash.replace('#', '');
    
    window.addEventListener('hashchange', (e) => {
        himnoURL = window.location.hash.replace('#', '')
        if (himnoURL === 'himnos') {
            //cargar_himno(himnos[himnoURL])
            mostrarHimnosPag(himnosVariable)
        } else if (himnoURL === 'buscar') {
          //cargar_himno(himnos[himnoURL])
          buscarPag();
        } else if (himnoURL) {
          //mostrarHimnosPag(himnosVariable)
          cargaHimno()
          mostarHimno(himnoURL);
        } else {
            //cargar_home()
            cargarHome()
        }
    }, false);

    const himnoActual = localStorage.getItem('himnoActual')

    if (himnoActual) {
        //cargar_himno(himnos[himnoActual])
    } else {
        cargarHome()
    }
});

/*(function() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('./regist_serviceWorker.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
  })();*/