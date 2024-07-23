"use strict";

// Here person is the parent class
// Here student is the child class
// Here extends(Inheritance between classess, automatically sets prototype)
class Student extends Person {
  // Public field(similar to property, available on created object)
  university = "university of lisbon";
  // Private fields(not accesible outside of class)
  #studyHours = 0;
  #course;
  // Static public field(available only on class)
  static numsubjects = 10;

  // Constructor method, called by new operator. Mandatory in regular class
  // might be omitted in a child class.
  constructor(fullName, birthYear, startYear, course) {
    // Call to parent(super) class (necessary with extend). Needs to happen
    // before accessing this
    super(fullName, birthYear);

    //Instance property (available on created object)
    this.startYear = startYear;

    // Ṛedifining private field
    this.#course = course;
  }
  // Public method
  introduce() {
    console.log(`Something`);
  }

  study(h) {
    // Referencing private field and method
    this.#makeCoffee();
    this.#studyHours += h;
  }

  // Private method (Might not yet work
  // in your browser. "Fake" alternative: _instead of #)
  #makeCoffee() {
    return "Here is a coffee for you";
  }

  // Getter method
  get testScore() {
    return this._testScore;
  }

  // Setter method (use _to set property with same name as method, and also add getter)
  set testScore(score) {
    this._testScore = score < 20 ? score : 0;
  }

  // Static method (available only on class. Can not access
  // instance properties nor methods, only static ones)
  static printCurriculum() {
    console.log(`There are ${this.numsubjects} subjects`);
  }
}

const student = new Student("Jonas", 2020, 2037, "Medicine");
