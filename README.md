# Primer Trabajo 1.1

Sitio web simple de prueba con entrada de texto y cambio de tema de colores.

## 1. Funcionamiento de la página

- Contiene un campo de texto (`input`) donde el usuario escribe.
- Cuando el usuario presiona la tecla `Enter` dentro del campo de texto, se muestra un `alert` con el contenido ingresado.
  - Si el texto está vacío, muestra un mensaje de error indicando que no se ingresó texto.

- Contiene un botón "Cambiar colores".
- Cada clic en el botón alterna el tema de la página entre:
  1. Fondo blanco, texto negro
  2. Fondo negro, texto blanco
  3. Fondo celeste, texto rojo

## 2. Archivos principales

- `index.html`: HTML + estilos.
- `index.js`:javascript .
- `package.json`: scripts para servidor local con Vite.
- `README.md`: este documento.

## 3. Ejecutar localmente

1. Abrir terminal en la carpeta del proyecto:

2. Instalar dependencias (si no se instalaron):

```powershell
npm install
```

3. Iniciar servidor de desarrollo:

```powershell
npm run dev
```

4. El servidor abre el navegador automáticamente en:

```
http://localhost:3000/
```

5. Para probar:
- Escribir texto y presionar `Enter` para ver el `alert`.
- Clic en "Cambiar colores" para alternar temas.

## 4. Comandos útiles

- `npm run dev`: servidor de desarrollo (varias recargas en vivo).
