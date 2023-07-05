const { getGraphMapbyUserId } = require("../TwinCentralAPI");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("# What's the UserId ?", async (UserId) => {
  //   console.log(Id, "Id");

  const response = await getGraphMapbyUserId(parseInt(UserId));
  console.log(response);
  console.log(
    "#################################################################################"
  );
  rl.close();
});
