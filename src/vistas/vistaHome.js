import { cervezasBD } from "../bd/cervezasBD.js"

export const cerveza = {
    template: 
    `
    <div id="card" style="width: 400px; padding:10px; margin:20px; border: 1px solid black;"></div>
    `,
    script: (nombreCerveza) => {
        const tarjeta = 
        `
        <div class="card-body">
            <h5 class="card-title">${nombreCerveza}</h5>
        </div>
        `
        document.querySelector('#card').innerHTML = tarjeta
    }
}