# Router JS Vanilla

Este proyecto es un ejemplo simple de un enrutador (router) hecho en JavaScript puro (vanilla JS), que permite cargar diferentes plantillas HTML según la ruta seleccionada, sin recargar la página

https://github.com/user-attachments/assets/465726c8-f450-4b75-9692-cffd8c1b83df

## ¿Cómo funciona?

- El archivo [`index.html`](index.html) contiene la estructura principal y un `<nav>` con enlaces que cambian la URL usando el hash (`#`)
- El archivo [`js/router.js`](js/router.js) escucha los cambios en el hash de la URL y carga la plantilla HTML correspondiente dentro del `<div id="app">`.
- Las plantillas HTML están en la carpeta [`templates`](templates/).

## Estructura de archivos

```
router-js-vanilla/
├── index.html
├── js
│   └── router.js
├── README.md
└── templates
    ├── about.html
    ├── contact.html
    └── home.html

3 directories, 6 files
```

## Ejemplo de uso

1. Abre `index.html` en tu navegador
2. Haz clic en los enlaces del menú:
   - **Home**: muestra el contenido de `templates/home.html`
   - **About**: muestra el contenido de `templates/about.html`
   - **Contact**: muestra el contenido de `templates/contact.html`
3. Si escribes una ruta que no existe (por ejemplo, `#/not-exists`), verás un mensaje de "404 - Página no encontrada"

## ¿Cómo funciona el router?

- Cuando la página carga o el hash de la URL cambia, se ejecuta la función `router()` de [`js/router.js`](js/router.js).
- Esta función:
  1. Lee la ruta del hash (por ejemplo, `#/about`)
  2. Busca la plantilla correspondiente en el objeto `routes`
  3. Si existe, la carga dentro del `<div id="app">` usando `fetch`
  4. Si no existe, muestra un mensaje de error 404.

## Código clave
![Presentación sin título(1)](https://github.com/user-attachments/assets/41b2188b-aa5a-4698-9819-adfeb1aca284)

```js
const routes = {
  "/": "templates/home.html",
  "/about": "templates/about.html",
  "/contact": "templates/contact.html"
};

async function router() {
  const hash = window.location.hash.slice(1) || "/";
  const templatePath = routes[hash] || null;
  if (!templatePath) {
    container.innerHTML = `<h2>404 - Página no encontrada</h2>`;
    return;
  }
  container.innerHTML = await fetchTemplate(templatePath);
}
```

## Requisitos

- Solo necesitas un navegador
- Si abres el proyecto directamente como archivo (`file://`), puede que `fetch` no funcione por políticas de seguridad. Se recomienda usar un servidor local, por ejemplo:

```sh
# Con Python 3
python3 -m http.server
```

Luego abre [http://localhost:8000](http://localhost:8000) en tu navegador.

si usas VS Code, puedes usar [LiveServer](https://marketplace.visualstudio.com/items/?itemName=ritwickdey.LiveServer)

