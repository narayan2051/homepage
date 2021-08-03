



describe("Validating account number", function () {
  it("validating get number", () => {
    let account = new Account("129321DS");
    assert.equal(account.getNumber(), "129321DS");
  })
});

describe("Validating with default balance", function () {
  it("validating default balance 0.", () => {
    let account = new Account("129321DS");
    assert.equal(account.getBalance(), 0);
  });
});

describe("Validating after depositing 5000", function () {
  it("validating after adding 5000 balance. Balance should be 5000", () => {
    let account = new Account("129321DS");
    account.deposit(5000);
    assert.equal(account.getBalance(), 5000);
  })
});

describe("Validating after withdraw 500", function () {
  it("validating after withdraw 500 from balance. Balance should be 4500", () => {
    let account = new Account("129321DS");
    account.deposit(5000);
    account.withdraw(500);
    assert.equal(account.getBalance(), 4500);
  });
});

describe("Validating by depositing 5000 and withdraw withdraw 5500", function () {
  it("Should throw Range error", () => {
    let account = new Account("129321DS");
    account.deposit(5000);
    try {
      account.withdraw(25000);
    } catch (err) {
      assert.equal(err.message, "Insufficient funds");
    }

  });
});

describe("Validating toString", function () {
  it("toString check", () => {
    let account = new Account("129321DS");
    account.deposit(5000);
    account.withdraw(500);
    assert.equal(account.toString(), "Account " + "129321DS" + ": balance " + 4500);
  });
});

describe("Validating add interest on saving account", function () {
  it("Adding interest to saving account", () => {
    let account = new SavingAccount("129321DS", 15);
    account.deposit(5000);
    account.addInterest();
    assert.equal(account.getBalance(), 5750);
  });
});

describe("Validating the interest rate on saving account", function () {
  it("validating getInterest function", () => {
    let account = new SavingAccount("129321DS", 15);
    account.deposit(5000);
    assert.equal(account.getInterest(), 15);
  });
});

describe("Validating Checking account", function () {
  it("Checking overdraft(limit)", () => {
    let account = new CheckingAccount("129321DS", 1500);
    account.deposit(5000);
    assert.equal(account.getOdLimit(), 1500);
  });
});

describe("Validating Checking account", function () {
  it("Checking withdraw function", () => {
    let account = new CheckingAccount("129321DS", 100);
    account.deposit(5000);
    try {
      account.withdraw(8000);
    } catch (e) {
     // console.log(e.message);
      assert.equal(e.message, "You have " + account.getOdLimit() + " limit to withdraw");
    }
  });
});

describe("Validating Checking account", function () {
  it("To string method", () => {
    let account = new CheckingAccount("129321DS", 1500);
    account.deposit(5000);
    account.setOdLimit(2000);
    assert.equal(account.toString(), "Checking Account " + account.getNumber() + ": balance " + account.getBalance() + " the limit " + account.getOdLimit());
  });
});

describe("Validating Bank Class Method", function () {
  it("Add Account test", () => {
    let bank = new Bank();
    assert.equal(bank.addAccount(), 1);
  });
});

describe("Validating Bank Class Method", function () {
  it("Add Saving Account test", () => {
    let bank = new Bank();
    bank.addSavingsAccount();
    assert.equal(bank.addSavingsAccount(), 2);
  });
});

describe("Validating Bank Class Method", function () {
  it("Add Saving Account test", () => {
    let bank = new Bank();
    bank.addCheckingAccount(1500);
    bank.addCheckingAccount(1500);
    assert.equal(bank.addCheckingAccount(2000), 3);
  });
});

describe("Validating Bank Class Method", function () {
  it("Add Saving Account test", () => {
    let bank = new Bank();
    bank.addCheckingAccount(1500);
    bank.addCheckingAccount(1500);
    bank.addCheckingAccount(1500);
    console.log(Bank.nextNumber);
    assert.equal(bank.closeAccount(7), 2);
  });
});

describe("Validating Bank Class Method:bankReport", function () {
  it("Bank Report Test", () => {
    let bank = new Bank();
    bank.addCheckingAccount(1500);
    bank.addCheckingAccount(1500);
    bank.addCheckingAccount(1500);
    assert.equal(bank.accountReport(), "Checking Account 10: balance 0 the limit 1500\nChecking Account 11: balance 0 the limit 1500\nChecking Account 12: balance 0 the limit 1500");
  });
});

describe("Validating Bank Class Method:endOfMonth", function () {
  it("validating  test", () => {
    let bank = new Bank();
    bank.addSavingsAccount(15.5);
    bank._accounts[bank._accounts.length - 1].deposit(5000);
    bank.addCheckingAccount(1500);
    bank._accounts[bank._accounts.length - 1].withdraw(500);
    assert.equal(bank.endOfMonth(), "Interest added SavingAccount 13: balance:5775 interest: 15.5\nWarning, low balance CheckingAccount 14: balance: -500 overdraft limit:1500");
  });
});