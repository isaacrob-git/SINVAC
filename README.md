# SINVAC - Sistema de Control de Vacunación

Prototipo frontend estático desarrollado para la gestión y control de vacunación, diseñado y estructurado con **Tailwind CSS v4**.

---

## Estructura del Proyecto

Asegúrate de tener la carpeta del proyecto estructurada tal como se planificó en el documento del proyecto:

```text
SINVAC/
└── client/
    ├── src/
    │   └── input.css
    ├── css/
    │   └── output.css  <-- (Este archivo se generará automáticamente)
    └── pages/
        ├── login.html
        ├── dashboard.html
        ├── personas.html
        └── vacunas.html
```

---

## Guía de Instalación y Ejecución

Sigue estos pasos en tu terminal para poner en marcha el proyecto localmente:

### Paso 1: Organizar las carpetas en tu equipo
Verifica que la estructura de archivos en tu sistema coincida con el árbol mostrado en la sección superior.

### Paso 2: Instalar Tailwind CSS v4
Abre tu terminal, navega específicamente dentro de la carpeta `client/` e inicializa el entorno de Node para instalar Tailwind CSS y su CLI:

```bash
cd client
npm init -y
npm install -D tailwindcss @tailwindcss/cli
```

### Paso 3: Compilar los estilos CSS
Tailwind CSS v4 utiliza su nueva CLI para compilar las clases utilizadas en las vistas hacia el archivo de salida (`output.css`). Ejecuta el siguiente comando dentro de la carpeta `client/`:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./css/output.css --watch
```

> **Nota:** Deja esta terminal abierta mientras estés probando o diseñando. El parámetro `--watch` hará que cualquier cambio que hagas en tus archivos se actualice automáticamente.

---

## Paso 4: Visualizar las pantallas en el navegador

Dado que este prototipo es 100% estático y sin JavaScript, no necesitas correr ningún servidor de backend (como Node.js o Express) todavía. Tienes dos formas de abrirlos:

1. **Método directo:** 
   Ve con tu explorador de archivos a la carpeta `client/pages/` y haz doble clic en cualquiera de los archivos HTML (`login.html`, `dashboard.html`, `personas.html`, `vacunas.html`) para abrirlo directamente en tu navegador (Chrome, Firefox, Edge, etc.).

2. **Método recomendado (con VS Code):** 
   Si usas Visual Studio Code, instala la extensión **Live Server**. Haz clic derecho sobre `login.html` y selecciona **"Open with Live Server"**. Esto levantará un servidor local rápido que recargará la página automáticamente cada vez que visualices los cambios.