import { cervezasBD } from '../bd/cervezasBD.js'

export const consoleCervezas = (cervezasBD) => {
  cervezasBD.forEach(element => {
    console.log('Nombre: ', element.nombre)
    console.log('Grado: ', element.gradoAlcoholico)
    console.log('Tipo: ', element.tipo)
  })
}
