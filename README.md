# Sistema Web de Ventas – ALREX
ALREX es un sistema web desarrollado para facilitar la gestión de ventas de extintores. Su objetivo principal es digitalizar los procesos internos de la empresa, permitiendo a los usuarios administrar clientes, productos, servicios y reportes de forma eficiente desde una interfaz web intuitiva.

Este sistema cuenta con:

✅ Un Frontend moderno (React)
✅ Un Backend robusto (Node.js + Express)
✅ Una Base de datos NoSQL con MongoDB
✅ Un flujo de CI/CD automatizado con GitHub Actions y despliegue en Render

## 📁 Estructura del Proyecto
ALREX/
├── backend/       → API REST con Node.js y MongoDB
├── frontend/      → Aplicación web desarrollada con React
├── .github/workflows/deploy.yml → Script de despliegue automático
└── README.md      → Guía principal de uso

## 🚀 Guía para Ejecutar el Proyecto en Local

### 1. Clonar el Repositorio
   git clone https://github.com/Marloncs25/DDH_Venta_extintores_Publico.git
   cd SistemaWebAdmin
   
### 2. Requisitos Previos
Asegúrate de tener instalado lo siguiente:

✅ Git (versión 2.0 o superior)

✅ Node.js (v18 o superior)

✅ MongoDB (local o en la nube con MongoDB Atlas)

✅ Visual Studio Code (u otro editor de tu preferencia)

### 3. Configurar Variables de Entorno
Cada parte del proyecto necesita su propia configuración .env.

####📦 Backend (/backend/.env)
Crea un archivo .env con el siguiente contenido:

PORT=4000
MONGODB_URI=mongodb://localhost:27017/alrex_db
JWT_SECRET=clave_secreta_alrex
>>Si usas MongoDB Atlas, reemplaza MONGODB_URI con tu cadena de conexión en la nube.<<

### 4. Instalación de Dependencias
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

### 5. Ejecutar el Sistema
#### ▶️ Iniciar el Backend
cd backend
npm run dev

Accede a la API desde: http://localhost:4000 

#### 🌐 Iniciar el Frontend
cd frontend
npm run dev

Accede a la aplicación en: http://localhost:5173

#### 🔄 Despliegue Automático (CI/CD con GitHub Actions)
Este proyecto tiene un flujo automatizado de despliegue. Cada vez que se hace un push a la rama main, se ejecuta un workflow en GitHub Actions que:

- Notifica a Render para que redepliegue automáticamente el backend.
- Luego hace lo mismo con el frontend.
- Este sistema evita tener que desplegar manualmente, y asegura que los cambios estén siempre disponibles en producción.


# ✅ Recomendaciones Finales
Para producción, se recomienda usar MongoDB Atlas y no una instancia local.

Asegúrate de que las variables de entorno estén bien configuradas en Render.

Puedes modificar los puertos en los archivos .env si ya están siendo usados por otros servicios.


# 👨‍💻 Desarrolladores
Este proyecto fue desarrollado por el equipo de ALREX como parte de una solución tecnológica para mejorar los procesos internos de la empresa – 2025.

