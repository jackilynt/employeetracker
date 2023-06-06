const connection = require('../db/connection');

// class Department {
//   // Method to retrieve all departments from the database
//   static getAllDepartments() {
//     return connection.query('SELECT * FROM department');
//   }

//   // Method to add a new department to the database
//   static addDepartment(departmentName) {
//     return connection.query('INSERT INTO department SET ?', { name: departmentName });
//   }
// }

// module.exports = Department;


// department.js
class Department {
    constructor(name) {
      this.name = name;
    }
  
    save(callback) {
      // Save the department to the database
      // Implementation code here
      callback(null);
    }
  
    static getAllDepartments(callback) {
      // Retrieve all departments from the database
      // Implementation code here
      const departments = [
        { id: 1, name: 'Department 1' },
        { id: 2, name: 'Department 2' },
        { id: 3, name: 'Department 3' },
      ];
      callback(null, departments);
    }
  }
  
  module.exports = Department;