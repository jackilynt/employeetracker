const connection = require('../db/connection');

class Department {
  // Method to retrieve all departments from the database
  static getAllDepartments() {
    return connection.query('SELECT * FROM department');
  }

  // Method to add a new department to the database
  static addDepartment(departmentName) {
    return connection.query('INSERT INTO department SET ?', { name: departmentName });
  }
}

module.exports = Department;
