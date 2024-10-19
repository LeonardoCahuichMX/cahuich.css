export function navScroll () {
    window.addEventListener("scroll", function() {
        var y = window.scrollY;
        /*console.log(y);*/
        if(y > 1) {
            document.getElementById("nav-pag").classList.add('nav-scroll');
        } else if(y < window.innerHeight) {
            document.getElementById("nav-pag").classList.remove('nav-scroll');
        }
    });
}