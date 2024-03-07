// HolbertonCourse.js

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, 'name');
    this._length = this.validateNumber(length, 'length');
    this._students = this.validateArray(students, 'students');
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'name');
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength, 'length');
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents, 'students');
  }

  // Validation functions
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array`);
    }
    return value;
  }
}
