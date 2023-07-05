const { getGraphMap } = require("../TwinCentralAPI");

getGraphMap()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
