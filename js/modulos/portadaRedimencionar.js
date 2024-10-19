export function portadaRedimencionar() {
    const elemento = document.getElementById('nav');
    const ancho = elemento.clientWidth;
    const alto = elemento.clientHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;//window.outerHeight

    const screenWidth = screen.width;
    const screenHeight = screen.height;

    document.getElementById('header').style.paddingTop = alto+'px';
    //document.getElementById('header').style.height = viewportHeight - alto +'px';
    //alert(window.viewportHeight)
}