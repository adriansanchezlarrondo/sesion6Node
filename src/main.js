import { cervezasBD } from './bd/cervezasBD.js'
import { header } from './componentes/header.js'
import { cerveza } from './vistas/vistaHome.js'
import { consoleCervezas } from './misFunciones/consoleCervezas.js'

consoleCervezas(cervezasBD)

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = cerveza.template
cerveza.script()