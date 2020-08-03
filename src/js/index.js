import Bill from "./bill";

import { getInputValue, clearInput } from "./output";

const state = {};
const calTotal = () => {
  document.querySelector(".submit").addEventListener("submit", () => {
    getInputValue(() => {
      clearInput();
    });
  });
  document.addEventListener("keypress", (event) => {
    if (event.keypress === 13 || event.which === 13) {
      getInputValue(() => {
        clearInput();
      });

      state.bill = new Bill();
      state.bill.billTotal();
      // const h = Inputs.getInputValue().x;
      // console.log(h);
    }
  });
  // state.bill = new Bill();
  // console.log(state.bill);
  // console.log(state.inputs);
};

calTotal();

// document.addEventListener("keypress", (event) => funct.func);

console.log("hello123");
