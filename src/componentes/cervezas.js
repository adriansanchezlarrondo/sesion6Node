import { cervezasBD } from "../bd/cervezasBD.js"
import { cerveza } from "./cerveza.js"


export const cervezas = {
    template: //html
    `
    <div id="divCervezas">Aquí va el componente cerveza</div>
    `,
    script: () => {
        console.log('Hola desde el componente cervezas')

        // Recorremos el array con los datos de las birras
        cervezasBD.forEach(element => {
            // Para cada birra agregamos su template
            const div = document.querySelector('div')
            div.innerHTML = cerveza.template
            document.querySelector('#divCervezas').appendChild(div)
            cerveza.script(element.nombre)
        });
        
    }
}