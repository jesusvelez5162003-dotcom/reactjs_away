# Documentación del Proyecto AWAY

## Resumen del proyecto
AWAY es una web de presentación para un juego indie de aventura y sigilo en 2D, creada con React y Vite. Ofrece una experiencia inmersiva con navegación por pestañas, una galería visual y un formulario de registro para beta testers.

## Para usuarios no técnicos
### ¿Qué puedes hacer?
- Ver la historia y ambiente de AWAY.
- Consultar la presentación del juego y los requisitos del sistema.
- Explorar la galería de escenas con un visor ampliado.
- Registrar tu nombre y correo para recibir noticias de la demo.
- Acceder al panel de administración de demo con credenciales de ejemplo.

### Navegación del sitio
La aplicación tiene pestañas en la parte superior:
- `Inicio`: vista principal con resumen del juego y llamadas a la acción.
- `Historia`: lore del mundo, personajes y enemigos.
- `Presentación`: ficha técnica y requisitos del sistema.
- `Galería`: imágenes jugables con un lightbox para verlas ampliadas.
- `Registro`: formulario para unirte a la lista de novedades.

### Cómo registrarte
1. Haz clic en `Únete` o en la pestaña `Registro`.
2. Completa tu nombre, apodo, correo y región.
3. Marca la casilla para aceptar los términos.
4. Presiona `REGISTRARME`.

> El registro se guarda en tu navegador usando `localStorage`.

### Acceso de administrador
En la pestaña `Admin Portal` puedes iniciar sesión con estas credenciales de prueba:
- Usuario: `admin`
- Contraseña: `adminaway2026`

Desde el panel de administración puedes:
- Ver los registros de usuarios.
- Buscar y filtrar por nombre, región e interés.
- Enviar mensajes simulados a un usuario o a todos.
- Editar y eliminar entradas de registro.

## Para desarrolladores
### Requisitos
- Node.js 18+ instalado.
- npm disponible.

### Cómo descargar y ejecutar
1. Clona el repositorio:
```bash
git clone https://github.com/jesusvelez5162003-dotcom/reactjs_away.git
cd reactjs_away
```
2. Instala dependencias:
```bash
npm install
```
3. Inicia el servidor de desarrollo:
```bash
npm run dev
```
4. Abre la URL que muestra Vite en el navegador (por ejemplo, `http://localhost:5173`).

### Cómo construir para producción
```bash
npm run build
npm run preview
```

> `npm run build` genera la carpeta `dist` con los archivos listos para publicación.

### Estructura del proyecto
- `src/App.jsx`: la aplicación principal y el cambio entre pestañas.
- `src/components/`: componentes de UI y secciones del sitio.
  - `Navbar.jsx`: navegación principal.
  - `Footer.jsx`: pie de página.
  - `HomeTab.jsx`: página de inicio.
  - `StoryTab.jsx`: página de historia.
  - `PresentationTab.jsx`: ficha técnica y requisitos.
  - `GalleryTab.jsx`: galería con lightbox.
  - `RegisterTab.jsx`: formulario de registro.
  - `AdminLogin.jsx`: login de administrador.
  - `AdminDashboard.jsx`: panel de administración.
- `public/`: activos públicos como imágenes y logos.
- `package.json`: configuración del proyecto y scripts.

### Tecnología usada
- React 19
- Vite 8
- ESLint para validación de código
- LocalStorage para datos de demostración (sin backend)

## Qué revisar en el proyecto
- Funcionalidad de pestañas y navegación.
- Validación del formulario de registro.
- Guardado y lectura de datos en `localStorage`.
- Comportamiento del panel de administración.
- Visualización de imágenes en la galería.

## Notas adicionales
- El proyecto funciona como demo local y no almacena datos en servidor.
- La autenticación de admin es de demostración; no usar en producción.
- Se puede extender para conectar con una API real o un sistema de backend más adelante.
