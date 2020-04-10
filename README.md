# Employee Tracker
Homework 12 assignment

## Table of Contents

* Description
* Installation
* Usage
* Known Issues
* License
* Contributors
* Tests
* Questions

## Description
This a simple organizational CMS, that allows the user to manage a variety of staff administration functions utilizing a CLI. Within this application, the user navigates a menu list of options which enable them to perform the following functions:

  * Add departments, roles, and employees

  * Review departments, roles, and employees

  * Update employee roles

## Installation
Repository at: https://github.com/imAnonAmi/Employee-Tracker

Once downloaded locally:

1. From your terminal, navigate to the proper folder:

/employee-tracker/

2. When you have navigated to this folder in your terminal, type the following command to load all dependencies:

npm i

3. Utilizing MySQL Workbench, create the required database and table using the schema_ET.sql file. You can then run the seed_ET.sql file in MySQL Workbench, which will auto-populate some starting data to work with.

4. IMPORTANT! Within the app_ET.js file, you will need to enter your password where indicated and save the file in order for the app to work.

5. When you have completed all of the above type the following command (still inside the /employee-tracker folder) to run app:

node app_ET.js

## Usage
Once the user has launched the app, they can make a variety of choices utilizing the main menu and subsequent prompts. Selections are all driven by IDs, which can be reviewed prior to making any changes using the appropriate main menu options (Review Department/Role/Employee).

## Known Issues

None

## License

N/A

## Contributors

imAnonAmi

## Tests

N/A

## Questions and Further Thoughts

