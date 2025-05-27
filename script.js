const button = document.getElementById('avoid-button');

button.addEventListener('mouseover', () => {
  const newTop = Math.random() * (window.innerHeight - 50);
  const newLeft = Math.random() * (window.innerWidth - 150);
  button.style.top = `${newTop}px`;
  button.style.left = `${newLeft}px`;
});
