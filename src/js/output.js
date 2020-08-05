import { elements } from "./base";

//Get the input elements
export const getInputValue = () => {
  // Selecting the input element and get their value
  const inputValPast = elements.previousInput.value;
  const inputValPresent = elements.presentInput.value;

  //convert input values to float integer and return as a list
  const values = [
    parseFloat(inputValPast).toFixed(2),
    parseFloat(inputValPresent).toFixed(2),
  ];
  return values;
};

//clear the input fileds
