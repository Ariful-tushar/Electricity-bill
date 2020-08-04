import Bill from "./bill";

import { getInputValue, clearInput } from "./output";

const state = {};
const calTotal = () => {
  document.querySelector(".submit").addEventListener("click", () => {
    const inputValueList = getInputValue();

    clearInput();

    state.bill = new Bill(inputValueList[0], inputValueList[1]);
    state.bill.billTotal();
  });
  document.addEventListener("keypress", (event) => {
    if (event.keypress === 13 || event.which === 13) {
      event.preventDefault();
      const inputValueList = getInputValue();

      clearInput();

      state.bill = new Bill(inputValueList[0], inputValueList[1]);
      state.bill.billTotal();
    }
  });
};

calTotal();

console.log("hello123");
