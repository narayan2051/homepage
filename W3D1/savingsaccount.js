class SavingAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }
  setInterest(interest) {
    this._interest = interest;
  }
  getInterest() {
    return this._interest;
  }
  addInterest() {
    this._balance += this._balance * (this._interest / 100);
  }

  toString() {
    return "Saving Account " + this._number + ": balance " + this._balance;
  }

  endOfMonth() {
    this.addInterest();
    return "Interest added SavingAccount " + this.getNumber() + ": balance:" + this.getBalance() + " interest: " + this.getInterest();
  }

}