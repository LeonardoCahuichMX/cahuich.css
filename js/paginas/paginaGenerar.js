export function paginaGenerar() {
    let paginaGenerar =  document.getElementById("pagina-generar");
    document.getElementById("pagina-generar").innerHTML += `
    <div class="titulo">
        Comenzar a usar ${webSiteData.nameMarquet}
        </div>
        <div class="contenido">
        <p>Cahuich.css esta disponible un basico classsless (sin clases), pero si desea usar algun modulo JS o CSS, haga la instalacion
        del cahuichcss.js en su pagina y especifique que modulos quiere usar, asi automaticamente estos modulos se instalaran.
        </p>
        <h2>Instalación</h2>
        <details name="instalacion">
        <summary>Base</summary>
        <pre>
            <code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"&gt;</code>
        </pre>
        </details>
        <details name="instalacion">
        <summary>Base y modulos</summary>
        <pre>
            <code>&lt;script type="modular" data-cahuich-domulos="" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"&gt;&lt;/script&gt;</code>
        </pre>
        <p>En el atributo "data-cahuich-domulos" ingresa el nombre de los modulos que quieres usar,
            estos separados por ','.
        </p>
        </details>
    </div>`;
}