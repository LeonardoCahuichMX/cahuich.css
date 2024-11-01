import {anclaAnimation} from './modulos/eventoANewNew.js';
import {scroolUpDowm} from './modulos/scroolUpDowm.js';
import {pagePaginator} from './modulos/pagePaginator.js';
import {clickNavAShowPag} from './modulos/clickNavAShowPag.js';
import {navScroll} from './modulos/functionsscroll.js';
//Paginas
import {paginaGenerar} from './paginas/paginaGenerar.js';
import {home} from './paginas/home.js';
import {paginaDos} from './paginas/paginaDos.js';
import {pagModulos} from './paginas/modulosPag.js';
import {paginaAcercaDe} from './paginas/paginaAcercaDe.js';
import {btnTop} from '../../js/modulos/btnTopDiv.js';

//otro basura
//import {clicCajaContent} from './modulos/clicCajaContent.js';
//import {portadaRedimencionar} from './modulos/portadaRedimencionar.js';

window.addEventListener('load', function () {
    console.info("Pagina cargada");

    let odjetoConPaginas = pagePaginator();

    //Paginas

    paginaGenerar();
    home();
    paginaDos();
    pagModulos();
    paginaAcercaDe();

    /* Arranque de funciones */

    btnTop();

    anclaAnimation(true)/* Para ver datos de debug poner true despues del true hash*/
    clickNavAShowPag();
    scroolUpDowm();

    navScroll();

});