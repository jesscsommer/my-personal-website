const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.outlineColor = "#752A20"
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.outlineColor = '';
}, true);