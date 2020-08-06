import { main } from "./main";
import { elements } from "./base";
import { clearAll } from "./clear";

const calculateTotal = () => {
  elements.submit.addEventListener("click", () => {
    clearAll();
    main();
  });
  document.addEventListener("keypress", (event) => {
    if (event.keypress === 13 || event.which === 13) {
      clearAll();
      main();
    }
  });
};

calculateTotal();
