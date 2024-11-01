'use strict'
//import { accsesibilidad } from "./accsesibilidad";
import { anclaAnimation } from '../../js/modulos/eventoANewNew.js';
import { scroolUpDowm } from '../../js/modulos/scroolUpDowm.js';
import { btnTop } from '../../js/modulos/btnTopDiv.js';

window.addEventListener('load', function (event) {
  function fadeOut(element, duration = 600) {
    element.style.display = '';
    element.style.opacity = 1;
    var last = +new Date();
    var tick = function () {
      element.style.opacity = Number(+element.style.opacity - (new Date() - last) / duration).toFixed(4);
      last = +new Date();
      if (-element.style.opacity <= 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }

    };
    tick();
    //element.style.display = 'none';
  }

  fadeOut(document.getElementById("load-pag"), 500);
  setTimeout(function () {
    document.getElementById("load-pag").style.display = 'none';
  }, 500);

  document.getElementById("load-pag").addEventListener("click", function () {
    fadeOut(document.getElementById("load-pag"), 500);
    setTimeout(function () {
      document.getElementById("load-pag").style.display = 'none';
    }, 500);
  })
});
document.addEventListener('DOMContentLoaded', () => {
  webSiteData = {
    name: 'Ngo Soufei',
    nameMarquet: 'Ngo <b>Soufei</b>',
    nameMarquetMin: '<b>Soufei</b>',
    author: 'Ngo Soufei',
    dev: 'Leonardo Cahuich',
    pesoApp: '885 kb',
    path : 'https://serveuno.ngosoufei.com',
  }
  function paostGithub() {
    function getFiles(username, repo, archive) {
      let jsonDataTop;
      const request = new XMLHttpRequest();
      request.open('GET', `https://api.github.com/repos/${username}/${repo}/contents/${archive}`, true);
      request.onload = function () {
        if (request.status === 200) {
          const jsonData = JSON.parse(request.responseText);
          localStorage.setItem('PostList', request.responseText);
        }
      };
      request.send();
      return jsonDataTop;

    }
    getFiles("LeonardoCahuichMX", "ngosoufei-post", "post/series");
    return JSON.parse(localStorage.getItem('PostList'));
  }
  const postArticle = paostGithub();
  console.log("Articles", postArticle);
  //Cuerpo

  function carpeta() {
    /*const xhr = new XMLHttpRequest();
    xhr.open('GET', '/soufei-com//post/', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const files = xhr.responseText.split('\n');
        console.log(files);
      }
    };
    xhr.send();*/
    /*fetch('/soufei-com//post/')
  .then(response => response.text())
  .then(files => console.log(files));*/
  }
  carpeta();
  function switchLightToDark(theme) {
    let themePag = document.getElementById("theme-pag");
    switch (theme) {
      case 'light':
        themePag.setAttribute("href", "../cahuich-css/base/bluids/light.css")
        console.log("Tema:", theme)
        break;
      case 'dark':
        themePag.setAttribute("href", "../cahuich-css/base/bluids/dark.css")
        console.log("Tema:", theme)
        break;

      default:
        themePag.setAttribute("href", "../cahuich-css/base/bluids/light.css")
        console.log("Tema por defecto:", theme)
        break;
    }
  }

  function header() {
    const header = `
        <header id="nav">
            <div class="titulo">
                <a id="titulo-no-scroll" href="#home">
                    ${webSiteData.nameMarquet}
                </a>
                <a id="titulo-scroll" href="#home">
                    ${webSiteData.nameMarquetMin}
                </a>
            </div>
            <ul class="left">
            <li><a href="#exposiciones">Exposiciones</a></li>
            <li><a href="#series">Series</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#acividad">Actividad</a></li>
            <!--<li><a id="btn paginaUno" href="#uso">Uso</a></li>-->
            </ul>
            <ul class="right">
            <!--<li><a id="external-link" href="https://github.com/LeonardoCahuichMX/cahuich.css">
                <svg style="margin-right: 5px;align-content: center;margin-top: -2px" width="25" height="25"
                    viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>github</title>
                    <g>
                    <path
                        d="M12.0000994,0.296208061 C5.37349618,0.296208061 0,5.66871064 0,12.2963074 C0,17.5982657 3.43839372,22.0964151 8.20640035,23.6831673 C8.80612709,23.7942498 9.02630512,23.4228485 9.02630512,23.1058956 C9.02630512,22.8197436 9.01517698,21.8744486 9.01001035,20.8717245 C5.67157111,21.5976364 4.96712069,19.4558685 4.96712069,19.4558685 C4.42124609,18.0688266 3.63472575,17.7000085 3.63472575,17.7000085 C2.54595736,16.9552186 3.71679568,16.9705197 3.71679568,16.9705197 C4.9218133,17.0551731 5.55631547,18.2071334 5.55631547,18.2071334 C6.6266032,20.0416852 8.36358518,19.5113105 9.04836267,19.2046908 C9.15606708,18.4290998 9.46705865,17.8997187 9.81024216,17.600054 C7.14485616,17.2966137 4.34295178,16.2676591 4.34295178,11.6695551 C4.34295178,10.3594164 4.81172426,9.28893008 5.5793666,8.44855747 C5.45477126,8.14630949 5.04402403,6.925792 5.69561582,5.27286715 C5.69561582,5.27286715 6.70330783,4.95035006 8.99649761,6.50292302 C9.95371571,6.23704018 10.9802857,6.10370133 12.0000994,6.09913086 C13.0199131,6.10370133 14.047278,6.23704018 15.0062843,6.50292302 C17.2966922,4.95035006 18.302993,5.27286715 18.302993,5.27286715 C18.9561747,6.925792 18.5452287,8.14630949 18.4206334,8.44855747 C19.1900642,9.28893008 19.6556571,10.3594164 19.6556571,11.6695551 C19.6556571,16.2785885 16.8483875,17.2934344 14.1762451,17.5905157 C14.6066653,17.9629107 14.9901884,18.6931941 14.9901884,19.8127637 C14.9901884,21.418394 14.9762783,22.7106482 14.9762783,23.1058956 C14.9762783,23.4252331 15.1922831,23.7994165 15.8005547,23.6815776 C20.565978,22.0930369 24,17.5964772 24,12.2963074 C24,5.66871064 18.6272988,0.296208061 12.0000994,0.296208061 Z M4.49442743,17.390603 C4.46799811,17.4502179 4.37420386,17.4681024 4.28875572,17.4271669 C4.20171783,17.3880196 4.15283356,17.3067445 4.18105132,17.2469309 C4.20688448,17.1855273 4.30087743,17.1684377 4.38771659,17.2095721 C4.47495321,17.2487192 4.52463236,17.3307892 4.49442743,17.390603 Z M5.08469899,17.9172944 C5.02746861,17.9703518 4.91559116,17.9457109 4.83968139,17.8618525 C4.76118832,17.7781928 4.74648331,17.6663153 4.80450855,17.6124631 C4.86352738,17.5594058 4.97202668,17.5842453 5.05071845,17.6679051 C5.12921149,17.7525583 5.14451268,17.8636409 5.08469899,17.9172944 Z M5.48964763,18.5911781 C5.41612249,18.6422484 5.29589893,18.5943576 5.22157891,18.4876468 C5.14805375,18.3809359 5.14805375,18.2529624 5.22316865,18.2016936 C5.29768736,18.1504246 5.41612249,18.196527 5.49143607,18.3024429 C5.56476252,18.4109421 5.56476252,18.5389156 5.48964763,18.5911781 Z M6.17450243,19.3716306 C6.10872723,19.4441624 5.96863203,19.4246881 5.86609423,19.3257272 C5.76117187,19.2289521 5.73196052,19.091639 5.79793444,19.0191074 C5.8645045,18.9463771 6.00539458,18.966845 6.10872723,19.065011 C6.21285475,19.1615873 6.2446494,19.2998941 6.17450243,19.3716306 Z M7.05961079,19.6351026 C7.03059819,19.7290957 6.89566959,19.7718197 6.75974741,19.7318777 C6.62402397,19.6907433 6.53519763,19.5806544 6.56262053,19.4856678 C6.59083828,19.3910788 6.72636301,19.3465662 6.86327877,19.3892902 C6.99880351,19.4302258 7.08782857,19.53952 7.05961079,19.6351026 Z M8.06690128,19.7468606 C8.07027944,19.8458214 7.95502379,19.9278914 7.81234527,19.9296799 C7.66887188,19.9328594 7.55282137,19.8527766 7.55123163,19.7554054 C7.55123163,19.655451 7.66390395,19.5741759 7.80737735,19.5717913 C7.9500559,19.5690092 8.06690128,19.6484958 8.06690128,19.7468606 Z M9.05645129,19.708929 C9.07354093,19.8055053 8.97438132,19.9046648 8.83269637,19.9310942 C8.69339603,19.9565298 8.56442893,19.8969149 8.54674316,19.8011335 C8.52945483,19.7021726 8.63040287,19.6030131 8.7695045,19.5773787 C8.91138816,19.5527378 9.03836809,19.610763 9.05645129,19.708929 Z"
                        fill="currentColor"></path>
                    </g>
                </svg>
                Github</a></li>
            <li><a id="btn-theme" style="font-size: 200%;transform: translateY(100px);">☼</a></li>-->
            <li><a id="external-link" href="">Instagram</a></li>
            <li><a id="external-link" href="">Blog</a></li>
            <li id="menu"><a>☰</a></li>
            </ul>
        </header>
        `;
    document.body.innerHTML += header;
  }

  function footer() {
    const footer = `
        <footer class="footerDos">
            <div class="contenedor">
            <div class="caja">Contacto y<br>Equipo</div>
            <div class="caja"><b>Diseño/desarrollo</b>: ${webSiteData.dev}</div>
            <div class="caja">Terminos de uso, privacidad y cookies</div>
            <div class="caja" id="copyright">
                <b>${webSiteData.author} © 2024</b>
            </div>
            </div>
        </footer>
        `;
    document.body.innerHTML += footer;
  }

  function observadorUnico(id, classCSS) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add(classCSS);
        observer.unobserve(entry.target);
      })
    })
    document.querySelectorAll(id).forEach(e => {
      observer.observe(e)
    });
  };

  function observadorUnicoSimple(id, classCSS) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.filter(e => e.isIntersecting).forEach(entry => {
        entry.target.classList.add(classCSS);
        observer.unobserve(entry.target);
      })
    })
    id.forEach(e => {
      observer.observe(e)
    });
  };

  function observadorMultiple(id, classCSS) {
    //const img = document.querySelector(id)
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classCSS)
        } else {
          entry.target.classList.remove(classCSS)
        }
      })
    }
    const options = {
      root: null,
      rootMargin: "0px",
      //threshold: 0.5,
    }
    const myObserver = new IntersectionObserver(callback, options)
    myObserver.observe(id)
  }

  function animacionObserveAutomaticUnico() {
    document.querySelectorAll("*").forEach((elemento) => {
      const animation = elemento.getAttribute("data-aba-unico");
      if (animation) {
        //alert(elemento.classList)
        let element = document.elemento;
        observadorUnicoSimple(elemento, elemento.getAttribute("data-aba"));
      }
      //alert(elemento.getAttribute("id")+elemento.getAttribute("data-aba"))

      //observadorMultiple(elemento.getAttribute("class"), elemento.getAttribute("data-aba"));
    });
  }

  function animacionObserveAutomatic() {
    document.querySelectorAll("*").forEach((elemento) => {
      const animation = elemento.getAttribute("data-aba");
      if (animation) {
        //alert(elemento.classList)
        let element = document.elemento;
        observadorMultiple(elemento, elemento.getAttribute("data-aba"));
      }
      //alert(elemento.getAttribute("id")+elemento.getAttribute("data-aba"))

      //observadorMultiple(elemento.getAttribute("class"), elemento.getAttribute("data-aba"));
    });
  }

  //animacionScroll("p-1", "texto-line")


  //history.pushState(null, "", "mengano.html");
  //history.replaceState(null, "", "nueva_url");
  //history.replaceState({ name: "Example" }, "", "page3.html");
  //window.location.reload(false);

  /*history.pushState(null, "pato", "pollo");
  window.addEventListener('reload', (e) => {
      e.preventDefault();
  });*/
  //window.onbeforeunload = function(e) {
  //  history.replaceState(null, "", "");
  //e.preventDefault();
  //return "¿Desea recargar la página web?";
  //};

  /*window.addEventListener('beforeunload', function(event) {
      event.preventDefault();
      event.returnValue = "hola";
    });*/
  /*window.open('popup.html', '_blank');
window.close();*/

  //postLista();

  function animationOnAllTitle() {//data-aba="texto-line"
    document.querySelectorAll(".titulo").forEach((elemento) => {
      elemento.setAttribute("data-aba", "texto-rotate");
    });
  }

  function animationOnAllSubTitle() {//data-aba="texto-line"
    document.querySelectorAll(".sub-titulo, .sub-zh-titulo, .contenido").forEach((elemento) => {
      elemento.setAttribute("data-aba-unico", "opacity-animation");
    });
  }

  function animationOnAllContenido() {//data-aba="texto-line"
    document.querySelectorAll(".contenido").forEach((elemento) => {
      elemento.setAttribute("data-aba-unico", "opacity-contenido");
    });
  }

  function animationOnIMG() {//data-aba="texto-line"
    document.querySelectorAll("img").forEach((elemento) => {
      elemento.setAttribute("data-aba", "img-animation");
    });
  }

  function initAnimation() {
    animationOnAllTitle()
    /*animationOnAllSubTitle()
    animationOnAllContenido()*/
    animationOnIMG()
  }


  let himnoURL = window.location.hash.replace('#', '');

  let pagesFunctions = {
    home: {
      name: 'home',
      version: '0.1',
      funcionapp: function (option) {
        if (option === 1) {
          document.getElementById("app").innerHTML = localStorage.getItem("homaContent");
        } else if (option === 0) {
          localStorage.setItem("homaContent", document.getElementById("app").innerHTML);
        }
      }
    },
    exposiciones: {
      name: 'exposiciones',
      version: '0.1',
      funcionapp: function () {
        const app = document.getElementById("app");
        app.innerHTML = `
          <div class="pagina">
            <section class="expo">
              <div class="titulo">
                Exposiciónes
              </div>
              <div class="contenedor">
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
              </div>
            </section>
          </div>
        `;
      }
    },
    series: {
      name: 'series',
      version: '0.1',
      funcionapp: function () {
        const app = document.getElementById("app");
        const postArticleInverter = postArticle.reverse();

        /*for (let i = 0; i < postArticle.length; i++) {
          console.log(scores[i]);
        }*/
          let contenido = `
          <div class="pagina">
            <section class="expo">
              <div class="titulo">
                Series
              </div>
              <div class="contenedor">
        `;

        for (let prop in postArticleInverter) {
          //console.log(postArticle[prop].name)
          contenido += `
            <div class="caja" onclick="alert("hola")">
                <div class="titulo">
                  <a href="${webSiteData.path}/${postArticleInverter[prop].path}">
                    ${postArticleInverter[prop].name}
                  </a>
                </div>
              </div>
          `;
        }
        contenido += `
          </div>
              </section>
            </div>
        `;
        app.innerHTML = contenido;
    }
  },
    proyectos: {
      name: 'proyectos',
      version: '0.1',
      funcionapp: function () {
        const app = document.getElementById("app");
  app.innerHTML = `
          <div class="pagina">
            <section class="expo">
              <div class="titulo">
                Proyectos
              </div>
              <div class="contenedor">
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
              </div>
            </section>
          </div>
        `;
}
    },
  acividad: {
  name: 'acividad',
  version: '0.1',
  funcionapp: function () {
    const app = document.getElementById("app");
    app.innerHTML = `
          <div class="pagina">
            <section class="expo">
              <div class="titulo">
                Actividad
              </div>
              <div class="contenedor">
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
                <div class="caja">
                  <div class="titulo">
                    Titulo de caja
                  </div>
                </div>
              </div>
            </section>
          </div>
        `;
  }
},
  }

  function pages() {
    pagesFunctions.home.funcionapp(0);
    function urlAppFunction(urlApp) {
      if (urlApp === 'exposiciones') {
        pagesFunctions.exposiciones.funcionapp();
      } else if (urlApp === 'series') {
        pagesFunctions.series.funcionapp();
      } else if (urlApp === 'proyectos') {
        pagesFunctions.proyectos.funcionapp();
      } else if (urlApp === 'acividad') {
        pagesFunctions.acividad.funcionapp();
      } else if (urlApp === 'home') {
        pagesFunctions.home.funcionapp(1);
      }/*else if (urlApp) {
      }*/ else {
        //cargar_home()
        pagesFunctions.home.funcionapp(1);
      }
    }
    urlAppFunction(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', (e) => {
      let urlApp = window.location.hash.replace('#', '');
      urlAppFunction(urlApp);
    }, false);
  };

pages();

//Aqui las funciones con innerHtml
header();
footer();

/*initAnimation()*/

switchLightToDark("light")
btnTop();

//Aqui va el resto de inicio de funciones

//observadorMultiple("#animar", "texto-line")
/*animacionObserveAutomatic();*/
//animacionObserveAutomaticUnico();
//observador();
scroolUpDowm();
anclaAnimation(true, true);
});
