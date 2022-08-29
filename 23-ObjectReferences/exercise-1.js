const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

for (const entries of Object.keys(person)) {
  console.log(entries, person[entries]);
}

// const entries = Object.keys(person);

// for (let i = 0; i < entries.length; i++) {
//   console.log(`${entries[i]}: ${person[entries[i]]}`);
// }

// for (let entries in person) {
//   console.log(entries, person[entries]);
// }

// Print values of person using Object.keys
