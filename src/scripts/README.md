# 📁 Scripts de Gestión de Archivos

Una colección de herramientas CLI en Node.js para gestionar archivos y carpetas de manera eficiente.

## 🛠️ Herramientas Disponibles

### 1. 📋 Clone Repositories (`clone/`)

Clona repositorios de juegos educativos de la organización phaser-labs de GitHub de manera interactiva. Ideal para descargar y organizar múltiples proyectos de juegos en tu workspace.

**Características:**
- ✅ Lista de repositorios de juegos educativos disponibles
- ✅ Interfaz CLI interactiva con selección de menú
- ✅ Directorio destino personalizable (default: `src/components/games`)
- ✅ Opción de nombre de carpeta personalizado
- ✅ Validación de Git instalado en el sistema
- ✅ Confirmación antes de clonar
- ✅ Detección de carpetas existentes con opción de sobrescribir
- ✅ Salida colorida en la terminal

**Uso:**
```bash
cd clone
npm install

# Iniciar el CLI interactivo
node index.js
```

**Ejemplo de Flujo Interactivo:**
```bash
🔄 Clonar Repositorios de GitHub CLI

✓ repositorios disponibles

? Selecciona un repositorio para clonar: arcanum-archer
? Ingresa el directorio destino: src/components/games
? ¿Usar nombre de carpeta personalizado? No
? ¿Clonar "arcanum-archer" en "C:\...\src\components\games\arcanum-archer"? Yes

📦 Clonando repositorio...

Repositorio: https://github.com/phaser-labs/arcanum-archer
Destino: C:\...\src\components\games\arcanum-archer

✓ arcanum-archer clonado exitosamente
Ubicación: C:\...\src\components\games\arcanum-archer

✓ ¡Listo!
```

### 2. 📃 Create Page Files (`pages/`)

Crea múltiples archivos de páginas con nombres normalizados y numeración secuencial con padding automático. Ideal para generar estructuras de archivos para proyectos web, documentación o plantillas.

**Características:**
- ✅ Interfaz CLI interactiva con menú dinámico
- ✅ Numeración secuencial con padding automático (01, 02... 10, 11)
- ✅ Múltiples extensiones predefinidas (HTML, TSX, JSX, JS, CSS)
- ✅ Opción de extensión personalizada
- ✅ Validación de entrada en todos los campos
- ✅ Confirmación antes de crear archivos
- ✅ Salida colorida en la terminal

**Uso:**
```bash
cd folder
npm install

# Iniciar el CLI interactivo
node index.js
```

**Ejemplo de Flujo Interactivo:**
```bash
📁 Create Page Files CLI

? Enter the directory path: ./pages
? Enter the base name for page files: page
? Enter the starting index: 1
? Select file extension: HTML (.html)
? How many files do you want to create? 15
? Create 15 files (page-01.html, ...) in "./pages"? Yes

📝 Creating 15 files...

✓ Created: page-01.html
✓ Created: page-02.html
...
✓ Created: page-15.html

✓ Successfully created 15 files in C:\path\to\pages
```

---

### 3. 📦 Normalize Filenames (`normalize/`)

Normaliza nombres de archivos convirtiéndolos a minúsculas, reemplazando espacios por guiones bajos y opcionalmente renombrando archivos con un nombre base personalizado y numeración secuencial.

**Características:**
- ✅ Convierte nombres de archivos a minúsculas
- ✅ Reemplaza espacios por guiones bajos
- ✅ Elimina guiones bajos consecutivos
- ✅ Renombrado secuencial opcional con nombre base personalizado
- ✅ Salida colorida en la terminal

**Uso:**
```bash
cd normalize
npm install

# Normalizar nombres de archivos en un directorio
node index.js -d /ruta/al/directorio

# Renombrar todos los archivos con un nombre base personalizado
node index.js -d /ruta/al/directorio -n "mi_proyecto"

# Mostrar ayuda
node index.js --help
```

**Ejemplos:**
```bash
# Antes: "Avatar_ECBTI _Conclusiones.webp"
# Después:  "avatar_ecbti_conclusiones.webp"

# Con nombre base personalizado:
# Antes: "file1.jpg", "file2.jpg", "file3.jpg"
# Después:  "mi_proyecto-01.jpg", "mi_proyecto-02.jpg", "mi_proyecto-03.jpg"
```

---

### 4. 🗂️ Flatten Folder (`flatten/`)

Aplana una estructura de carpetas moviendo todos los archivos desde subdirectorios al directorio raíz y eliminando carpetas vacías.

**Características:**
- ✅ Mueve todos los archivos anidados al directorio raíz
- ✅ Elimina automáticamente las carpetas vacías
- ✅ Preserva la integridad de archivos con flag `-n` (sin sobrescritura)
- ✅ Salida colorida en la terminal

**Uso:**
```bash
cd flatten
npm install

# Aplanar el directorio actual
node index.js

# Aplanar un directorio específico
node index.js /ruta/al/directorio

# Mostrar ayuda
node index.js --help
```

**Ejemplo:**
```bash
# Antes:
# carpeta/
#   ├── subcarpeta1/archivo1.txt
#   ├── subcarpeta2/anidada/archivo2.txt
#   └── archivo3.txt

# Después:
# carpeta/
#   ├── archivo1.txt
#   ├── archivo2.txt
#   └── archivo3.txt
```

---

## 📋 Requisitos

- Node.js (v16 o superior)
- Git (para la herramienta de clonación)
- Bash shell (Git Bash en Windows, o nativo en Linux/macOS)

## 💿 Instalación

Cada herramienta tiene sus propias dependencias. Navega al directorio de la herramienta y ejecuta:

```bash
npm install
```

## 📦 Dependencias Comunes

Las herramientas usan:
- `@inquirer/prompts` - Prompts interactivos para CLI (clone, pages)
- `chalk` - Colores y estilos para la terminal (todas las herramientas)
- `commander` - Framework para CLI (normalize, flatten)

## 🔄 Ejemplo de Flujo de Trabajo

Combina las herramientas para una gestión completa de archivos:

**Flujo 1: Clonar y organizar juegos educativos**
```bash
# Clonar un repositorio de juego
cd clone
node index.js
# Seleccionar: arcanum-archer, src/components/games

# Resultado: Juego clonado en src/components/games/arcanum-archer
```

**Flujo 2: Crear y organizar páginas web**
```bash
# Crear archivos de páginas HTML
cd folder
node index.js
# Seleccionar: ./pages, "pagina", index 1, .html, 20 archivos

# Resultado: pagina-01.html hasta pagina-20.html
```

**Flujo 3: Organizar archivos existentes**
```bash
# Paso 1: Aplanar la estructura de carpetas
cd flatten
node index.js ../../../test/images

# Paso 2: Normalizar todos los nombres de archivos
cd ../normalize
node index.js -d ../../../test/images -n "imagenes_proyecto"

# Resultado: Todos los archivos en un solo directorio con nombres normalizados
```

## ❤️ Hecho con el 💙 en Books&Books  

Nos enorgullece desarrollar este proyecto como parte del compromiso de **Books&Books** con la educación y la innovación tecnológica. 🌟  

Gracias por visitar nuestro proyecto. ¡Juntos podemos hacer del aprendizaje una experiencia increíble! 🥳✨
