import { getInputValue } from "./output";

export default class Bill {
  constructor(past, present) {
    this.past = past;
    this.present = present;
  }

  priceList() {
    const lists = {
      lessThen75: 75 * 3.8,
      lessThen200: 125 * 5.14,
      lessThen300: 100 * 5.36,
      lessThen400: 100 * 5.63,
      lessThen600: 200 * 8.7,
    };
    return lists;
  }

  billTotal() {
    console.log(this.present);
    console.log(this.past);
    const unitsTotal = parseFloat(this.present) - parseFloat(this.past);
    console.log(unitsTotal);

    if (unitsTotal > 600) {
      const bill =
        this.priceList().lessThen75 +
        this.priceList().lessThen200 +
        this.priceList().lessThen300 +
        this.priceList().lessThen400 +
        this.priceList().lessThen600 +
        (unitsTotal - 600) * 9.98;
      console.log(bill);
    } else if (unitsTotal > 400 && unitsTotal <= 600) {
      const bill =
        this.priceList().lessThen75 +
        this.priceList().lessThen200 +
        this.priceList().lessThen300 +
        this.priceList().lessThen400 +
        (unitsTotal - 400) * 8.7;
      console.log(bill);
    } else if (unitsTotal > 300 && unitsTotal <= 400) {
      const bill =
        this.priceList().lessThen75 +
        this.priceList().lessThen200 +
        this.priceList().lessThen300 +
        (unitsTotal - 300) * 5.63;
      console.log(bill);
    } else if (unitsTotal > 200 && unitsTotal <= 300) {
      const bill =
        this.priceList().lessThen75 +
        this.priceList().lessThen200 +
        (unitsTotal - 200) * 5.36;
      console.log(bill);
    } else if (unitsTotal > 75 && unitsTotal <= 200) {
      const bill = this.priceList().lessThen75 + (unitsTotal - 75) * 5.14;
      console.log(bill);
    } else if (unitsTotal > 0 && unitsTotal <= 75) {
      const bill = unitsTotal * 3.8;
      console.log(bill);
    }
  }
}
