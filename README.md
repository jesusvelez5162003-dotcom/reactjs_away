# AWAY — Presentación del juego

AWAY es una landing page interactiva que presenta un prototipo de juego indie en 2D. Esta aplicación permite conocer la historia, ver capturas de pantalla, consultar requisitos del sistema y registrarse para recibir noticias de la demo.

## Qué puedes encontrar aquí
- **Inicio**: presentación del juego y llamadas a la acción.
- **Historia**: lore del mundo, personajes y enemigos.
- **Presentación**: ficha técnica, descripción y requisitos.
- **Galería**: imágenes del juego con vista ampliada.
- **Registro**: formulario para unirse a las novedades y la demo técnica.
- **Admin Portal**: acceso de demostración con credenciales de prueba.

## Instalación

### Requisitos
- Node.js 18 o superior
- npm

### Configuración local
```bash
git clone https://github.com/jesusvelez5162003-dotcom/reactjs_away.git
cd reactjs_away
npm install
npm run dev
```

Abre la URL que muestre Vite en el navegador, por ejemplo `http://localhost:5173`.

## Uso del proyecto
### Como usuario
- Navega entre las secciones desde el menú superior.
- Haz clic en `Únete` o `Registro` para enviar tus datos.
- El registro se guarda localmente en el navegador.
- Accede a `Admin Portal` para ver el panel de administración de demo.

### Acceso de administrador de demostración
- Usuario: `admin`
- Contraseña: `adminaway2026`

### Qué puedes hacer en el panel de administración
- Ver usuarios registrados.
- Buscar y filtrar por nombre, región o interés.
- Enviar mensajes simulados a todos o a usuarios específicos.
- Editar y eliminar registros.

## Construcción para producción
```bash
npm run build
npm run preview
```

Esto genera la carpeta `dist` con los archivos listos para publicar.

## Estructura del proyecto
- `src/App.jsx`: aplicación principal y navegación entre pestañas.
- `src/components/`: componentes de la interfaz.
- `public/`: recursos públicos como imágenes y logos.
- `package.json`: dependencias y scripts.
- `DOCUMENTACION.md`: guía de usuario y desarrollador en español.

## Tecnologías usadas
- React 19
- Vite 8
- ESLint
- `localStorage` para datos de demostración sin backend

## Documentación adicional
Consulta `DOCUMENTACION.md` para una guía detallada orientada a usuarios sin conocimientos técnicos y para desarrolladores.
