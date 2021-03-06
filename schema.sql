DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE employeeTable (
  id INT NOT NULL auto_increment,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roleTable (
  id INT NOT NULL auto_increment,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE departmentTable (
  id INT NOT NULL auto_increment,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

SELECT * FROM employeeTable;
SELECT * FROM roleTable;
SELECT * FROM departmentTable;