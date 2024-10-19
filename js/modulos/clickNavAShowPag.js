export function clickNavAShowPag() {
    const elementosConClase = document.querySelectorAll('.btn-nav');

    elementosConClase.forEach((elemento) => {
        elemento.addEventListener('click', () => {
            console.log('Se ha hecho clic en un elemento con la clase "mi-clase"');
            // Aquí puedes acceder al ID del elemento utilizando el método `getAttribute` o `dataset`
            const idElemento = elemento.getAttribute('id');
            const himnoId = elemento.getAttribute('data-himno');
            const namePag = elemento.getAttribute('name');
            console.log(`ID del elemento: ${idElemento}`);

            document.getElementById(namePag).style.display = "block";

            let elements = document.getElementsByClassName("btn-nav")
            //console.log(elements);
            for(let prop in elements) {
                if(elements[prop]['name'] !== undefined && elements[prop]['id'] !== undefined && elements[prop]['name'] !== namePag) {
                    //console.log(prop, elements[prop]['name'], elements[prop]['id']);
                    document.getElementById(elements[prop]['name']).style.display = "none";

                    document.body.setAttribute("data-pagePaginatorVisible", namePag)
                }
            }
        });
    });
}

//document.body.setAttribute("data-himno-visible", elements[prop]['dataset']["himno"])