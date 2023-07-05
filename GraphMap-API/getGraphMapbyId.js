const { getGrapghMapbyId } = require("../TwinCentralAPI");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("# What's the Id ?", async (Id) => {
  console.log(Id, "Id");

  const response = await getGrapghMapbyId(parseInt(Id));
  console.log(response);
  console.log(
    "#################################################################################"
  );
  rl.close();
});
