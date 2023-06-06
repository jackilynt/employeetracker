const connection = require('../db/connection');

class Employee {
  // Method to retrieve all employees from the database
  static getAllEmployees() {
    return connection.query(`
      SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      LEFT JOIN role r ON e.role_id = r.id
      LEFT JOIN department d ON r.department_id = d.id
      LEFT JOIN employee m ON e.manager_id = m.id
    `);
  }

  // Method to add a new employee to the database
  static addEmployee(employeeData) {
    return connection.query('INSERT INTO employee SET ?', employeeData);
  }

  // Method to update an employee's role in the database
  static updateEmployeeRole(employeeId, roleId) {
    return connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
  }
}

module.exports = Employee;
