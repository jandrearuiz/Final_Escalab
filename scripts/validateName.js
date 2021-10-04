import { validateText } from "./validations.js";
import { setDisableForm } from "./disableForm.js";

export const validateName = (nameInput, btnForm) => {
  let isNameValid = localStorage.getItem("isNameValid") === 'true' ;
  let isLastNameValid = localStorage.getItem("isLastNameValid") === 'true';
  let isEmailValid = localStorage.getItem("isEmailValid") === 'true';
  let isPasswordValid = localStorage.getItem("isPasswordValid") === 'true';
  const nameValue = nameInput.value.trim();
  const isNameEmpty = nameValue.length <= 0;
  const isNameText = validateText(nameValue);
  const nameHintText = document.getElementById("nameHintText");
  
  isNameValid = !isNameEmpty && isNameText;
  localStorage.setItem('isNameValid', isNameValid);

  setDisableForm(
    isNameValid,
    isLastNameValid,
    isEmailValid,
    isPasswordValid,
    btnForm
  );

  if (!isNameValid) {
    if (!nameHintText) {
      nameInput.classList.add("form--error");
      nameInput.insertAdjacentHTML(
        "afterend",
        '<div id="nameHintText" class="form__hint">El campo no es válido</div>'
      );
    }
  } else {
    nameInput.classList.remove("form--error");

    if (nameHintText) {
      nameHintText.remove();
    }
  }
};
