import { validateEmail } from "./validations.js";
import { setDisableForm } from "./disableForm.js";

export const validateEmailInput = (emailInput, btnForm) => {
  let isNameValid = localStorage.getItem("isNameValid") === 'true' ;
  let isLastNameValid = localStorage.getItem("isLastNameValid") === 'true';
  let isEmailValid = localStorage.getItem("isEmailValid") === 'true';
  let isPasswordValid = localStorage.getItem("isPasswordValid") === 'true';
  const emailValue = emailInput.value.trim();
  const isEmailEmpty = emailValue.length <= 0;
  const isEmailText = validateEmail(emailValue);
  const emailHintText = document.getElementById("emailHintText");
  
  isEmailValid = !isEmailEmpty && isEmailText;
  localStorage.setItem('isEmailValid', isEmailValid);

  setDisableForm(
    isNameValid,
    isLastNameValid,
    isEmailValid,
    isPasswordValid,
    btnForm
  );

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
    emailInput.classList.remove("form--error");

    if (emailHintText) {
      emailHintText.remove();
    }
  }
};
