'use strict';

const HelloMessage = () => <div>Hello!</div>;
function PaginaAcercaDeContenido() {
    return (
        <div>
            <h1><b>¿Por que Cahuich.css?</b></h1>
            <p>Cahuich.css es una pequeña framework de base que me sirve para mis proyectos, para agilisar estos, agilizar en
                los primeros pasos de este en lo correspondiente e los estilos y animaciones en forntend.
            </p>
            <h2>Inicio y futuro de Cahuich.css</h2>
            <p>Cahuich.css al inicio usara como base <b>water.css</b> quitandole todos los estilos de color hasta dejandola en escala de grises
            quitando margenes, y contra margenes innecesarios, despues se le iran agregando las actualizaciones correspondientes a los
            nuevos estandares csss, para despues dejar eso como una base y lanzar partes obtables.</p>
        </div>
    )
}

function AcercaDe () {
    return (
        <PaginaAcercaDeContenido />
    )
}


ReactDOM.render(<AcercaDe />, document.getElementById('acercaDe'));
/*import React from 'react';
import ReactDOM from 'react-dom';

function HelloMessage(props) {
    return <div>Hello {props.name}</div>;
}
HelloMessage(props);

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('acercaDe'));*/


//import {paginaAcercaDe} from "./app.js";

/*function paginaAcercaDe() {
    return (
        <h1>hola</h1>
    )
}
  
const getMessage = () => "Hello World";
document.getElementById('acercaDe').innerHTML = paginaAcercaDe();*/

//alert("hola");