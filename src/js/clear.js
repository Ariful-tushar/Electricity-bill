import { elements } from "./base";

export const clearInputField = () => {
  elements.previousInput.value = "";
  elements.presentInput.value = "";
};

// export const clearInputError = () => {
//   elements.showInputValError.innerHTML = "";
// };

// export const clearInputValues = () => {
//   elements.showInputValPast.innerHTML = "";
//   elements.showInputValPresent.innerHTML = "";
// };

// export const clearResult = () => {
//   elements.resultTotal.innerHTML = "";
// };

export const clearAll = () => {
  elements.showInputValError.innerHTML = "";
  elements.showInputValPast.innerHTML = "";
  elements.showInputValPresent.innerHTML = "";
  elements.resultTotal.innerHTML = "";
};
