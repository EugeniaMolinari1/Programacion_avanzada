const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

// Obtener todas las tareas
app.get('/tareas', async (req, res) => {
    try {
        const resultado = await pool.query(
            `SELECT
        id,
        nombre_proyecto AS "nombreProyecto",
        tipo_actividad AS "tipoActividad",
        estado,
        resumen,
        descripcion,
        prioridad,
        informador,
        persona_asignada AS "personaAsignada",
        precondicion,
        fecha_creacion AS "fechaCreacion",
        fecha_cierre AS "fechaCierre",
        sprint
      FROM tareas
      ORDER BY id`
        )

        res.json(resultado.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al obtener las tareas' })
    }
})

// Crear una tarea
app.post('/tareas', async (req, res) => {
    try {
        const {
            nombreProyecto,
            tipoActividad,
            estado,
            resumen,
            descripcion,
            prioridad,
            informador,
            personaAsignada,
            precondicion,
            fechaCreacion,
            fechaCierre,
            sprint,
        } = req.body

        const resultado = await pool.query(
            `INSERT INTO tareas (
        nombre_proyecto,
        tipo_actividad,
        estado,
        resumen,
        descripcion,
        prioridad,
        informador,
        persona_asignada,
        precondicion,
        fecha_creacion,
        fecha_cierre,
        sprint
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NULLIF($10, '')::date, NULLIF($11, '')::date, $12)
      RETURNING
        id,
        nombre_proyecto AS "nombreProyecto",
        tipo_actividad AS "tipoActividad",
        estado,
        resumen,
        descripcion,
        prioridad,
        informador,
        persona_asignada AS "personaAsignada",
        precondicion,
        fecha_creacion AS "fechaCreacion",
        fecha_cierre AS "fechaCierre",
        sprint`,
            [
                nombreProyecto,
                tipoActividad,
                estado,
                resumen,
                descripcion,
                prioridad,
                informador,
                personaAsignada,
                precondicion,
                fechaCreacion,
                fechaCierre,
                sprint,
            ]
        )

        res.status(201).json(resultado.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al crear la tarea' })
    }
})

// Editar una tarea
app.put('/tareas/:id', async (req, res) => {
    try {
        const { id } = req.params

        const {
            nombreProyecto,
            tipoActividad,
            estado,
            resumen,
            descripcion,
            prioridad,
            informador,
            personaAsignada,
            precondicion,
            fechaCreacion,
            fechaCierre,
            sprint,
        } = req.body

        const resultado = await pool.query(
            `UPDATE tareas SET
        nombre_proyecto = $1,
        tipo_actividad = $2,
        estado = $3,
        resumen = $4,
        descripcion = $5,
        prioridad = $6,
        informador = $7,
        persona_asignada = $8,
        precondicion = $9,
        fecha_creacion = NULLIF($10, '')::date,
        fecha_cierre = NULLIF($11, '')::date,
        sprint = $12
      WHERE id = $13
      RETURNING
        id,
        nombre_proyecto AS "nombreProyecto",
        tipo_actividad AS "tipoActividad",
        estado,
        resumen,
        descripcion,
        prioridad,
        informador,
        persona_asignada AS "personaAsignada",
        precondicion,
        fecha_creacion AS "fechaCreacion",
        fecha_cierre AS "fechaCierre",
        sprint`,
            [
                nombreProyecto,
                tipoActividad,
                estado,
                resumen,
                descripcion,
                prioridad,
                informador,
                personaAsignada,
                precondicion,
                fechaCreacion,
                fechaCierre,
                sprint,
                id,
            ]
        )

        if (resultado.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Tarea no encontrada' })
        }

        res.json(resultado.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al editar la tarea' })
    }
})

// Finalizar una tarea
app.put('/tareas/:id/finalizar', async (req, res) => {
    try {
        const { id } = req.params

        const resultado = await pool.query(
            `UPDATE tareas
      SET estado = 'Finalizada'
      WHERE id = $1
      RETURNING
        id,
        nombre_proyecto AS "nombreProyecto",
        tipo_actividad AS "tipoActividad",
        estado,
        resumen,
        descripcion,
        prioridad,
        informador,
        persona_asignada AS "personaAsignada",
        precondicion,
        fecha_creacion AS "fechaCreacion",
        fecha_cierre AS "fechaCierre",
        sprint`,
            [id]
        )

        if (resultado.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Tarea no encontrada' })
        }

        res.json(resultado.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al finalizar la tarea' })
    }
})

// Eliminar una tarea
app.delete('/tareas/:id', async (req, res) => {
    try {
        const { id } = req.params

        const resultado = await pool.query(
            'DELETE FROM tareas WHERE id = $1 RETURNING id',
            [id]
        )

        if (resultado.rows.length === 0) {
            return res.status(404).json({ mensaje: 'Tarea no encontrada' })
        }

        res.json({ mensaje: 'Tarea eliminada correctamente' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error al eliminar la tarea' })
    }
})

app.listen(PORT, () => {
    console.log(`Servidor backend ejecutándose en http://localhost:${PORT}`)
})