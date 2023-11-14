export const header = {
    template:
    `
    <p>Esto es el header</p>
    <p id="user">...</p>
    `,
    script: () => {
        document.querySelector('#user').innerHTML = 'usuario@gmail.com'
    }
}