const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
// readline.question("Enter Number: ",(ans)=>{console.log(ans);       readline.close();
// });
sumNumberRecursively = (sum) => {
  readline.question("Enter Number: ", (num) => {
    if (num === "stop") {
      readline.close();
      console.log("sum=" + sum);
    }
    return sumNumberRecursively((sum || 0) + parseInt(num));
  });
};
sumNumberRecursively();
