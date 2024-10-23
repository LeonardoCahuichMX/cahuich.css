//import { accsesibilidad } from "./accsesibilidad";
import {anclaAnimation} from '../../js/modulos/eventoANewNew.js';
import { scroolUpDowm } from '../../js/modulos/scroolUpDowm.js';
import {btnTop} from '../../js/modulos/btnTopDiv.js';

document.addEventListener('DOMContentLoaded', () => {

    /*function accsesibilidad() {
        //alert("hola")
        const accesibilidadDiv = `
        <div class="accesibilidad-btn">
            <div class="accesibilidad-caja">
                <ul>
                    <li>Guia de lectura</li>
                    <li>Guia de lectura</li>
                    <li>Guia de lectura</li>
                    <li>Guia de lectura</li>
                    <li>Guia de lectura</li>
                </ul>
            </div>
        </div>
        `;
        document.body.innerHTML += accesibilidadDiv;
    };
    accsesibilidad();*/
    
    btnTop();

    scroolUpDowm();
    anclaAnimation(true, true);
});