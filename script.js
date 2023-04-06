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

const allFormSubmissions = [];

function storeForm(){
    const formSubmission = {};

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const messageValue = document.getElementById("message").value;

    formSubmission.name = nameValue;
    formSubmission.email = emailValue;
    formSubmission.message = messageValue;
    // console.log(formSubmission);

    allFormSubmissions.push(formSubmission);

    for (let i = 0; i < allFormSubmissions.length; i++) {
        console.log(allFormSubmissions[i]);
    }
}

const submission = document.getElementById("submission");

function showSubmission(event) {
    submission.textContent = 'Thank you for your submission, '+document.getElementById("name").value +'!'
    event.preventDefault();
}

form.addEventListener("submit", showSubmission);