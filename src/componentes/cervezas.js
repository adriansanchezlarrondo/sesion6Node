import { cervezasBD } from "../bd/cervezasBD.js"
import { cerveza } from "./cerveza.js"


export const cervezas = {
    template: //html
    `
    <div id="cerveza">Aquí va el componente cerveza</div>
    `,
    script: () => {
        console.log('Hola desde el componente cervezas')
        // Creamos variable vacía para meter todas las cervezas
        const html = ''
        // Recorremos el array con los datos de las birras
        cervezasBD.forEach(element => {
            // Para cada birra agregamos su template
            document.querySelector('#cerveza').appendChild(cerveza.template)
            cerveza.script(element.nombre)
        });
        
    }
}