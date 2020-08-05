import * as show from "./show.js";
import { getInputValue } from "./output";
import { clearInputField } from "./clear";

import Bill from "./bill";

const state = {};
export const main = () => {
  const inputValueList = getInputValue();

  const strNumbers = /^[0-9]+\.[0-9]+$/;
  console.log(inputValueList[0]);

  if (
    inputValueList[0].match(strNumbers) &&
    inputValueList[1].match(strNumbers)
  ) {
    show.showInputsVal(inputValueList[0], inputValueList[1]);
    state.bill = new Bill(inputValueList[0], inputValueList[1]);
    const output = state.bill.billTotal();

    if (output[0] < 0) {
      show.showResultError();
    } else {
      show.showResult(output[0], output[1]);
    }
  } else {
    show.showInputError();
  }

  clearInputField();
};
