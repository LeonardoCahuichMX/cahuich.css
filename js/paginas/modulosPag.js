export function pagModulos() {
    let pagModulos = `
    <div class="demo-new" id="modulos-pag">
    <div class="titulo">
      <h1>Modulos</h1>
    </div>
    <h2 style="margin: 20px;">JavaScript Puro</h2>
    <div class="contenido">
      <div class="car" onclick="window.location.href='./js/modulos/eventoANewNew.js'" style="height: auto;">
        <div class="titulo"><h3>Ancla Scroll</h3></div>
        <div class="contenido">
          <p>Anima el desplazamiento hacia las anclas, con dos opcionalizades (hash en url, debug).</p>
            <code>
              anclaAnimation(true, false)
            </code>
          <p><a href="./js/modulos/eventoANewNew.js">Usar</a></p>
          <h6>JavaScript Vanilla - <a href="https://github.com/LeonardoCahuichMX/cahuich.css/blob/daec117335df894e7685493bfe2813fc953e7982/LICENSE">Mit License</a></h6>
        </div>
      </div>
    </div>
  </div>`;
    document.getElementById("paginaModulos").innerHTML += pagModulos;
}