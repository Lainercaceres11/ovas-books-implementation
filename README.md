# 300 OVAS 2026 Project 🎯

## Descripción 🐱‍👤

Este es un proyecto de OVA (Objeto Virtual de Aprendizaje) construido con **React** y **TypeScript**. El proyecto utiliza **UnoCSS** para el manejo de estilos y **Books-UI** como biblioteca de componentes. El manejo de dependencias y scripts se realiza mediante npm.

## Requisitos 📦

- Node.js (>= 18.x)
- npm (>= 9.x)

## Iniciar el proyecto 🚀

1. Clona este repositorio en tu máquina local:

```bash
git clone --recurse-submodules git@github.com:300-OVAs-2026/temporal-ova-template.git
```

2. Navega al directorio del proyecto:

```bash
cd ova-template
```

3. Actualiza los cambios del submódulo **shared**:

```bash
cd src/shared
```

```bash
git pull origin develop
```

4. Actualiza los cambios del submódulo **scripts**:

```bash
cd src/scripts
```

```bash
git pull origin develop
```

5. Actualiza los cambios del submódulo **snippets**:

```bash
cd .vscode
```

```bash
git pull origin main
```

6. Instala las dependencias necesarias:

```bash
npm install
```

## Scripts Disponibles 📜

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `npm dev` ▶️

Ejecuta la aplicación en modo de desarrollo. La página se recargará si realizas modificaciones en el código.

### `npm run build` 🏗️

Construye la aplicación para producción en la carpeta `dist`. Junto con esta carpeta se generará otra `ova-zip` donde encontrarás el código para producción en un archivo `.zip`.

### `npm run cz`📝

Utiliza `commitizen` para crear un commit conforme a las convenciones establecidas. Ejecuta este comando para guiarte a través del proceso de creación de un commit con un formato estandarizado.

## Uso de Books-UI 📚

[Books-UI](https://www.npmjs.com/package/books-ui) es una biblioteca de componentes personalizada utilizada en este proyecto. Puedes importar y utilizar componentes de la siguiente manera:

```tsx
import { Button } from 'books-ui';

const MyComponent = () => {
  return <Button label="Haz clic aquí" onClick={() => alert('¡Botón clicado!')} />;
};
```
