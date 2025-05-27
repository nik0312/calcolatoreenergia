const button = document.getElementById('avoid-button');

function moveButton() {
  const padding = 20;
  const newTop = Math.random() * (window.innerHeight - button.offsetHeight - padding);
  const newLeft = Math.random() * (window.innerWidth - button.offsetWidth - padding);
  button.style.top = `${newTop}px`;
  button.style.left = `${newLeft}px`;
}

// Sposta il bottone ogni 1.5 secondi
setInterval(moveButton, 1500);

// Aggiungi un movimento extra se l'utente ci va sopra col mouse
button.addEventListener('mouseover', moveButton);
