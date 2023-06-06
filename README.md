# Employee Management System

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
