import { elements } from "./base";

export const showInputsVal = (past, present) => {
  elements.showInputValPast.innerHTML = `Your previous meter reading is ${past} units`;
  elements.showInputValPresent.innerHTML = `Your Present meter reading is ${present} units`;
};

export const showInputError = () => {
  elements.showInputValError.insertAdjacentHTML(
    "afterbegin",
    "<p>Please Enter any numbers!<p>"
  );
};

export const showResult = (units, bills) => {
  elements.resultTotal.innerHTML = `You have consumed ${units} units and your electricity bill is ${bills} tk`;
};

export const showResultError = () => {
  elements.resultTotal.innerHTML = `Previous meter readings can't be greater then present meter readings!!!!`;
};
