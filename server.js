const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleLogTable = require("console.table");

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


function addToDatabase(table) {
    switch (table) {
        case "Employees":
            inquirer.prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "Enter the first name of the employee: "
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "Enter the last name of the employee: "
                },
                {
                    name: "role_id",
                    type: "number",
                    message: "Enter the role id of the employee: "
                },
                {
                    name: "manager_id",
                    type: "input",
                    message: "Enter the manager of the employee: ",
                    default: 0
                }
            ]).then(function (res) {
                var query = "INSERT INTO employeeTable VALUES (?,?,?,?)";
                connection.query(query, { first_name: res.first_name }, { last_name: res.last_name }, { role_id: res.role_id }, { manager_id: res.manager_id }, function (res) {
                    console.log("New employee added to the database!");
                    runSearch();
                });
            });


            break;

        case "Roles":
            inquirer.prompt([
                {
                    name: "title",
                    type: "input",
                    message: "Enter the title of the role: "
                },
                {
                    name: "salary",
                    type: "number",
                    message: "Enter the salary of the role: "
                },
                {
                    name: "department_id",
                    type: "number",
                    message: "Enter the department id of the role: "
                }
            ]).then(function (res) {
                var query = "INSERT INTO roleTable VALUES (?,?,?)";
                connection.query(query, { title: res.title}, { salary: res.salary }, { department_id: res.department_id }, function (res) {
                    console.log("New role added to the database!");
                    runSearch();
                });
            });

            break;

        case "Departments":
            inquirer.prompt([{
                    name: "name",
                    type: "input",
                    message: "Enter the name of the department: "
                }]).then(function (res) {
                var query = "INSERT INTO departmentTable VALUES (?)";
                connection.query(query, { name: res.name }, function (res) {
                    console.log("New department added to the database!");
                    runSearch();
                });
            });

            break;
    }

}

function viewDatabase(table) {
    switch (table) {
        case "Employees":

            break;

        case "Roles":

            break;

        case "Departments":

            break;
    }
}

function updateDatabase(table) {
    switch (table) {
        case "Employees":

            break;

        case "Roles":

            break;

        case "Departments":

            break;
    }
}

function endSearch() {
    console.log("Thank you for using my application. Goodbye for now.");
    connection.end();
}