class CheckingAccount extends Account {
  constructor(number, odLimit) {
    super(number);
    this._odLimit = odLimit;
  }

  getOdLimit() {
    return this._odLimit;
  }
  setOdLimit(odLimit) {
    this._odLimit = odLimit;
  }
  withdraw(amount) {
    if (this.getBalance() + this._odLimit < amount) {
      throw new RangeError("You have " + this._odLimit + " limit to withdraw");
    } else {
      this._balance = this._balance - amount;
    }

  }
  toString() {
    return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + " the limit " + this._odLimit;
  }
  endOfMonth() {
    if (this.getBalance() < 0) {
      return "Warning, low balance CheckingAccount " + this.getNumber() + ": balance: " + this.getBalance() + " overdraft limit:" + this.getOdLimit();
    } else {
      return "";
    }
  }
}