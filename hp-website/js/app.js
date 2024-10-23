//import { accsesibilidad } from "./accsesibilidad";

function accsesibilidad() {
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
}
accsesibilidad();