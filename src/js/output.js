//Get inputs
export const getInputValue = () => {
  // Selecting the input element and get its value
  const inputValPast = document.getElementById("myInputPast").value;

  const inputValPresent = document.getElementById("myInputPresent").value;

  document.getElementById(
    "inputvalPast"
  ).innerHTML = `You entered: ${inputValPast}`;

  document.getElementById(
    "inputvalPresent"
  ).innerHTML = `You entered: ${inputValPresent}`;

  const values = [inputValPast, inputValPresent];

  return values;
};

export const clearInput = () => {
  document.getElementById("myInputPast").value = "";
  document.getElementById("myInputPresent").value = "";
};
