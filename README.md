# Employee Tracker

[Click here to view repository.](https://github.com/anjkrish2608/employee-tracker)

[Click here to view a video of the application functioning.](https://drive.google.com/file/d/1WO7gNZV8USGhKwzZ8ZH-sVZbRKCZoBk2/view)

## Table of Contents

* [Description of Application](#des)
* [Technologies Used](#tech)
* [Challenges Faced](#chall)
* [Features to be Implemented](#dev)
* [Installation Steps](#insta)
* [Tests](#tests)
* [How to Use](#use)
* [Credits](#cred)

<a id="des"></a>

## Description of Application
The Employee Tracker is a CLI application which prompts the user to Add, Update, Delete and View information on the employee_DB. The motivation behind the creation of this application is to streamline the employee management system by automating the process of creating, updating, deleting and viewing certain information stored on the database. 
The application can:
*CREATE*
    * add a new employee, role or department
*READ*
* view the employees and their attributes
* view the employees under a certain manager
* view the roles and their attributes
* view the departments and their attributes
* view certain departments' utilised budget
*UPDATE*
* update an employee's first or last name and their role's or manager's id
* update a role's title, salary or department's id
* update a department's name
*DELETE*
* delete an employee, role or department from the database

<a id="tech"></a>

## Technologies Used
While creating this application I have used many different technologies listed below:

* JavaScript ES6 : to write all of the code inside server.js
* Node JS : to run the server.js file
* Inquirer Package : to ask the user for input
* MYSQL Package : to access the database I created
* Console.Table Package : to create a simple standard output for all tables

<a id="chall"></a>

## Challenges Faced
Throughout the creation of this application I have faced many challenges. The main challenge I faced was due to syntax of course. When first implementing the add functions I was using incorrect syntax and kept returning an error. After much trial and error I finally saw the mistake in my syntax and learned from this. I found that at the beginning of this week I would not hae been able to complete this task but after repetitive revision and application I found that this task has helped me to understanf MYSQL.

<a id="dev"></a>

## Features to be Implemented
In the future I would like to change the structure of the prompts so that the options are clearly available to the user for example the budget ability is not initially obvious to the user or the deleting capability.

<a id="insta"></a>

## Installation Steps
1. Download Node.js
2. Download server.js to a folder.
3. Run the terminal in that folder and write the following commands:
```
npm init
npm install
npm install --save inquirer mysql console.table
```
4. Set your mysql port to satisfy:
```
host: "localhost",
port: 3306,
user: "root",
password: "anj",
database: "employee_DB"
```
5. Run the following code in mysql:
```
ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "anj"
```

6. Open schema.sql and seed.sql in mysql and run them respectively.
7. Run the server.js file in the console using the command:
```
node server.js
```

<a id="tests"></a>

## Tests
There are currently no tests for this application.

<a id="use"></a>

## How to Use
After following the Installation steps you will be prompted with a series of options, continue to use the application how you wish.

<a id="cred"></a>

## Credits
As mentioned in [Technologies Used](#tech) the following assets were used:
* [JavaScript ES6](https://www.javascript.com/)
* [Node JS](https://nodejs.org/en/)
* [Inquirer Package](https://www.npmjs.com/package/inquirer)
* [MYSQL Package](https://www.npmjs.com/package/mysql)
* [Console.Table Package](https://www.npmjs.com/package/console.table)
Furthermore the requirements set for this application were supplied by Trilogy Education Services.

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.