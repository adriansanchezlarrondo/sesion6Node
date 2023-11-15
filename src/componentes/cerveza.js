export const cerveza = {
    template: //html
    `
    <div class="cerveza">Estrella</div>
    `,
    script: (nombreBirra) => {
        console.log('Hola desde el componente cerveza')
        document.querySelector('.cerveza').innerHTML = nombreBirra
    }
}