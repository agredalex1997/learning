const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

forgetDiv.style.display = 'none';
document.body.onload = nameDisplayCheck;

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

submitBtn.addEventListener('click', function(e) {
    localStorage.setItem('name', nameInput.value);

    nameDisplayCheck();
});

forgetBtn.addEventListener('click', function(e) {
    localStorage.removeItem('name');

    nameDisplayCheck();
})

function nameDisplayCheck () {
    const name = localStorage.getItem('name');
    if (name) {
        rememberDiv.style.display = 'none';
        forgetDiv.style.display = 'block';
        h1.innerText = `Welcome, ${name}`;
        personalGreeting.innerText = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
    } else {
        rememberDiv.style.display = 'block';
        forgetDiv.style.display = 'none';
        h1.innerText = 'Our website';
        personalGreeting.innerText = 'Welcome to our website!';
    }
};
