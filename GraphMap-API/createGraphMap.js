const { createGraphMap } = require("../TwinCentralAPI");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("********* Create GraphMap *************");
rl.question("id: ", async (id) => {
  rl.question("name: ", async (name) => {
    rl.question("description: ", async (description) => {
      rl.question("typeID: ", async (typeID) => {
        rl.question("datasourceID: ", async (datasourceID) => {
          rl.question("selectString: ", async (selectString) => {
            rl.question("attributeList: ", async (attributeList) => {
              rl.question("createdBy: ", async (createdBy) => {
                rl.question("createdOn: ", async (createdOn) => {
                  rl.question("updatedBy: ", async (updatedBy) => {
                    rl.question("updatedOn: ", async (updatedOn) => {
                      rl.question(
                        "Is Active? (true/false): ",
                        async (isActive) => {
                          rl.question("rowVersion: ", async (rowVersion) => {
                            // Create an object with the entered data
                            const response = await createGraphMap(
                              parseInt(id),
                              name,
                              description,
                              parseInt(typeID),
                              parseInt(datasourceID),
                              selectString,
                              attributeList,
                              createdBy,
                              createdOn,
                              updatedBy,
                              updatedOn,
                              isActive,
                              rowVersion
                            );
                            console.log(response);
                            rl.close();
                          });
                        }
                      );
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
