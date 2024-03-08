// Pricing.js

import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, 'amount');
    this._currency = this.validateCurrency(currency, 'currency');
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount, 'amount');
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency, 'currency');
  }

  // Method to display full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on the conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Validation function for numbers
  /* eslint-disable class-methods-use-this */
  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Validation function for Currency objects
  validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }
  /* eslint-enable class-methods-use-this */
}

export default Pricing;
