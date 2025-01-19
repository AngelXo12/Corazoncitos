const container = document.getElementById('container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
  heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración entre 3-5 segundos
  heart.style.animationDelay = Math.random() * 1 + 's'; // Retraso aleatorio para desincronizar
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove(); // Eliminar el corazón después de que termine la animación
  }, 5000);
}

// Crear corazones con más frecuencia
setInterval(createHeart, 100); // Crear un corazón cada 100ms
