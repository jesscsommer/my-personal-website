const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
    event.target.style.outlineColor = "#752A20"
    }, true);
    
    form.addEventListener('blur', (event) => {
    event.target.style.outlineColor = '';
    }, true);
      

const button = document.querySelector("button");

button.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "#F7998D"
});

button.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = ""
});