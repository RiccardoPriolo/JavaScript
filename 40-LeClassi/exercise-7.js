class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  _firstName = "";
  _lastName = "";
  _age = 0;

  get firstName() {
    return this._firstName;
  }

  set firstName(name) {
    return (this._firstName = name);
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(name) {
    return (this._lastName = name);
  }
  get age() {
    return this._age;
  }

  set age(number) {
    return (this._age = number);
  }

  get fullName() {
    return `${this._firstName}${this._lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
