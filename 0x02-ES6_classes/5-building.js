class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = Building.validateNumber(sqft, 'sqft');
  }

  // Abstract method, should be implemented by subclasses
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // Validation function for numbers
  static validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  // Validation function for class method usage
  static validateMethodUsage() {
    // Add your implementation here
  }
}

export default Building;
