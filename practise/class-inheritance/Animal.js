class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, jump) {
    super(name);
    this.jump = jump;
  }
  rabitDetails() {
    console.log(this.name + " " + "jumps " + this.jump);
  }
}

let rabit = new Rabbit("XyzName", true);
rabit.rabitDetails();