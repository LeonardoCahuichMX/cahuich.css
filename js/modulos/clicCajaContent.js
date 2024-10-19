/* Muestra el cuadro de descripcion en demo*/

export function clicCajaContent(idClic, idCaja) {

        let checker = false;
        const element = document.getElementById(idClic);
        const elementTwo = document.getElementById(idCaja);

        element.addEventListener('mouseover', function() {
            document.getElementById(idClic).addEventListener('click', () => {
                document.getElementById(idCaja).style.display = "block";
            })
        });
          
        elementTwo.addEventListener('mouseleave', function() {
            document.getElementById(idCaja).style.display = "none";
        });
    }