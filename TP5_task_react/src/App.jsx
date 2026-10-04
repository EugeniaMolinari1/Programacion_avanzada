import { useEffect, useState } from 'react'
import './App.css'
import ListadoTareas from './components/ListadoTareas'

function App() {
  const [tarea, setTarea] = useState({
    nombreProyecto: '',
    tipoActividad: '',
    estado: '',
    resumen: '',
    descripcion: '',
    prioridad: '',
    informador: '',
    personaAsignada: '',
    precondicion: '',
    fechaCreacion: '',
    fechaCierre: '',
    sprint: '',
  })

  const [tareas, setTareas] = useState([])
  useEffect(() => {
    const obtenerTareas = async () => {
      const respuesta = await fetch('http://localhost:3000/tareas')
      const datos = await respuesta.json()

      setTareas(datos)
    }

    obtenerTareas()
  }, [])

  const [idEditando, setIdEditando] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    setTarea({
      ...tarea,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (idEditando !== null) {
      const respuesta = await fetch(
        `http://localhost:3000/tareas/${idEditando}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tarea),
        }
      )

      const tareaActualizada = await respuesta.json()

      setTareas(
        tareas.map((item) =>
          item.id === idEditando ? tareaActualizada : item
        )
      )

      setIdEditando(null)
    } else {
      const respuesta = await fetch('http://localhost:3000/tareas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tarea),
      })

      const nuevaTarea = await respuesta.json()

      setTareas([...tareas, nuevaTarea])
    }

    setTarea({
      nombreProyecto: '',
      tipoActividad: '',
      estado: '',
      resumen: '',
      descripcion: '',
      prioridad: '',
      informador: '',
      personaAsignada: '',
      precondicion: '',
      fechaCreacion: '',
      fechaCierre: '',
      sprint: '',
    })
  }

  const eliminarTarea = async (id) => {
    await fetch(`http://localhost:3000/tareas/${id}`, {
      method: 'DELETE',
    })

    setTareas(
      tareas.filter((item) => item.id !== id)
    )
  }

  const finalizarTarea = async (id) => { //El problema era que alguna extensión del navegador normal está modificando el DOM que controla React.
    const respuesta = await fetch(
      `http://localhost:3000/tareas/${id}/finalizar`,
      {
        method: 'PUT',
      }
    )

    const tareaFinalizada = await respuesta.json()

    setTareas(
      tareas.map((item) =>
        item.id === id ? tareaFinalizada : item
      )
    )
  }

  const editarTarea = (item) => {
    setTarea(item)
    setIdEditando(item.id)
  }


  return (
    <main>
      <h1>Manejador de Tareas</h1>

      <div className="contenedor">

        <section className="panel">
          <h2>Nueva Tarea</h2>

          <form onSubmit={handleSubmit}>

            <label>
              Nombre del Proyecto
              <input
                type="text"
                name="nombreProyecto"
                value={tarea.nombreProyecto}
                onChange={handleChange}
              />
            </label>

            <label>
              Tipo de Actividad
              <input
                type="text"
                name="tipoActividad"
                value={tarea.tipoActividad}
                onChange={handleChange}
              />
            </label>

            <label>
              Estado
              <input
                type="text"
                name="estado"
                value={tarea.estado}
                onChange={handleChange}
              />
            </label>

            <label>
              Resumen
              <input
                type="text"
                name="resumen"
                value={tarea.resumen}
                onChange={handleChange}
              />
            </label>

            <label>
              Descripción
              <textarea
                name="descripcion"
                value={tarea.descripcion}
                onChange={handleChange}
              />
            </label>

            <label>
              Prioridad
              <input
                type="text"
                name="prioridad"
                value={tarea.prioridad}
                onChange={handleChange}
              />
            </label>

            <label>
              Informador
              <input
                type="text"
                name="informador"
                value={tarea.informador}
                onChange={handleChange}
              />
            </label>

            <label>
              Persona asignada
              <input
                type="text"
                name="personaAsignada"
                value={tarea.personaAsignada}
                onChange={handleChange}
              />
            </label>

            <label>
              Precondición
              <input
                type="text"
                name="precondicion"
                value={tarea.precondicion}
                onChange={handleChange}
              />
            </label>

            <label>
              Fecha de Creación
              <input
                type="date"
                name="fechaCreacion"
                value={tarea.fechaCreacion}
                onChange={handleChange}
              />
            </label>

            <label>
              Fecha de Cierre
              <input
                type="date"
                name="fechaCierre"
                value={tarea.fechaCierre}
                onChange={handleChange}
              />
            </label>

            <label>
              Sprint
              <input
                type="text"
                name="sprint"
                value={tarea.sprint}
                onChange={handleChange}
              />
            </label>

            <button type="submit">
              {idEditando !== null ? 'Guardar cambios' : 'Crear tarea'}
            </button>

          </form>
        </section>

        <ListadoTareas
          tareas={tareas}
          editarTarea={editarTarea}
          finalizarTarea={finalizarTarea}
          eliminarTarea={eliminarTarea}
        />

      </div>
    </main>
  )
}

export default App