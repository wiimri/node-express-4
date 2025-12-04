# Desafío: Like Me (Parte II)  
API REST con Node.js, Express y PostgreSQL

Este proyecto implementa una API REST que permite gestionar publicaciones ("posts"), agregar likes, restar likes y eliminar posts.  
Es la continuación del desafío Like Me (Parte I), agregando rutas PUT y DELETE para cumplir la interacción completa del modelo de datos.

---

## 🚀 Tecnologías utilizadas
- Node.js
- Express
- PostgreSQL
- CORS
- Thunder Client (para pruebas)
- pg (driver para PostgreSQL)

---

## 📦 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/miusuario/nombre-repo.git
```

2. Instalar dependencias:
npm install

3. Crear la base de datos en PostgreSQL
CREATE DATABASE likeme;
CREATE TABLE post (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255),
  likes INT
);

4. Configurar el archivo /db.js con tus credenciales de PostgreSQL

5. Ejecutar el servidor
npm start

El servidor iniciara en:
http://localhost:3000

📚 Documentación de la API
1️⃣ Obtener todos los posts
GET /posts
Ejemplo de respuesta:
[
  {
    "id": 1,
    "titulo": "Mi primer post",
    "likes": 5
  }
]


2️⃣ Crear un nuevo post
POST /posts

Payload:
{
  "titulo": "Nuevo post"
}

Respuesta:
{
  "id": 2,
  "titulo": "Nuevo post",
  "likes": 0
}


3️⃣ Dar like o dislike
PUT /posts/like/:id

Sumar un like:
PUT http://localhost:3000/posts/like/1

Restar un like:
PUT http://localhost:3000/posts/like/1?inc=-1

Respuesta:
{
  "id": 1,
  "titulo": "Mi primer post",
  "likes": 6
}


4️⃣ Eliminar un post
DELETE /posts/:id

Ejemplo: 
DELETE http://localhost:3000/post/1

Respuesta:
{
  "message": "Post eliminado con éxito",
  "post": {
    "id": 1,
    "titulo": "Mi primer post",
    "likes": 6
  }
}


🧪 Cómo probar la API (Thunder Client)
1️⃣ Abrir VS Code
2️⃣ Instalar extensión: Thunder Client
3️⃣ Crear una nueva request
4️⃣ Elegir método: GET / POST / PUT / DELETE
5️⃣ Enviar la request y revisar el JSON de respuesta

🗂️ Estructura del proyecto
like-me/
│── db.js
│── index.js
│── queries.js
│── package.json
│── package-lock.json
└── README.md


✔️ Funcionalidades implementadas
Funcionalidad	Estado
GET /posts	✅ Completo
POST /posts	✅ Completo
PUT /posts/like/:id	✅ Completo
DELETE /posts/:id	✅ Completo
Conexión segura con PostgreSQL	✅ Completo
Manejo de errores y códigos HTTP	✅ Completo
Validación de parámetros	✅ Completo
Uso de Thunder Client	✅ Probado y funcionando

🙌 Autor

Williams Arias – Ingeniero Industrial & Administraicon - Ingeniero en Redes & Comunicación
------------------------------------------------------------------------------------------
Desafío Latam 
