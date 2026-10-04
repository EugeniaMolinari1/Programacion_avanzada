CREATE TABLE IF NOT EXISTS tareas (
    id SERIAL PRIMARY KEY,
    nombre_proyecto VARCHAR(255) NOT NULL,
    tipo_actividad VARCHAR(255),
    estado VARCHAR(100),
    resumen VARCHAR(255),
    descripcion TEXT,
    prioridad VARCHAR(100),
    informador VARCHAR(255),
    persona_asignada VARCHAR(255),
    precondicion TEXT,
    fecha_creacion DATE,
    fecha_cierre DATE,
    sprint VARCHAR(100)
);