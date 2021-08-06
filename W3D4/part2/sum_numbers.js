const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sumNumberRecursively = (sum) => {
  readline.question("Enter Number: ", (num) => {
    if (num === "stop") {
      readline.close();
      console.log("sum=" + sum);
      return;
    }
    return sumNumberRecursively((sum || 0) + parseInt(num));
  });
};
sumNumberRecursively();
