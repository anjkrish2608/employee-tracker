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
                "Departments",
                "End"]
        }
    ]).then(function (res) {

        switch (res.action) {
            case "Add":
                switch (res.type) {
                    case "Employees":
                        addEmployee();
                        break;

                    case "Roles":
                        addRole();
                        break;

                    case "Departments":
                        addDepartment();
                        break;

                }
                break;

            case "View":
                switch (res.type) {
                    case "Employees":
                        viewEmployees();
                        break;

                    case "Roles":
                        viewRoles();
                        break;

                    case "Departments":
                        viewDepartments();
                        break;

                }
                break;

            case "Update":
                switch (res.type) {
                    case "Employees":
                        updateEmployee();
                        break;

                    case "Roles":
                        updateRole();
                        break;

                    case "Departments":
                        updateDepartment();
                        break;

                }
                break;

            case "End":
                endSearch();
                break;
        }

    });
}

//add functiona
function addEmployee() {
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
            type: "number",
            message: "Enter the manager of the employee: ",
            default: 0
        }
    ]).then(function (answer) {
        var query = "INSERT INTO employeeTable(first_name,last_name,role_id,manager_id) VALUES (?,?,?,?);";
        console.log(query, answer.first_name, answer.last_name, answer.role_id, answer.manager_id);
        connection.query(query, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, res) {
            if (err) throw err;
            console.log("New employee added to the database!");
            runSearch();
        });
    });
}

function addRole() {
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
        var query = "INSERT INTO roleTable(title,salary,department_id) VALUES (?,?,?);";
        connection.query(query, [res.title, res.salary, res.department_id], function (res) {
            console.log("New role added to the database!");
            runSearch();
        });
    });
}

function addDepartment() {
    inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter the name of the department: "
    }]).then(function (res) {
        var query = "INSERT INTO departmentTable(name) VALUES (?);";
        connection.query(query, [res.name], function (res) {
            console.log("New department added to the database!");
            runSearch();
        });
    });
}

//view functions
function viewEmployees() {
    var query = connection.query("SELECT * FROM employeeTable;", function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function viewRoles() {
    var query = connection.query("SELECT * FROM roleTable;", function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

function viewDepartments() {
    var query = connection.query("SELECT * FROM departmentTable;", function (err, res) {
        if (err) throw err;
        console.table(res);
        runSearch();
    });
}

//update functions
function updateEmployee() {
    inquirer.prompt([
        {
            name: "employee",
            type: "number",
            message: "Enter the id of the employee you would like to change: "
        }, {
            name: "type",
            type: "rawlist",
            message: "What would you like to change: ",
            choices: [
                "first_name",
                "last_name",
                "role_id",
                "manager_id",
            "Delete this employee"]
        }, {
            name: "change",
            type: "input",
            message: "What would you like it to be: (if n/a ENTER) "
        }
    ]).then(function (answer) {
        if (answer.type === "role_id") {
            answer.change = parseInt(answer.change);
            var query = "UPDATE employeeTable SET role_id = ? WHERE id = ?";
            connection.query(query, [answer.change, answer.employee], function (err, res) {
                if (err) throw err;
                console.log("Employee information updated in the database!");
                runSearch();
            });
        }
        else if (answer.type === "manager_id") {
            answer.change = parseInt(answer.change);
            var query = "UPDATE employeeTable SET manager_id = ? WHERE id = ?";
            connection.query(query, [answer.change, answer.employee], function (err, res) {
                if (err) throw err;
                console.log("Employee information updated in the database!");
                runSearch();
            });
        }
        else if (answer.type === "first_name") {
            var query = "UPDATE employeeTable SET first_name = ? WHERE id = ?";
            connection.query(query, [answer.change, answer.employee], function (err, res) {
                if (err) throw err;
                console.log("Employee information updated in the database!");
                runSearch();
            });
        }
        else if (answer.type === "Delete this employee") {
            var query = "DELETE FROM employeeTable WHERE id = ?";
            connection.query(query, [answer.employee], function (err, res) {
                if (err) throw err;
                console.log("Employee deleted from the database!");
                runSearch();
            });
        }
        else {
            var query = "UPDATE employeeTable SET last_name = ? WHERE id = ?";
            connection.query(query, [answer.change, answer.employee], function (err, res) {
                if (err) throw err;
                console.log("Employee information updated in the database!");
                runSearch();
            });
        }

    });
}

function updateRole() {
    inquirer.prompt([
        {
            name: "role",
            type: "number",
            message: "Enter the id of the role you would like to change: "
        }, {
            name: "type",
            type: "rawlist",
            message: "What would you like to change: ",
            choices: [
                "Title",
                "Salary",
                "Department_ID",
                "Delete this role"]
        }, {
            name: "change",
            type: "input",
            message: "What would you like it to be: (if n/a ENTER)"
        }
    ]).then(function (answer) {
        if (answer.type === "Department_ID") {
            answer.change = parseInt(answer.change);
            var query = "UPDATE roleTable SET department_id = ? WHERE id = ?";
            connection.query(query, [answer.change, answer.role], function (err, res) {
                if (err) throw err;
                console.log("Role information updated in the database!");
                runSearch();
            });
        }
        else if (answer.type === "Title") {
            var query = "UPDATE roleTable SET title = ? WHERE id = ?";
            connection.query(query, [answer.change, answer.role], function (err, res) {
                if (err) throw err;
                console.log("Role information updated in the database!");
                runSearch();
            });
        }
        else if (answer.type === "Delete this role") {
            var query = "DELETE FROM roleTable WHERE id = ?";
            connection.query(query, [answer.role], function (err, res) {
                if (err) throw err;
                console.log("Role deleted from the database!");
                runSearch();
            });
        }
        else{
            answer.change = parseInt(answer.change);
            var query = "UPDATE roleTable SET salary = ? WHERE id = ?";
            connection.query(query, [answer.change, answer.role], function (err, res) {
                if (err) throw err;
                console.log("Role information updated in the database!");
                runSearch();
            });
        }

    });
}

function updateDepartment() {
    inquirer.prompt([
        {
            name: "department",
            type: "number",
            message: "Enter the id of the department you would like to change: "
        }, {
            name: "type",
            type: "rawlist",
            message: "What would you like to change: ",
            choices: [
                "Name of Department",
                "Delete this department"]
        }, {
            name: "change",
            type: "input",
            message: "What would you like it to be: (if n/a ENTER)"
        }
    ]).then(function (answer) {
        if (answer.type === "Delete this department") {
            var query = "DELETE FROM departmentTable WHERE id = ?";
            connection.query(query, [answer.department], function (err, res) {
                if (err) throw err;
                console.log("Department deleted from the database!");
                runSearch();
            });
        }
        else{
            var query = "UPDATE departmentTable SET name = ? WHERE id = ?";
            connection.query(query, [answer.change, answer.department], function (err, res) {
                if (err) throw err;
                console.log("Department information updated in the database!");
                runSearch();
            });
        }

    });
}

//closing application and ending connection
function endSearch() {
    console.log("Thank you for using my application. Goodbye for now.");
    connection.end();
}