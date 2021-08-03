class Bank {

  constructor() {
    this._accounts = [];
  }

  static nextNumber = 1;
  addAccount() {
    this._accounts.push(new Account(Bank.nextNumber));
    Bank.nextNumber = Bank.nextNumber + 1;
    console.log(this._accounts.length);
    return this._accounts.length;
  }

  addSavingsAccount(interest) {
    this._accounts.push(new SavingAccount(Bank.nextNumber, interest));
    Bank.nextNumber = Bank.nextNumber + 1;
    return this._accounts.length;
  }

  addCheckingAccount(overdraft) {
    this._accounts.push(new CheckingAccount(Bank.nextNumber, overdraft));
    Bank.nextNumber = Bank.nextNumber + 1;
    return this._accounts.length;
  }

  closeAccount(number) {
    this._accounts = this._accounts.filter(acc => { return acc._number !== number });
    return this._accounts.length;
  }

  accountReport() {
    return this._accounts.filter(acc => acc instanceof Account).map(acc => acc.toString()).join("\n");
  }

  endOfMonth() {
    return this._accounts.map(elem => {
      return elem.endOfMonth();
    }).toString().replace(",", "\n");
  }
}