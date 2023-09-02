export class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(amount) || amount <= 0) reject('Invalid amount');

        this.balance += Number(amount);
        resolve(this.balance);
      }, 1000);
    });
  }
  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(amount) || amount <= 0) reject('Invalid amount');
        if (amount > this.balance) reject('Saldo kurang');

        this.balance -= amount;
        resolve(this.balance);
      }, 1000);
    });
  }
}
