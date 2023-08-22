let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
/*
const handleUserInput = function () {
  // your code here
  connect.on("data", (data) => {
    console.log("Server says: ", data);
  });
};
*/
const handleUserInput = function (key) {
  if (key === "P") {
    connection.write("Say: Hello, everyone!");
  } else if (key === "\u0003") {
    // this line is to handle ctrl+c inputs to terminate the program
    process.exit();
  }

  if (key === "w") {
    console.log("up");
  }

  if (key === "a") {
    console.log("left");
  }

  if (key === "s") {
    console.log("down");
  }

  if (key === "d") {
    console.log("right");
  }
};

module.exports = { setupInput };
