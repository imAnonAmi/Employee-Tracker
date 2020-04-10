const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",


  port: 3306,
  user: "root",

  // Make sure to ENTER YOUR PASSWORD below in-between the "" in order for the app to function.
  password: "",
  database: "employee_tracker"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");

  runSearch();
});

// Main menu functionality is contained in runSearch. All other functions end by bringing user back here to perform additional functions or exit application.
function runSearch() {
  console.log("Welcome to the Employee Tracker 3000.");
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
    .then(function (answer) {
      switch (answer.action) {

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
        // Call addDepartment which will essentially be: INSERT INTO department (name) VALUES ("XXX")     
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
        // Terminates SQL connection and returns out of JS, leaving user at command prompt.
        case "Exit Application":
          console.log("Goodbye diligent employee stalker!");
          connection.end();
          return;

      }
    });
};
// --------------------------------------------------


// Individual functions (main menu options)

// reviewDepartment which will essentially be: SELECT * FROM department
function reviewDepartment() {
  console.log("Showing all departments:\n");
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;

    console.table(res);
    runSearch();
  });
};
// reviewRole which will essentially be: SELECT * FROM role
function reviewRole() {
  console.log("Showing all roles:\n");
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;

    console.table(res);
    runSearch();
  });
};
// reviewEmployee which will essentially be: SELECT * FROM employee
function reviewEmployee() {
  console.log("Showing all employees:\n");
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;

    console.table(res);
    runSearch();
  });
};
// addDepartment which will essentially be: INSERT INTO department (name) VALUES ("Acquisitions")
function addDepartment() {

  inquirer
    .prompt({
      name: "newDepartment",
      type: "input",
      message: "Please enter the name of the department you want to add:",

    })
    .then(function (answer) {
      let newDpt = answer.newDepartment;
      connection.query(`INSERT INTO department (name) VALUES ("${newDpt}")`, function (err, res) {

        if (err) throw err;

        console.log("A new department has been created.");
        runSearch();
      });
    });
};
// addRole which will essentially be: INSERT INTO role (title, salary, department_id) VALUES ("Sales Team Leader", 45000, 1)
async function addRole() {

  inquirer
    .prompt([{
      name: "newTitle",
      type: "input",
      message: "Please enter the TITLE of the new role you want to create:"

    },
    {
      name: "newSalary",
      type: "number",
      message: "Please enter the SALARY for this new role (Input must be a number with NO punctuation):"

    },
    {
      name: "newDeptID",
      type: "number",
      message: "Please enter the DEPARTMENT ID for this role (If you do not know your Department ID, you can look it up using Review Departments on the Main Menu.):"

    }])
    .then(function (answer) {
      let newTitle = answer.newTitle;
      let newSalary = answer.newSalary;
      let newDeptID = answer.newDeptID;
      connection.query(`INSERT INTO role (title, salary, department_id) VALUES ("${newTitle}", ${newSalary}, ${newDeptID})`, function (err, res) {

        if (err) throw err;

        console.log("A new role has been created.");
        runSearch();
      });
    });
};
// addEmployee which will essentially be: INSERT INTO employee (first_name, last_name, role_id) VALUES ("Trevor", "Bruttenholm", 6)
async function addEmployee() {

  inquirer
    .prompt([{
      name: "firstName",
      type: "input",
      message: "Please enter the new employee's FIRST name:"

    },
    {
      name: "lastName",
      type: "input",
      message: "Please enter the new employee's LAST name:"

    },
    {
      name: "roleID",
      type: "number",
      message: "Please enter the ROLE ID for this new employee(If you do not know the Role ID, you can look it up using Review Roles on the Main Menu.):"

    }])
    .then(function (answer) {
      let firstName = answer.firstName;
      let lastName = answer.lastName;
      let roleID = answer.roleID;
      connection.query(`INSERT INTO employee (first_name, last_name, role_id) VALUES ("${firstName}", "${lastName}", ${roleID})`, function (err, res) {

        if (err) throw err;

        console.log("A new role has been created.");
        runSearch();
      });
    });
};
// updateEmployeeRole which will essentially be: UPDATE employee SET role = ? WHERE id = ?
async function updateEmployeeRole() {

  inquirer
    .prompt([{
      name: "empID",
      type: "number",
      message: "Please enter the EMPLOYEE ID for the employee whose role you would like to modify (If you do not know the Employee ID, you can look it up using Review Employees on the Main Menu.):"

    },
    {
      name: "roleID",
      type: "number",
      message: "Please enter the ROLE ID for this new employee (If you do not know the Role ID, you can look it up using Review Roles on the Main Menu.):"

    }])
    .then(function (answer) {
      let empID = answer.empID;
      let roleID = answer.roleID;
      connection.query(`UPDATE employee SET role_id = ${roleID} WHERE id = ${empID}`, function (err, res) {

        if (err) throw err;

        console.log("Employee role has been modified.");
        runSearch();
      });
    });
};