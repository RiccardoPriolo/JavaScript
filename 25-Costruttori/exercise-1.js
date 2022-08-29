const person = {
  firstName: "",
  lastName: "",
  get firstNameProp() {
    return this.firstName;
  },
  set firstNameProp(name) {
    return (this.firstName = name);
  },
  get lastNameProp() {
    return this.lastName;
  },
  set lastNameProp(name) {
    return (this.lastName = name);
  },

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const john = Object.create(person);
const simon = Object.create(person);

john.firstNameProp = "John";
john.lastNameProp = "Doe";
simon.firstNameProp = "Simon";
simon.lastNameProp = "Collins";

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
