USE employee_DB;

INSERT INTO departmentTable(name)
VALUES("IT"),("Accounting"),("Construction");

INSERT INTO roleTable(title,salary,department_id)
VALUES("Head of IT",50000,1),("Head of Accounting",100000,2),("Head of Construction",70000,3);

INSERT INTO employeeTable(first_name,last_name,role_id,manager_id)
VALUES("Anjini","Krishnan", 1,0),("Sharmani","Krishnan",2,1),("Ben","Duregon",3,2);

SELECT * FROM employeeTable;
SELECT * FROM roleTable;
SELECT * FROM departmentTable;
UPDATE employeeTable SET first_name = 'Sarah' WHERE id = 4;
