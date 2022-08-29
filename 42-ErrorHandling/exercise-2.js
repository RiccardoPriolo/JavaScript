class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("The amount provided cannot be negative");
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      try {
        throw new Error("You can't withdraw a negative amount");
      } catch (error) {
        console.error(error);
      }
    }

    if (this.#amount < amount) {
      try {
        throw new Error("You can't withdraw more than account amount");
      } catch (error) {
        amount = 0; 
        console.error("Error: " + error.message);
      }
    }
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

// Handle errors to avoid app crash
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();
