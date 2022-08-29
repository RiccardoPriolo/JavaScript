const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push('Marco') // presumo che aggiungere un elemento non cambia il valore dell'array.
}

addStudent('Marco');
console.log(students);