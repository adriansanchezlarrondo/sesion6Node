export const cerveza = {
    template: //html
    `
    <div id="cerveza" class="cerveza">Estrella</div>
    `,
    script: (nombreBirra) => {
        console.log('Hola desde el componente cerveza')
        document.querySelector('#cerveza').innerHTML = nombreBirra
    }
}