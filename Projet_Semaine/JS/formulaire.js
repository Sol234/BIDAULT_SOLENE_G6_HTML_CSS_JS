document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.querySelector('#email');

    if (email.value === '') {
        console.log('invalide');
    } else {
        console.log('valide');
        email.classList.add('success');
    }
});

let errorContainer = document.querySelector('.message-error');
let errorList = document.querySelector('.message-error ul');

errorList.innerHTML = '';
errorContainer.classList.remove('visible');

let email = document.querySelector('#email');

// Vérifier si l'email est correct
if (email.value === '') {
    errorContainer.classList.add('visible');
    email.classList.remove('success');

    let err = document.createElement('li');
    err.innerText = "Le champ email ne peut pas être vide";

    errorList.appendChild(err);
} else {
    email.classList.add('success');
    console.log("success activé");
}

// Vérifier si le pseudo est correct
let pseudo = document.querySelector('#pseudo');
if (pseudo.value.length < 6) {
    errorContainer.classList.add('visible');
    pseudo.classList.remove('success');

    let err = document.createElement('li');
    err.innerText = "Le champ pseudo doit contenir au moins 6 caractères";

    errorList.appendChild(err);
} else {
    pseudo.classList.add('success');
}

// Vérifier si le mot de passe est correct
let password = document.querySelector('#password');
let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;

if (password.value.length < 10 || !passCheck.test(password.value)) {
    errorContainer.classList.add('visible');
    password.classList.remove('success');

    let err = document.createElement('li');
    err.innerText = "Le mot de passe doit faire 10 caractères minimum et doit contenir minuscules, majuscules, chiffres et caractères spéciaux";

    errorList.appendChild(err);
} else {
    password.classList.add('success');
}

// Vérifier si les mots de passe correspondent
let passwordInitial = document.querySelector('#password');
let passwordRepeat = document.querySelector('#password2');

if (passwordInitial.value !== passwordRepeat.value) {
    errorContainer.classList.add('visible');
    passwordRepeat.classList.remove('success');

    let err = document.createElement('li');
    err.innerText = "Les mots de passe ne correspondent pas";

    errorList.appendChild(err);
} else {
    passwordRepeat.classList.add('success');
}

let successContainer = document.querySelector('.message-success');
successContainer.classList.remove('visible');

if (
    pseudo.classList.contains('success') &&
    email.classList.contains('success') &&
    password.classList.contains('success') &&
    passwordRepeat.classList.contains('success')

) {
    successContainer.classList.add('visible');
}
