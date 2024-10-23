'use strict'
//import { accsesibilidad } from "./accsesibilidad";
import {anclaAnimation} from '../../js/modulos/eventoANewNew.js';
import { scroolUpDowm } from '../../js/modulos/scroolUpDowm.js';
import {btnTop} from '../../js/modulos/btnTopDiv.js';

document.addEventListener('DOMContentLoaded', () => {

    function postLista() {
    }

    //postLista();
    
    btnTop();

    scroolUpDowm();
    anclaAnimation(true, true);
});