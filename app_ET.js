const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

// Your port; if not 3306
    port: 3306,

// Username set to root
    user: "root",

// Your password. Make sure to ENTER YOUR PASSWORD between "" in order for the app to function properly.
    password: "",
    database: "employee_tracker"
    });

    connection.connect(function(err) {
    if (err) throw err;

runSearch();
    });

// Main menu functionality
    function runSearch() {
        console.log("Welcome to Employee Tracker 3000.");
        inquirer
          .prompt({
            name: "action",
            type: "list",
            message: "Please select from the following options:",
            choices: [
                "Review Departments",
                "Review Roles",
                "Review Employees",
                "Add Department",
                "Add Role",
                "Add Employee",
                "Update an Employee Role",
                "Exit Application"
            ]
          })
          .then(function(answer) {
            switch (answer.action) {

// Don't forget to use connection.query for the below, and to use "back ticks" if appropriate

// Call reviewDepartment which will essentially be: SELECT * FROM department
            case "Review Departments":
              reviewDepartment();
              break;
// Call reviewRole which will essentially be: SELECT * FROM role     
            case "Review Roles":
              reviewRole();
              break;
// Call reviewEmployee which will essentially be: SELECT * FROM employee    
            case "Review Employees":
              reviewEmployee();
              break;
// Call addDepartment which will essentially be: INSERT INTO department (name) VALUES ("XXX"),     
            case "Add Department":
              addDepartment();
              break;
// Call addRole which will essentially be: INSERT INTO role (title, salary, department_id) VALUES ("Sales Team Leader", 45000, 1)     
            case "Add Role":
              addRole();
              break;
// Call addEmployee which will essentially be: INSERT INTO employee (first_name, last_name, role_id) VALUES ("Trevor", "Bruttenholm", 5)
            case "Add Employee":
              addEmployee();
              break;
// Call updateEmployeeRole which will essentially be: UPDATE employee SET role = ? WHERE id = ?
// !!! BE SURE AND REVIEW ICE CREAM CRUD AND IN CLASS WORK ON THIS FOR CONTEXT. IT'S LIKE THE PROJECT WE WORKED ON EARLIER SYNTAX WISE.
            case "Update an Employee Role":
              updateEmployeeRole();
              break;

            case "Exit Application":
              console.log("Goodbye diligent employee stalker!");
              connection.end();
              return;
              
            }
          });
      }
// End of runSearch Function. Whew!
// Write other functions below, have them close by calling runSearch to return to Main Menu for validation.