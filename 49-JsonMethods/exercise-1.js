class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // toJson() {
  //   return JSON.stringify(this);
  // }
}

const developer = new Person(1, "Mario", "Rossi", 25);

let json = JSON.stringify(developer);

console.log(json);

// console.log(developer.toJson());

// Print developer as json object
