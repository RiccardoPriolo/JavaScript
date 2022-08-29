class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative

    if (amount < 0) {
      throw new Error("Error: you can't deposit a negative amount");
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount

    if (amount < 0) {
      throw new Error("Error: you can't withdraw a negative amount");
    }

    if (this.#amount < amount) {
      throw new Error("Error: you can't withdraw more than account amount");
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
