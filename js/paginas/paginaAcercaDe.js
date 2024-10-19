export function paginaAcercaDe() {
    let paginaAcercaDe = `
    <h1><b>¿Por que ${webSiteData.nameMarquet}?</b></h1>
  <p>Cahuich.css es una pequeña framework de base que me sirve para mis proyectos, para agilisar estos, agilizar en
    los primeros pasos de este en lo correspondiente e los estilos y animaciones en forntend.
  </p>
  <h2>Inicio y futuro de ${webSiteData.nameMarquet}</h2>
  <p>Cahuich.css al inicio usara como base <b>water.css</b> quitandole todos los estilos de color hasta dejandola en escala de grises
  quitando margenes, y contra margenes innecesarios, despues se le iran agregando las actualizaciones correspondientes a los
  nuevos estandares csss, para despues dejar eso como una base y lanzar partes obtables.</p>`;
    document.getElementById("paginaAcercaDe").innerHTML += paginaAcercaDe;
}