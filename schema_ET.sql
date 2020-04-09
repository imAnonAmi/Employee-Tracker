DROP DATABASE IF EXISTS Employee_Tracker;

CREATE DATABASE Employee_Tracker;

USE Employee_Tracker;

CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE role(
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE employee(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL,
PRIMARY KEY(id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

-- Make some seed value departments
INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Shipping");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Operations");
INSERT INTO department (name) VALUES ("Management");

-- Make some seed value roles
INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 35000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Shipping Associate", 30000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Lawyer", 40000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Operations Associate", 30000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Manager", 50000, 5);

-- Make some seed value employees
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Bruce", "Willis", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Danny", "Glover", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Charlize", "Theron", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Linda", "Hamilton", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Saul", "Goodman", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Wee", "Bay", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Stringer", "Bell", 5);

