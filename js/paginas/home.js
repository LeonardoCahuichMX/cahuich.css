export function home() {
    let pagHome = `
    <header class="header-2">
      <div class="coleccion">
        <div class="caja caja-1">Classless</div>
        <div class="caja caja-2">Modular</div>
        <div class="caja caja-3">Minimal</div>
        <div class="caja caja-4">Actualizacida</div>
      </div>
      <div class="titulo">Colección CSS & JS</div>
      <div class="botones">
        <button type="button" class="btn-nav button button-color-two" id="btn-nav-6" name="pagina-generar">Empezar</button>
        <button type="button" onclick="window.location.href='https://github.com/LeonardoCahuichMX/cahuich.css'">Github</button>
      </div>
    </header>
  <nav id="nav-pag">
    <ul class="left">
      <li><a href="#presentacion">Presentación</a></li>
      <li><a href="#color-neutro">Colores neutros</a></li>
      <li><a href="#caracteristicas">Caracteristicas</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#poweredby">Powered By</a></li>
    </ul>
    <ul class="right">
      <li><a href="#inicio-pag">Arriba</a></li>
    </ul>
  </nav>
  <div class="presentacion" id="presentacion">
    <div class="titulo">
      <div class="titulo"><span class="principal">Ponlo <b>debajo</b> y construye encima tus estilos</span>, solo ten lo que usas.</div>
    </div>
    <div class="ilustracion">
      <div class="dibujo">
        <div class="front">
          Style.css
        </div>
        <div class="cahuich-css-sobre">
          <div class="caja">
            Directo ↑
          </div>
          <div class="caja modulos">
            Modulos
          </div>
        </div>
        <div class="cahuich-css">
          ${webSiteData.nameMarquet}
        </div>
        <div class="base">
          Template-html5 (ej. HTML5 ★ Boilerplate)
        </div>
      </div>
    </div>
  </div>
  <div class="colores-seccion" id="color-neutro">
    <div class="fondo">
      <div class="titulo">
        <div class="titulo">Neutro en los <b>colores</b></div>
        <p>Los colores usado en las bases son a base blanco y negro; en distintas trnasparencias, estos son neutros a tu paleta de colores,
          <strong>resaltan tus colores</strong>.
        </p>
      </div>
      <div class="contenido">
        <div class="escalon">
          <button type="button">Boton</button>
          <button type="button">Boton</button>
        </div>
        <hr>
        <div class="escalon-2">
          <button type="button">Boton</button>
          <button type="button">Boton</button>
        </div>
        <hr>
        <div class="escalon-3">
          <button type="button">Boton</button>
          <button type="button">Boton</button>
        </div>
        <hr>
        <div class="escalon-4">
          <button type="button">Boton</button>
          <button type="button">Boton</button>
          <input disabled="" style="display: inline-block;" name="disabled" id="disabled" placeholder="Because why not?">
        </div>
      </div>
    </div>
  </div>
  <div class="caracteristicas" id="caracteristicas">
    <div class="contenido-especial">
      <div class="car">
        <div class="titulo"><b>Minimo</b></div>
        <div class="contenido">
          <p>Codigo lo mas minimos posible para que tu construyas sobre el el propio estilo de tu proyecto.</p>
        </div>
      </div>
      <div class="car" style="background-color:#41FA98;color: #000;">
        <div class="ilustracion">[  ] [ ] [ ] [ ]<br>[ ] [ ] [ ] [ ]</div>
        <div class="titulo">Modular</div>
        <div class="contenido">
          <p>La base es css, el resto puede instalarlo en modulos, desde dexplazamiento a hash animados, hasta animaciones de secciones.</p>        </div>
      </div>
      <div class="car">
        <div class="ilustracion">&lt;body&gt;<br>&lt;div&gt;</div>
        <div class="titulo"><b>Classless</b></div>
        <div class="contenido">
          <p>Sin clases, solo estilos para las etiquetas de html.</p>
        </div>
      </div>
      <div class="car" style="background-color:burlywood;color: #000;">
        <div class="ilustracion">document.getElementById('id')<br></div>
        <div class="titulo">JavaScript Puro</div>
        <div class="contenido">
          <p>Los modulos estan construidos completamente sin el uso de algun Framework o biblioteca, todo en JavaScript Puro,
            mas rapido, mas eficiente.
          </p>
        </div>
      </div>
    </div>
    <div class="contenido">
      <div class="car">
        <div class="titulo"><h3>Ligero</h3></div>
        <div class="contenido">
          <p>Apenas pesa **** en su versio ****.</p>
        </div>
      </div>
      <div class="car">
        <div class="titulo"><h3>Actualizado</h3></div>
        <div class="contenido">
          <p>CSS se actualiza cada cierto tiempo, entonces estamos atentos a esas nuevas actualizaciónes para
            implementarlas si es el caso.
          </p>
        </div>
      </div>
      <div class="car">
        <div class="titulo"><h3>Actualizado</h3></div>
        <div class="contenido">
          <p>CSS se actualiza cada cierto tiempo, entonces estamos atentos a esas nuevas actualizaciónes para
            implementarlas si es el caso.
          </p>
        </div>
      </div>
      <div class="car">
        <div class="titulo"><h3>Actualizado</h3></div>
        <div class="contenido">
          <p>CSS se actualiza cada cierto tiempo, entonces estamos atentos a esas nuevas actualizaciónes para
            implementarlas si es el caso.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="new-css" id="blog">
    <div class="titulo">
      Cahuich <b>Blog</b>
    </div>
    <div class="contenido">
      <h2 style="margin-top: 0">Un blog con novedades de la coleccion, ademas de cosas extra.</h2>
      <p>Estaremos atentos a las nuevas novedades CSS, para traer esas novedades a este sitio.
      CSS se actualiza cada cierto tiempo, entonces estamos atentos a esas nuevas actualizaciónes para implementarlas si es el caso.
      CSS se actualiza cada cierto tiempo, entonces estamos atentos a esas nuevas actualizaciónes para implementarlas si es el caso.
      CSS se actualiza cada cierto tiempo, entonces estamos atentos a esas nuevas actualizaciónes para implementarlas si es el caso.
      </p>
      <p><a href="">Ir al blog</a></p>
    </div>
  </div>

  <div class="poweredBy" id="poweredby">
    <div class="titulo">
      <b>Dessarrollado con/sobre</b>
    </div>
    <h2 style="font-weight: normal;margin-bottom: 20px;">Base</h2>
    <div class="contenido">
      <div class="caja" onclick="window.location.href='https://html5boilerplate.com/'">
        <div class="titulo">
          <img width="50px" src="./img/poweredBy/icon.svg" alt="Example kitten" />
          <h3>HTML 5 Boilerplate</h3>
        </div>
        <div class="contenido">
          <p>"HTML5 Boilerplate helps you build fast, robust, and adaptable web apps or sites..." - <a href="https://html5boilerplate.com/">html5boilerplate.com</a></p>
          <h5>Use the full code</h5>
        </div>
      </div>
    </div>
    <h2 style="font-weight: normal;margin: 20px 0;">Code parts</h2>
    <div class="contenido">
      <div class="caja" onclick="window.location.href='https://watercss.kognise.dev/'">
        <div class="titulo">
          <img width="50px" src="./img/poweredBy/icon-dark.svg" alt="Example kitten" />
          <h3>Watter.css</h3>
        </div>
        <div class="contenido">
          <p>"Water.css is a drop-in collection of CSS styles to make simple websites like this just a little bit nicer."
             - <a href="https://watercss.kognise.dev/">Water.com</a></p>
            <h5>Use the full code</h5><!--<h5>Use code parts</h5>-->
        </div>
      </div>
      <div class="caja" onclick="window.location.href='http://getskeleton.com/'">
        <div class="titulo"><h3>Sekeleton</h3></div>
        <div class="contenido">
          <p>"A dead simple, responsive boilerplate."
            - <a href="http://getskeleton.com/">Getskeleton.com</a>
          </p>
        </div>
      </div>
      <div class="caja" onclick="window.location.href='https://minstyle.io/'">
        <img width="50px" src="./img/poweredBy/minstyle.png" alt="Example kitten" />
        <div class="titulo"><h3>Minsyle</h3></div>
        <div class="contenido">
          <p>"Simple & light open source CSS framework, including dark mode."
            - <a href="https://minstyle.io/">Minstyle.io</a>
          </p>
        </div>
      </div>
    </div>
    <h2 style="font-weight: normal;margin: 20px 0;">Modulos</h2>
    <div class="contenido">
      <div class="caja" onclick="window.location.href='https://babeljs.io/'">
        <div class="titulo">
          <img width="90px" src="./img/poweredBy/babel.svg" alt="Example kitten" />
          <h3>Babel</h3>
        </div>
        <div class="contenido">
          <p>"Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments."
             - <a href="https://babeljs.io/">babeljs.io</a></p>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById("paginaUno").innerHTML += pagHome;
}