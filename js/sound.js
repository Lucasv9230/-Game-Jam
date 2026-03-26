const audio = document.getElementById('background-music');

  // Si le navigateur bloque le son, on attend une interaction
  document.addEventListener('click', () => {
    audio.play();
  });