// JavaScript para cargar y mostrar datos JSON en la página

// Ruta al archivo JSON
const dataURL = 'C:\Users\mario\Desktop\visualproyects\data.json';

// Función para cargar y mostrar las publicaciones
function cargarPublicaciones() {
  fetch(dataURL)
    .then(response => response.json())
    .then(data => {
      const publicaciones = data.publicaciones;
      const publicacionesContainer = document.getElementById('publicaciones'); // Asegúrate de que tengas un elemento con el id "publicaciones" en tu HTML

      publicaciones.forEach(publicacion => {
        const article = document.createElement('article');
        article.innerHTML = `
          <h2>${publicacion.usuario}</h2>
          <p>${publicacion.contenido}</p>
          <p>Fecha de publicación: ${new Date(publicacion.fecha).toLocaleString()}</p>
        `;

        publicacionesContainer.appendChild(article);
      });
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
    });
}

// Llama a la función para cargar las publicaciones cuando la página se carga
window.addEventListener('load', cargarPublicaciones);
