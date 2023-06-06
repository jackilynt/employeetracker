const connection = require('../db/connection');

// class Role {
//   // Method to retrieve all roles from the database
//   static getAllRoles() {
//     return connection.query(`
//       SELECT r.id, r.title, r.salary, d.name AS department
//       FROM role r
//       LEFT JOIN department d ON r.department_id = d.id
//     `);
//   }

//   // Method to add a new role to the database
//   static addRole(roleData) {
//     return connection.query('INSERT INTO role SET ?', roleData);
//   }
// }

// module.exports = Role;

// role.js
class Role {
    constructor(title, salary, departmentId) {
      this.title = title;
      this.salary = salary;
      this.departmentId = departmentId;
    }
  
    save(callback) {
      // Save the role to the database
      // Implementation code here
      callback(null);
    }
  
    static getAllRoles(callback) {
      // Retrieve all roles from the database
      // Implementation code here
      const roles = [
        { id: 1, title: 'Role 1', salary: 50000, departmentId: 1 },
        { id: 2, title: 'Role 2', salary: 60000, departmentId: 2 },
        { id: 3, title: 'Role 3', salary: 70000, departmentId: 3 },
      ];
      callback(null, roles);
    }
  }
  
  module.exports = Role;
  