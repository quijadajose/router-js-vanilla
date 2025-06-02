let container = null;

window.addEventListener("DOMContentLoaded", () => {
  // Ahora sí existe <div id="app"> en el DOM
  container = document.getElementById("app");
  if (!container) {
    console.error("No se encontró ningún elemento con id='app'");
    return;
  }
  router(); // Lanza la primera carga
});

window.addEventListener("hashchange", () => {
  if (!container) return; 
  router();
});

const routes = {
  "/": "templates/home.html",
  "/about": "templates/about.html",
  "/contact": "templates/contact.html"
};

async function fetchTemplate(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) {
      return `<p>Error ${res.status}: No se pudo cargar la plantilla.</p>`;
    }
    return await res.text();
  } catch (err) {
    console.error("Error en fetchTemplate:", err);
    return `<p>Error al cargar la plantilla.</p>`;
  }
}

async function router() {
  const hash = window.location.hash.slice(1) || "/";
  const templatePath = routes[hash] || null;
  if (!templatePath) {
    container.innerHTML = `<h2>404 - Página no encontrada</h2>`;
    return;
  }
  container.innerHTML = await fetchTemplate(templatePath);
}
