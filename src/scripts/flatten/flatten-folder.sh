#!/bin/bash

TARGET_DIR="${1:-.}"

echo "[*] Reorganizando archivos en: $TARGET_DIR"

# Verifica que sea una carpeta válida
if [ ! -d "$TARGET_DIR" ]; then
  echo "[X] $TARGET_DIR no es una carpeta válida."
  exit 1
fi

# Mover todos los archivos desde subcarpetas al directorio raíz
find "$TARGET_DIR" -mindepth 2 -type f -exec mv -n '{}' "$TARGET_DIR" \;

echo "[+] Archivos movidos a la carpeta raíz: $TARGET_DIR"

# Eliminar carpetas vacías restantes
find "$TARGET_DIR" -type d -empty -not -path "$TARGET_DIR" -delete

echo "[~] Carpetas vacías eliminadas."
echo "[OK] Listo."
