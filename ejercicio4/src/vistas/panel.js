import { tickets } from "../bd/tickets"
import { login } from "./login"

export const panel = {
    template: // html
    `
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="ticketsPendientes">
      </tbody>
    </table>

    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      <tbody id="ticketsResueltos">
      </tbody>
    </table>
    `,
    script: () => {
      document.querySelector('#login').classList.add('d-none')
      document.querySelector('#registro').classList.add('d-none')
      document.querySelector('#cierreSesion').classList.remove('d-none')

      let ticketsPendientes = document.querySelector('#ticketsPendientes')
      let ticketsResueltos = document.querySelector('#ticketsResueltos')
      
      let tablaPendiente = ''
      let tablaResuelto = ''

      tickets.forEach(item =>{
        if(item.status == 0){
          tablaPendiente += `
          <tr>
            <td>${item.codigo}</td>
            <td>${item.fecha}</td>
            <td>${item.aula}</td>
            <td>${item.grupo}</td>
            <td>${item.ordenador}</td>
            <td>${item.descripcion}</td>
            <td>${item.alumno}</td>
            <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            </button>
            </td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>
          </tr>
          `
        } else {
          tablaResuelto += `
          <tr>
            <td>${item.codigo}</td>
            <td>${item.fecha}</td>
            <td>${item.fecha_resuelto}</td>
            <td>${item.aula}</td>
            <td>${item.grupo}</td>
            <td>${item.ordenador}</td>
            <td>${item.descripcion}</td>
            <td>${item.alumno}</td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
            </button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
            </i>
            </button></td>
          </tr>
          `
        }
      })

      if(tablaPendiente != ''){
        ticketsPendientes.innerHTML += tablaPendiente
      }
      
      if(tablaResuelto != ''){
        ticketsResueltos.innerHTML += tablaResuelto
      }
      
      document.querySelector('#cierreSesion').addEventListener('click' , (event) =>{
        event.preventDefault()        

        let usuariosGuardados = localStorage.getItem("usuarios")
        usuariosGuardados = JSON.parse(usuariosGuardados)

        for(let i=0 ; i < usuariosGuardados.length ; i++){
          if(document.querySelector('#correo').innerHTML == usuariosGuardados[i].mail){
            usuariosGuardados[i].isLogin = 0
            localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados))
          }
        }

        document.querySelector('main').innerHTML = login.template
        login.script()
        document.querySelector('#correo').innerHTML = ''
        document.querySelector('#cierreSesion').classList.add('d-none')
        document.querySelector('#login').classList.remove('d-none')
        document.querySelector('#registro').classList.remove('d-none')
      })
    }
}