import { validateName } from './validateName.js'
import { validateLastName } from './validateLastName.js';
import { validateEmailInput } from './validateEmail.js';
import { validatePassword } from './validatePassword.js';

const btnForm = document.getElementById("btnSubmit");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

localStorage.setItem('isNameValid', false);
localStorage.setItem('isLastNameValid', false);
localStorage.setItem('isEmailValid', false);
localStorage.setItem('isPasswordValid', false);

nameInput.addEventListener("keyup", validateName.bind(null, nameInput, btnForm));
nameInput.addEventListener("blur", validateName.bind(null, nameInput, btnForm));
lastNameInput.addEventListener("keyup", validateLastName.bind(null, lastNameInput, btnForm));
lastNameInput.addEventListener("blur", validateLastName.bind(null, lastNameInput, btnForm));
emailInput.addEventListener("keyup", validateEmailInput.bind(null, emailInput, btnForm));
emailInput.addEventListener("blur", validateEmailInput.bind(null, emailInput, btnForm));
passwordInput.addEventListener("keyup", validatePassword.bind(null, passwordInput, btnForm));
passwordInput.addEventListener("blur", validatePassword.bind(null, passwordInput, btnForm));

