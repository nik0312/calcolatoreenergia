const button = document.getElementById('avoid-button');

function moveButton() {
  const padding = 20;
  const maxTop = window.innerHeight - button.offsetHeight - padding;
  const maxLeft = window.innerWidth - button.offsetWidth - padding;

  const newTop = Math.max(0, Math.random() * maxTop);
  const newLeft = Math.max(0, Math.random() * maxLeft);

  button.style.top = `${newTop}px`;
  button.style.left = `${newLeft}px`;
}

// Sposta il bottone ogni 1.5 secondi
setInterval(moveButton, 1500);

// Quando ci passi sopra, si sposta ma NON scompare
button.addEventListener('mouseenter', moveButton);
