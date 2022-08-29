class BankAccount {
  amount = 0;

  constructor(amount) {
    this.amount = amount;
  }

  deposit(cash) {
    this.amount += cash;
    return this.amount;
  }
  
  withdraw(cash) {
    this.amount -= cash;
    return this.amount;
  }

  view() {
    console.log(this.amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
