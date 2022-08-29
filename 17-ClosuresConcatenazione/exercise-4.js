function calculate() {
  let appoggio = 0;
  return (operation = {
    add: function (number) {
      appoggio = appoggio + number;
      return this;
    },
    multiply: function (number) {
      appoggio = appoggio * number;
      return this;
    },
    sub: function (number) {
      appoggio = appoggio - number;
      return this;
    },
    divide: function (number) {
      appoggio = appoggio / number;
      return this;
    },
    printResult: function (number) {
      console.log(appoggio);
    },
  });
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
