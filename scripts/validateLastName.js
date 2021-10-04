import { validateText } from "./validations.js";
import { setDisableForm } from "./disableForm.js";

export const validateLastName = (lastNameInput, btnForm) => {
  let isNameValid = localStorage.getItem("isNameValid") === 'true' ;
  let isLastNameValid = localStorage.getItem("isLastNameValid") === 'true';
  let isEmailValid = localStorage.getItem("isEmailValid") === 'true';
  let isPasswordValid = localStorage.getItem("isPasswordValid") === 'true';
  const lastNameValue = lastNameInput.value.trim();
  const isLastNameEmpty = lastNameValue.length <= 0;
  const isLastNameText = validateText(lastNameValue);
  const lastNameHintText = document.getElementById("lastNameHintText");

  isLastNameValid = !isLastNameEmpty && isLastNameText;
  localStorage.setItem('isLastNameValid', isLastNameValid);

  setDisableForm(
    isNameValid,
    isLastNameValid,
    isEmailValid,
    isPasswordValid,
    btnForm
  );

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
    lastNameInput.classList.remove("form--error");

    if (lastNameHintText) {
      lastNameHintText.remove();
    }
  }
};
