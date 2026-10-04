# TP5 - Task React

**Licenciatura en Sistemas de Información**  
**Programación Avanzada - 2026**

## Descripción

Aplicación desarrollada con React y Vite para la gestión de tareas de proyectos de software.

Permite crear, listar, editar, finalizar y eliminar tareas.

La información se almacena en una base de datos PostgreSQL mediante un backend desarrollado con Node.js y Express.

## Tecnologías utilizadas

- React
- Vite
- Node.js
- Express
- PostgreSQL
- Docker
- Docker Compose

## Ejecución

Para ejecutar el proyecto es necesario tener Docker Desktop iniciado.

Desde la carpeta `TP5_task_react` ejecutar:

```bash
docker compose up -d --build
```

La aplicación estará disponible en:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- PostgreSQL: puerto 5433

Para detener los contenedores:

```bash
docker compose down
```

## Servicios Docker

El proyecto utiliza tres servicios:

- `tp5-frontend`: aplicación React.
- `tp5-backend`: API desarrollada con Node.js y Express.
- `tp5-postgres`: base de datos PostgreSQL.

Los datos de PostgreSQL se almacenan en un volumen Docker para mantener la persistencia aunque los contenedores sean detenidos.