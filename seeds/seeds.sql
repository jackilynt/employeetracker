-- Departments
INSERT INTO department (name) VALUES
  ('Sales'),
  ('Engineering'),
  ('Marketing'),
  ('Finance');

-- Roles
INSERT INTO role (title, salary, department_id) VALUES
  ('Salesperson', 60000, 1),
  ('Sales Manager', 80000, 1),
  ('Software Engineer', 75000, 2),
  ('Software Manager', 95000, 2),
  ('Marketing Specialist', 50000, 3),
  ('Finance Manager', 90000, 4);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('John', 'Smith', 3, 2),
  ('Jane', 'Doe', 4, 2),
  ('Emily', 'Brown', 5, 3),
  ('David', 'Brown', 6, 4);
