const btnForm = document.getElementById("btnSubmit");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const textRegex = /^[a-z\s]+$/i;
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

const validateText = (value) => textRegex.test(value);
const validateEmail = (value) => emailRegex.test(value);

let isNameValid;
let isLastNameValid;
let isEmailValid;
let isPasswordValid;

const setDisableForm = () => {
  if (!isNameValid || !isLastNameValid || !isEmailValid || !isPasswordValid) {
    btnForm.setAttribute("disabled", true);
  }
};

const validateName = () => {
  const nameValue = nameInput.value.trim();
  const isNameEmpty = nameValue.length <= 0;
  const isNameText = validateText(nameValue);
  isNameValid = !isNameEmpty && isNameText;

  const nameHintText = document.getElementById("nameHintText");

  setDisableForm();

  if (!isNameValid) {
    if (!nameHintText) {
      nameInput.classList.add("form--error");
      nameInput.insertAdjacentHTML(
        "afterend",
        '<div id="nameHintText" class="form__hint">El campo no es válido</div>'
      );
    }
  } else {
    btnForm.removeAttribute("disabled");
    nameInput.classList.remove("form--error");

    if (nameHintText) {
      nameHintText.remove();
    }
  }
};

const validateLastName = () => {
  const lastNameValue = lastNameInput.value.trim();
  const isLastNameEmpty = lastNameValue.length <= 0;
  const isLastNameText = validateText(lastNameValue);
  isLastNameValid = !isLastNameEmpty && isLastNameText;

  const lastNameHintText = document.getElementById("lastNameHintText");

  setDisableForm();

  if (!isLastNameValid) {
    if (!lastNameHintText) {
      btnForm.setAttribute("disabled", true);
      lastNameInput.classList.add("form--error");
      lastNameInput.insertAdjacentHTML(
        "afterend",
        '<div id="lastNameHintText" class="form__hint">El campo no es válido</div>'
      );
    }
  } else {
    btnForm.removeAttribute("disabled");
    lastNameInput.classList.remove("form--error");

    if (lastNameHintText) {
      lastNameHintText.remove();
    }
  }
};

const validateEmailInput = () => {
  const emailValue = emailInput.value.trim();
  const isEmailEmpty = emailValue.length <= 0;
  const isEmailText = validateEmail(emailValue);
  isEmailValid = !isEmailEmpty && isEmailText;

  const emailHintText = document.getElementById("emailHintText");

  setDisableForm();

  if (!isEmailValid) {
    if (!emailHintText) {
      btnForm.setAttribute("disabled", true);
      emailInput.classList.add("form--error");
      emailInput.insertAdjacentHTML(
        "afterend",
        '<div id="emailHintText" class="form__hint">El campo no es válido</div>'
      );
    }
  } else {
    btnForm.removeAttribute("disabled");
    emailInput.classList.remove("form--error");

    if (emailHintText) {
      emailHintText.remove();
    }
  }
};

const validatePassword = () => {
  const passwordValue = passwordInput.value.trim();
  const isPasswordEmpty = passwordValue.length <= 0;
  const isPasswordRange = passwordValue.length >= 4 && passwordValue.length <=6;
  isPasswordValid = !isPasswordEmpty && isPasswordRange;

  const passwordHintText = document.getElementById("passwordHintText");

  setDisableForm();

  if (!isPasswordValid) {
    if (!passwordHintText) {
      btnForm.setAttribute("disabled", true);
      passwordInput.classList.add("form--error");
      passwordInput.insertAdjacentHTML(
        "afterend",
        '<div id="passwordHintText" class="form__hint">La contraseña debe contener entre 4 y 6 caracteres</div>'
      );
    }
  } else {
    btnForm.removeAttribute("disabled");
    passwordInput.classList.remove("form--error");

    if (passwordHintText) {
      passwordHintText.remove();
    }
  }
};
 
const validateForm = () => {
  validateName();
  validateLastName();
  validateEmailInput();
  validatePassword();
};

const submitForm = (e) => {
  e.preventDefault();

  validateForm();
};

form.addEventListener("submit", submitForm);
nameInput.addEventListener("keyup", validateName);
nameInput.addEventListener("blur", validateName);
lastNameInput.addEventListener("keyup", validateLastName);
lastNameInput.addEventListener("blur", validateLastName);
emailInput.addEventListener("keyup", validateEmailInput);
emailInput.addEventListener("blur", validateEmailInput);
passwordInput.addEventListener("keyup", validatePassword);
passwordInput.addEventListener("blur", validatePassword);

