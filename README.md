# Employee Tracking System

The Employee Management System is a command-line application that allows you to manage departments, roles, and employees in a company. It provides functionalities such as viewing all departments, roles, and employees, adding new departments, roles, and employees, updating an employee's role, and more.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the command `npm install` to install the dependencies.

## Configuration

1. Open the `db/connection.js` file and configure the database connection settings (e.g., host, port, username, password) according to your database setup.

## Usage

1. Run the command `node index.js` to start the application.
2. You will be presented with a menu of options. Use the arrow keys to navigate and press Enter to select an option.
3. Follow the prompts to perform the desired actions, such as viewing departments, adding a role, updating an employee's role, and more.
4. Use the menu option "Exit" to quit the application.

## Dependencies

The project uses the following dependencies:

- inquirer: For handling user prompts and inputs.
- mysql2: For connecting to and interacting with the MySQL database.

## Create Database

create database employee_db;

## Create Tables

To establish the correct order for creating the tables, you need to consider the dependencies between them. Based on the structure of your tables, you should create them in the following order:

Department table - Since the Role table has a foreign key reference to the department_id column in the Department table, you should create the Department table first.

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

Role table - Once the Department table is created, you can create the Role table that references the Department table.

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

Employee table - Finally, after creating both the Department and Role tables, you can create the Employee table. The Employee table has foreign key references to both the role_id column in the Role table and the manager_id column in the same Employee table.

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

## Project Structure

The project has the following structure:

- `index.js`: The main entry point of the application.
- `db/connection.js`: Establishes the connection with the MySQL database.
- `lib/department.js`: Contains the Department class and methods for managing departments.
- `lib/role.js`: Contains the Role class and methods for managing roles.
- `lib/employee.js`: Contains the Employee class and methods for managing employees.

## Contributing

Jackilyn Tan - Carleton Bootcmap

## License

The Employee Tracking System is open source and released under the [MIT License](LICENSE).

## Future Development

Fix the add and update routes to the dbs