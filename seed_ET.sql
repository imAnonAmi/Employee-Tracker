USE employee_tracker;

-- Make some seed value departments
INSERT INTO department (name) VALUES ("Sales"),
("Shipping"),
("Legal"),
("Operations"),
("Management");

-- Make some seed value roles
INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 35000, 1),
("Shipping Associate", 30000, 2),
("Lawyer", 40000, 3),
("Operations Associate", 30000, 4),
("Manager", 50000, 5);

-- Make some seed value employees
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Bruce", "Willis", 1),
("Danny", "Glover", 1),
("Charlize", "Theron", 2),
("Linda", "Hamilton", 2),
("Saul", "Goodman", 3),
("Wee", "Bay", 4),
("Stringer", "Bell", 5);

