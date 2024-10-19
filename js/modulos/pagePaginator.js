'use strict'
export function pagePaginator() {
    let elements = document.getElementsByClassName("pagina")
        console.log(elements);
        let odjetoConPaginas = {};
        for(let prop in elements) {
            if(elements[prop]['id'] !== undefined) {
                if(prop === '0') {
                    document.body.setAttribute("data-pagePaginatorHome", elements[prop]['id'])
                }
                console.log(prop, 'Pagina-detectada', elements[prop]['id']);
                //document.getElementById(elements[prop]['name']).style.display = "none";

                document.getElementById(elements[prop]['id']).setAttribute("data-pagePaginatorName", elements[prop]['id']);
                /*odjetoConPaginas[elements[prop]['id']] = document.getElementById(elements[prop]['id']).innerHTML;
                if(document.body.getAttribute("data-pagePaginatorHome") !== elements[prop]['id']) {
                    document.getElementById(elements[prop]['id']).innerHTML = '';
                }*/
            }
        }
        //let hola document.getElementById
        console.log(odjetoConPaginas);

        return odjetoConPaginas;
}