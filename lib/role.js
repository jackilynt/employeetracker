const connection = require('../db/connection');

class Role {
  // Method to retrieve all roles from the database
  static getAllRoles() {
    return connection.query(`
      SELECT r.id, r.title, r.salary, d.name AS department
      FROM role r
      LEFT JOIN department d ON r.department_id = d.id
    `);
  }

  // Method to add a new role to the database
  static addRole(roleData) {
    return connection.query('INSERT INTO role SET ?', roleData);
  }
}

module.exports = Role;
