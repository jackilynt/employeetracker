// const inquirer = require('inquirer');
// const connection = require('./db/connection');
// const Department = require('./lib/department');
// const Role = require('./lib/role');
// const Employee = require('./lib/employee');

// // Establish database connection
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database.');

//   // Start the application
//   promptUser();
// });

const inquirer = require('inquirer');
const connection = require('./db/connection');
const Department = require('./lib/department');
const Role = require('./lib/role');
const Employee = require('./lib/employee');

// Establish database connection
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
  
    // Start the application
    promptUser();
  });
  

// Prompt user for actions
function promptUser() {
  inquirer
    .prompt([
      {
        name: 'action',
        message: 'What would you like to do?',
        type: 'list',
        choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add a Department',
          'Add a Role',
          'Add an Employee',
          'Update an Employee Role',
          'Exit',
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case 'View All Departments':
          viewAllDepartments();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'View All Employees':
          viewAllEmployees();
          break;
        case 'Add a Department':
          addDepartment();
          break;
        case 'Add a Role':
          addRole();
          break;
        case 'Add an Employee':
          addEmployee();
          break;
        case 'Update an Employee Role':
          updateEmployeeRole();
          break;
        case 'Exit':
          exitApp();
          break;
      }
    });
}

// View all departments
function viewAllDepartments() {
  Department.getAllDepartments((err, departments) => {
    if (err) throw err;
    console.table(departments);
    promptUser();
  });
}

// View all roles
function viewAllRoles() {
  Role.getAllRoles((err, roles) => {
    if (err) throw err;
    console.table(roles);
    promptUser();
  });
}

// View all employees
function viewAllEmployees() {
  Employee.getAllEmployees((err, employees) => {
    if (err) throw err;
    console.table(employees);
    promptUser();
  });
}

// Add a department
function addDepartment() {
  inquirer
    .prompt([
      {
        name: 'name',
        message: 'Enter the name of the department:',
        validate: (input) => (input ? true : 'Please enter a department name.'),
      },
    ])
    .then((answer) => {
      const department = new Department(answer.name);
      department.save((err) => {
        if (err) throw err;
        console.log(`Department '${department.name}' added successfully.`);
        promptUser();
      });
    });
}

// Add a role
function addRole() {
  // Fetch departments to display as choices
  Department.getAllDepartments((err, departments) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: 'title',
          message: 'Enter the title of the role:',
          validate: (input) => (input ? true : 'Please enter a role title.'),
        },
        {
          name: 'salary',
          message: 'Enter the salary for the role:',
          validate: (input) => (input ? true : 'Please enter a role salary.'),
        },
        {
          name: 'departmentId',
          message: 'Select the department for the role:',
          type: 'list',
          choices: departments.map((department) => ({
            name: department.name,
            value: department.id,
          })),
        },
      ])
      .then((answer) => {
        const role = new Role(answer.title, answer.salary, answer.departmentId);
        role.save((err) => {
          if (err) throw err;
          console.log(`Role '${role.title}' added successfully.`);
          promptUser();
        });
      });
  });
}

// Add an employee
function addEmployee() {
  // Fetch roles to display as choices
  Role.getAllRoles((err, roles) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: 'firstName',
          message: 'Enter the first name of the employee:',
          validate: (input) => (input ? true : 'Please enter an employee first name.'),
        },
        {
          name: 'lastName',
          message: 'Enter the last name of the employee:',
          validate: (input) => (input ? true : 'Please enter an employee last name.'),
        },
        {
          name: 'roleId',
          message: 'Select the role for the employee:',
          type: 'list',
          choices: roles.map((role) => ({
            name: role.title,
            value: role.id,
          })),
        },
        {
          name: 'managerId',
          message: 'Enter the ID of the employee\'s manager (if applicable):',
        },
      ])
      .then((answer) => {
        const employee = new Employee(answer.firstName, answer.lastName, answer.roleId, answer.managerId);
        employee.save((err) => {
          if (err) throw err;
          console.log(`Employee '${employee.fullName}' added successfully.`);
          promptUser();
        });
      });
  });
}

// Update an employee's role
function updateEmployeeRole() {
  // Fetch employees to display as choices
  Employee.getAllEmployees((err, employees) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: 'employeeId',
          message: 'Select the employee to update:',
          type: 'list',
          choices: employees.map((employee) => ({
            name: employee.fullName,
            value: employee.id,
          })),
        },
      ])
      .then((answer) => {
        const employeeId = answer.employeeId;

        // Fetch roles to display as choices
        Role.getAllRoles((err, roles) => {
          if (err) throw err;

          inquirer
            .prompt([
              {
                name: 'roleId',
                message: 'Select the new role for the employee:',
                type: 'list',
                choices: roles.map((role) => ({
                  name: role.title,
                  value: role.id,
                })),
              },
            ])
            .then((answer) => {
              const roleId = answer.roleId;
              Employee.updateEmployeeRole(employeeId, roleId, (err) => {
                if (err) throw err;
                console.log('Employee role updated successfully.');
                promptUser();
              });
            });
        });
      });
  });
}

// Exit the application
function exitApp() {
  console.log('Exiting the application.');
  connection.end();
  process.exit();
}
