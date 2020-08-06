const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleLogTable =require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "anj",
  database: "employee_DB"
});
connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer.prompt([
      {
    name: "action",
    type: "rawlist",
    message: "What would you like to do?",
    choices: [
      "Add",
      "View",
      "Update",
    "End"]
  },
  {
    name: "type",
    type: "rawlist",
    message: "Which group would you like to change?",
    choices: [
      "Employees",
      "Roles",
      "Departments"]
  }
]).then(function (res) {

    switch (res.action) {
      case "Add":
        addToDatabase(res.type);
        break;

      case "View":
        viewDatabase(res.type);
        break;

      case "Update":
        updateDatabase(res.type);
        break;
    
        case "End":
        endSearch();
        break;
    }

  });
}



function endSearch() {
  console.log("Thank you for using my application. Goodbye for now.");
  connection.end();
}