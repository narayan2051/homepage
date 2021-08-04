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





class Computer {
  constructor(ram, cpu, storage) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
  }
  runProgram(program) {
    console.log(program + " running")
  }
}

class Laptop extends Computer {
  constructor(ram, cpu, storage, battery) {
    super(ram, cpu, storage);
    this.battery = battery;
  }
  carryAround() {
    console.log("carrying laptop:  cpu" + this.cpu + " ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery)
  }
}