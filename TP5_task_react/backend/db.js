const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'tp5_tareas',
    password: process.env.DB_PASSWORD || 'postgres',
    port: process.env.DB_PORT || 5433,
})

pool
    .connect()
    .then((cliente) => {
        console.log('Conexión con PostgreSQL exitosa')
        cliente.release()
    })
    .catch((error) => {
        console.error('Error al conectar con PostgreSQL:', error.message)
    })

module.exports = pool