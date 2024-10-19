/* Permite que el scroll en la anclas sea smoth */

/* Codigo obtenido de:
-https://search.brave.com/search?q=odtener+posicion+de+un+elemento+js+vanilla&source=web&summary=1&summary_og=91da945cede2bc2483cf1d
*/
export function getAbsoluteElementPosition(element) {
    if (typeof element == "string")
      element = document.getElementById(element);
  
    if (!element) return { top: 0, left: 0 };
  
    var y = 0;
    var x = 0;
    while (element.offsetParent) {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    }
    return { top: y, left: x };
  }
export function anclaAnimation(hashurl, debug) {
    var elementos = document.querySelectorAll('a');
    if(debug===true) {
        console.log(elementos);
    }
    // Agregar un listener de eventos de clic a cada elemento
    elementos.forEach(function(elemento) {
        elemento.addEventListener('click', function(evento) {
            // Aquí se ejecutará el código cuando se da clic en cualquier elemento
            if(debug===true) {
                console.log('Se ha dado clic en el elemento:', elemento['hash'].replace('#', ''));
            }
            // Detecta si hay hash
            if(elemento['hash'] !== "") {
                event.preventDefault()
                // Quita # del hash
                const aHashId = elemento['hash'].replace('#', '');
                if(debug===true) {
                    console.log(getAbsoluteElementPosition(aHashId).top);
                }
                let start = Date.now();
                if(window.scrollY < getAbsoluteElementPosition(aHashId).top) {
                    /* Codigo obtenido de 
                        - https://es.javascript.info/js-animation
                        */
                    let timer = setInterval(function() {
                        let timePassed = Date.now() - start;
                        if(debug===true) {
                            console.log('Srcoll', timePassed, 'WS:', window.scrollY)
                        }
                        scroll(0, window.scrollY + 50)

                        if (window.scrollY >= getAbsoluteElementPosition(aHashId).top) {
                            clearInterval(timer)
                            if(hashurl === true) {
                                window.location.hash = elemento['hash'];
                            }
                        }

                    }, 10);
                } else {
                    let timer = setInterval(function() {
                        let timePassed = Date.now() - start;
                        if(debug===true) {
                            console.log('Srcoll', timePassed, 'WS:', window.scrollY)
                        }
                        scroll(0, window.scrollY - 50)

                        if (window.scrollY <= getAbsoluteElementPosition(aHashId).top) {
                            clearInterval(timer)
                            if(hashurl === true) {
                                window.location.hash = elemento['hash'];
                            }
                        }

                    }, 10);
                }

            }
        });
    });
}

/* Referencias:
-https://search.brave.com/search?q=odtener+host+de+pagina+con+js&source=desktop&summary=1&summary_og=0aae67ffe468e3fad5d753
-https://search.brave.com/search?q=odtener+scroll+actual&source=desktop
-https://search.brave.com/search?q=animar+un+evento+con+js+vanilla&source=web&summary=1&summary_og=62e23fa63c238266b97a0a
-https://search.brave.com/search?q=animar+un+scroll+con+js+vanilla&source=web&summary=1&summary_og=b767d747d55dab1b5abd43
-https://es.javascript.info/js-animation
-https://search.brave.com/search?q=animar+un+evento+con+js+vanilla&source=web&summary=1&summary_og=62e23fa63c238266b97a0a
-https://search.brave.com/search?q=event.preventdefault%28%29+deprecated&source=desktop&summary=1&summary_og=185105e17f6e98ed16ea59
-https://search.brave.com/search?q=remplazar+texto+con+js&source=desktop&summary=1&summary_og=ef3ef02b09426b92a51e5c
-https://search.brave.com/search?q=mostrar+elementos+de+un+objeto+js&spellcheck=0&source=alteredQuery&summary=1&summary_og=913aac04a69277e5a8db02

-https://search.brave.com/search?q=hacer+que+algo+ocurra+cuando+da+click+a+cualquier+elemento+a&source=web&summary=1&summary_og=334ab594220fc9bba9b26f

-https://search.brave.com/search?q=odtener+posicion+de+un+elemento+js+vanilla&source=web&summary=1&summary_og=91da945cede2bc2483cf1d
*/