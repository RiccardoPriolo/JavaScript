const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

/* 
Attraverso il metodo utilizzato, possiamo notare come al variare della proprietà del secondo oggetto, 
varierà anche quella del primo oggetto. Ciò è dovuto perchè facciamo riferimento
alle stesse varibili allocate nella stessa stack memory. Sostanzialmente, non facciamo altro che "creare" 
un "nuovo" object, al cui interno saranno presenti le stesse variabili di riferimento. 
E' dunque chiaro che a prescindere da quale dei due object andremo a variare, la variazione sarà visibile in entrambi. 
*/
