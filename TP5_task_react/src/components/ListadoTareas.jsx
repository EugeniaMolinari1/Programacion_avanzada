function ListadoTareas({
    tareas,
    editarTarea,
    finalizarTarea,
    eliminarTarea,
}) {
    const formatearFecha = (fecha) => {
        if (!fecha) return ''

        return fecha.split('T')[0]
    }
    return (
        <section className="panel">
            <h2>Listado de Tareas</h2>

            {tareas.length === 0 ? (
                <p>No hay tareas cargadas.</p>
            ) : (
                tareas.map((item) => (
                    <div className="tarea" key={item.id}>
                        <h3>{item.nombreProyecto}</h3>

                        <p><strong>Tipo de Actividad:</strong> {item.tipoActividad}</p>
                        <p><strong>Estado:</strong> {item.estado}</p>
                        <p><strong>Resumen:</strong> {item.resumen}</p>
                        <p><strong>Descripción:</strong> {item.descripcion}</p>
                        <p><strong>Prioridad:</strong> {item.prioridad}</p>
                        <p><strong>Informador:</strong> {item.informador}</p>
                        <p><strong>Persona asignada:</strong> {item.personaAsignada}</p>
                        <p><strong>Precondición:</strong> {item.precondicion}</p>
                        <p><strong>Fecha de Creación:</strong> {formatearFecha(item.fechaCreacion)}</p>
                        <p><strong>Fecha de Cierre:</strong> {formatearFecha(item.fechaCierre)}</p>
                        <p><strong>Sprint:</strong> {item.sprint}</p>

                        <button
                            type="button"
                            onClick={() => editarTarea(item)}
                        >
                            Editar
                        </button>

                        <button
                            type="button"
                            onClick={() => finalizarTarea(item.id)}
                        >
                            Finalizar
                        </button>

                        <button
                            type="button"
                            onClick={() => eliminarTarea(item.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))
            )}
        </section>
    )
}

export default ListadoTareas