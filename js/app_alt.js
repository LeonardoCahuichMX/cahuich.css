function divGenerate(divId, etiqueta, contenido) {
    let divElement=document.getElementById(divId);
    let divElementDiv = document.createElement(etiqueta);
    let divElementContenido = document.createTextNode(contenido);

    divElement.appendChild(divElementDiv);
    divElementDiv.appendChild(divElementContenido);
}
function divAgregar(divId, contenido) {
    let divElement=document.getElementById(divId);
    let divElementContenido = document.createTextNode(contenido);

    divElement.appendChild(divElementContenido);
}
function codeAgregate(divId, contenido) {
    let divElement=document.getElementById(divId);
    let divElementContenido = document.createTextNode(contenido);

    divElement.appendChild(divElementContenido);
}

//alert("1")