/* eslint-disable arrow-parens */
/* eslint-disable quotes */

// require this native node module fs
// VERY POWERFUL :) allows us to access the machine's files system
const fs = require("fs");

// function that contains our ls functionality
// when user types ls - execute this function

// readdir allows us to get all the files in a directory
function ls() {
  process.stdin.on("data", data => {
    const userInput = data.toString().trim();
    if (userInput === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          console.log("\nCurrent directory filesnames:");
          process.stdout.write(files.join("\n"));
          process.stdout.write("prompt > ");
        }
      });
    }
  });
}

module.exports = ls;
