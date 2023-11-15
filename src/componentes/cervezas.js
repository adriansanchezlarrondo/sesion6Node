import { cervezasBD } from "../bd/cervezasBD.js"
import { cerveza } from "./cerveza.js"


export const cervezas = {
    template: //html
    `
    <div id="divCervezas">Aquí va el componente cerveza</div>
    `,
    script: () => {
        console.log('Hola desde el componente cervezas')

        let html = ''

        // Recorremos el array con los datos de las birras
        cervezasBD.forEach(element => {
            html += cerveza(element.nombre)
        });
        
        document.querySelector('#divCervezas').innerHTML = html
    }
}