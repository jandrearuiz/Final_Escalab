export const setDisableForm = (isNameValid, isLastNameValid, isEmailValid, isPasswordValid, btnForm) => {
  console.log(isNameValid, isLastNameValid, isEmailValid, isPasswordValid, btnForm);
  if (isNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
    btnForm.removeAttribute("disabled");
  } else {
    btnForm.setAttribute("disabled", true)
  }
};
