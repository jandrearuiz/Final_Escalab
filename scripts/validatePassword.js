import { setDisableForm } from "./disableForm.js";

export const validatePassword = (passwordInput, btnForm) => {
  let isNameValid = localStorage.getItem("isNameValid") === "true";
  let isLastNameValid = localStorage.getItem("isLastNameValid") === "true";
  let isEmailValid = localStorage.getItem("isEmailValid") === "true";
  let isPasswordValid = localStorage.getItem("isPasswordValid") === "true";
  const passwordValue = passwordInput.value.trim();
  const isPasswordEmpty = passwordValue.length <= 0;
  const isPasswordRange = passwordValue.length >= 4 && passwordValue.length <= 6;
  const passwordHintText = document.getElementById("passwordHintText");
  
  isPasswordValid = !isPasswordEmpty && isPasswordRange;
  localStorage.setItem("isPasswordValid", isPasswordValid);

  setDisableForm(
    isNameValid,
    isLastNameValid,
    isEmailValid,
    isPasswordValid,
    btnForm
  );

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
    passwordInput.classList.remove("form--error");

    if (passwordHintText) {
      passwordHintText.remove();
    }
  }
};
