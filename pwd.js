/* eslint-disable arrow-parens */
/* eslint-disable quotes */

function pwdFunc() {
  process.stdout.write("prompt > ");
  // the stdin 'data' event fires after the user types in a line
  process.stdin.on("data", data => {
    const userInput = data.toString().trim();
    if (userInput === "pwd") {
      process.stdout.write(process.cwd());
    }
    process.stdout.write("\nprompt > ");
  });
}

module.exports = pwdFunc;
