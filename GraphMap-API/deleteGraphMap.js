const { deleteGraphMap } = require("../TwinCentralAPI");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("# What's the Id ?", async (Id) => {
  const response = await deleteGraphMap(parseInt(Id));
  console.log(response);
  console.log(
    "#################################################################################"
  );
  rl.close();
});
